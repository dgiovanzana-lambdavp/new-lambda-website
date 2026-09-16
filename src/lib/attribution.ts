import type { LeadAttribution } from "@/lib/leads/types";

/**
 * Campaign attribution capture.
 *
 * Half the point of the rebuild. If the funnel works perfectly and the
 * tags get dropped, the project failed — so the rules here are
 * deliberately conservative.
 */

const STORAGE_KEY = "lambda_attribution_v1";

/** Everything except `heard_about_us`, which is answered in the flow. */
export type CapturedAttribution = Omit<LeadAttribution, "heard_about_us">;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

function readStored(): CapturedAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CapturedAttribution) : null;
  } catch {
    // Private browsing, disabled storage, or corrupt JSON. Attribution
    // is valuable but never worth breaking the form over.
    return null;
  }
}

/**
 * Capture attribution on first load and reuse it for the rest of the
 * session.
 *
 * ── First touch wins, deliberately ─────────────────────────────────
 *
 * Once captured, a later page view without UTM params must not
 * overwrite the stored values. Consider the ordinary path: someone
 * clicks a tagged LinkedIn link to /contact?utm_source=linkedin, then
 * picks a persona and moves to /contact/founder — a URL with no params
 * at all. Re-capturing there would replace "linkedin" with nothing, on
 * the single navigation every visitor makes.
 *
 * The stored copy is therefore authoritative for the whole session, and
 * the only writes are the first one.
 */
export function captureAttribution(): CapturedAttribution {
  if (typeof window === "undefined") return {};

  const existing = readStored();
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const captured: CapturedAttribution = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    // Only store non-empty values, so `?utm_source=` doesn't record "".
    if (value) captured[key] = value;
  }

  // document.referrer is empty for direct visits and stripped by some
  // privacy settings. Empty is a legitimate answer, not an error.
  if (document.referrer) captured.referrer = document.referrer;

  // The page they actually landed on — distinguishes a deep link into
  // /contact/founder from the /contact router screen, which tells you
  // whether a campaign is sending people straight into the funnel.
  captured.landing_path = window.location.pathname;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // Non-fatal: we still return the values for this page view.
  }

  return captured;
}

/** Read without capturing. Returns {} before the first capture. */
export function getAttribution(): CapturedAttribution {
  if (typeof window === "undefined") return {};
  return readStored() ?? {};
}

export function clearAttribution(): void {
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
