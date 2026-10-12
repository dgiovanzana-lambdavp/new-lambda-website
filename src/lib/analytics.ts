import posthog from "posthog-js";
import type { Persona } from "@/lib/leads/types";

/**
 * Thin analytics wrapper.
 *
 * Every call goes through `track()` / `trackPageview()`, which no-op when
 * no PostHog key is configured. That keeps local development and the
 * test suite clean — without it, every dev session would either throw
 * or pollute production analytics with fixture data.
 *
 * IMPORTANT: this module is client-side and therefore ships to the
 * browser. It must never import scoring config. `tier` appears in some
 * event payloads, but only as a value the SERVER already decided and
 * handed back — the thresholds behind it stay on the server.
 */

/** The seven funnel events. A closed set, so reports stay comparable. */
export type FunnelEvent =
  | "funnel_start"
  | "funnel_step_view"
  | "funnel_answer"
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
