import posthog from "posthog-js";
import type { Persona } from "@/lib/leads/types";

/**
 * Thin analytics wrapper.
 *
 * Every call goes through `track()`, which no-ops when no PostHog key
 * is configured. That is what keeps local development and the test
 * suite clean — without it, every dev session would either throw or
 * pollute production analytics with fixture data, and someone would
 * eventually "fix" it by deleting the tracking calls.
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
  | "funnel_booking_created";

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
 * Initialise PostHog once, keyed to the funnel session.
 *
 * `sessionId` becomes the distinct_id so the client-side funnel and the
 * server-side lead row describe the same person. Without that, you have
 * a drop-off report and a leads table that cannot be joined, and the
 * question "which step lost the founder who did convert" is
 * unanswerable.
 */
export function initAnalytics(sessionId: string): void {
  if (initialised || !isConfigured() || typeof window === "undefined") return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    // The funnel drives its own events; automatic pageview capture would
    // add noise to a report whose whole value is a clean step sequence.
    capture_pageview: false,
    autocapture: false,
    /**
     * Session replay is enabled here and nowhere else on the site.
     * Watching ten real sessions is worth more than aggregate numbers
     * when deciding whether a question is confusing — but replay on
     * every page is a privacy cost with no matching payoff.
     */
    disable_session_recording: false,
    persistence: "memory",
  });

  posthog.identify(sessionId);
  initialised = true;
}

export function track(event: FunnelEvent, props: EventProps = {}): void {
  if (!initialised || !isConfigured()) return;

  // Undefined values are stripped so PostHog properties stay clean —
  // a property that is sometimes absent and sometimes null is harder to
  // filter on than one that is simply absent.
  const clean: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined && value !== null && value !== "") {
      clean[key] = value;
    }
  }

  posthog.capture(event, clean);
}

/** Flush pending events. Called before the page goes away. */
export function flushAnalytics(): void {
  if (!initialised || !isConfigured()) return;
  // Best effort — the browser may tear down first.
  try {
    posthog.capture("$pageleave");
  } catch {
    // ignore
  }
}
