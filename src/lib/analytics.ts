import posthog from "posthog-js";
import type { Persona } from "@/lib/leads/types";

/**
 * Thin analytics wrapper.
 *
 * Requires `NEXT_PUBLIC_POSTHOG_KEY` (and optionally
 * `NEXT_PUBLIC_POSTHOG_HOST`, default US cloud). Set both on the
 * Railway production and staging services; see `.env.example`.
 *
 * What this module covers once the key is present:
 *   • site-wide `$pageview` via `trackPageview` / AnalyticsProvider
 *     (initial load + App Router SPA navigations; blog tagged)
 *   • blog `blog_cta_click`, `jump_link_click`, `blog_scroll_depth`
 *   • contact funnel events via `track` + `initAnalytics`
 *
 * Every call no-ops when the key is unset — local/test stay clean.
 *
 * IMPORTANT: client-side; never import scoring config. `tier` in event
 * payloads is only a value the server already decided.
 */

/**
 * Funnel events. A closed set, so reports stay comparable.
 *
 * `funnel_view` fires on page load. `funnel_start` fires on the first
 * real interaction (focus, keypress, or pill click), so bounces are
 * not counted as abandoned starts.
 */
export type FunnelEvent =
  | "funnel_view"
  | "funnel_start"
  | "funnel_step_view"
  | "funnel_answer"
  | "funnel_validation_error"
  | "funnel_partial"
  | "funnel_complete"
  | "funnel_calendar_shown"
  | "funnel_booking_link_clicked"
  | "funnel_booking_created";

/** Marketing / blog events outside the contact funnel. */
export type MarketingEvent =
  | "blog_cta_click"
  | "jump_link_click"
  | "blog_scroll_depth";

export type AnalyticsEvent = FunnelEvent | MarketingEvent;

export interface EventProps {
  persona?: Persona;
  step_id?: string;
  utm_source?: string;
  tier?: string;
  /** Failing field names for `funnel_validation_error`. */
  fields?: string[];
  [key: string]: unknown;
}

let initialised = false;

function isConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);
}

/**
 * Initialise PostHog once for the whole site.
 *
 * Autocapture stays off — we own the event names. Automatic pageviews
 * stay off too; `AnalyticsProvider` fires `$pageview` on App Router
 * navigations so SPA transitions are counted without double-firing on
 * the first load.
 *
 * Session replay stays disabled here. The funnel turns it on after
 * identify (see `initAnalytics`) so marketing pages do not record
 * browsing sessions.
 */
export function ensureAnalytics(): void {
  if (initialised || !isConfigured() || typeof window === "undefined") return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    capture_pageview: false,
    autocapture: false,
    capture_exceptions: true,
    disable_session_recording: true,
    persistence: "memory",
  });

  initialised = true;
}

/**
 * Initialise PostHog for a funnel session and enable replay.
 *
 * `sessionId` becomes the distinct_id so the client-side funnel and the
 * server-side lead row describe the same person. Without that, you have
 * a drop-off report and a leads table that cannot be joined.
 *
 * Replay is enabled only after identify — watching real funnel sessions
 * is worth the privacy cost; replay on every marketing page is not.
 */
export function initAnalytics(sessionId: string): void {
  if (!isConfigured() || typeof window === "undefined") return;

  ensureAnalytics();
  posthog.identify(sessionId);
  posthog.startSessionRecording();
}

/** Manual `$pageview` for App Router navigations (including SPA). */
export function trackPageview(props: EventProps = {}): void {
  if (!isConfigured() || typeof window === "undefined") return;
  ensureAnalytics();
  if (!initialised) return;

  const clean = cleanProps(props);
  posthog.capture("$pageview", clean);
}

type CaptureOptions = {
  /** Skip the request queue — needed when a link navigates away immediately. */
  send_instantly?: boolean;
  transport?: "sendBeacon" | "fetch" | "XHR";
};

export function track(
  event: AnalyticsEvent,
  props: EventProps = {},
  options?: CaptureOptions,
): void {
  if (!isConfigured() || typeof window === "undefined") return;
  ensureAnalytics();
  if (!initialised) return;

  posthog.capture(event, cleanProps(props), options);
}

/** Flush pending events. Called before the page goes away. */
export function flushAnalytics(): void {
  if (!initialised || !isConfigured()) return;
  try {
    posthog.capture("$pageleave");
  } catch {
    // ignore
  }
}

function cleanProps(props: EventProps): Record<string, unknown> {
  // Undefined values are stripped so PostHog properties stay clean —
  // a property that is sometimes absent and sometimes null is harder to
  // filter on than one that is simply absent.
  const clean: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined && value !== null && value !== "") {
      clean[key] = value;
    }
  }
  return clean;
}
