import { clearAttribution } from "@/lib/attribution";
import { clearAllState } from "@/lib/funnel/storage";
import { clearSessionId } from "@/lib/session";

/**
 * Handle `?resetProgress=1`.
 *
 * ── Why this is shared rather than inlined ──────────────────────────
 *
 * The funnel has TWO entry points: the router screen at /contact and a
 * deep link straight into /contact/[persona]. This originally lived
 * only in the funnel component, which meant `?resetProgress=1` silently
 * did nothing on the router screen.
 *
 * That is the worse half to miss. Campaign links point at /contact far
 * more often than at a persona route, so the one place you most want to
 * reset while testing attribution was the one place that ignored you —
 * and because attribution is first-touch-wins, the stale tags from the
 * previous run were preserved and looked like a successful capture.
 * A test that appears to pass while measuring the wrong thing is worse
 * than one that fails.
 *
 * Reset clears everything: answers, session id, and attribution. A
 * partial reset is the confusing middle ground — a fresh session with
 * the previous run's tags orphans any partial row already sent under
 * the old id, and makes a test look like it captured tags it never saw.
 *
 * Returns whether a reset happened, mostly so callers can log it.
 */
export function applyResetIfRequested(): boolean {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);
  if (params.get("resetProgress") !== "1") return false;

  clearAllState();
  clearSessionId();
  clearAttribution();
  return true;
}
