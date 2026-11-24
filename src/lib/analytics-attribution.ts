import type { LeadAttribution } from "@/lib/leads/types";
import { getAttribution } from "@/lib/attribution";

const INTERNAL_FLAG_KEY = "lambda_internal_opt_out_v1";

/** PostHog event properties sourced from first-touch session attribution. */
export function attributionEventProps(): Record<string, string | undefined> {
  if (typeof window === "undefined") return {};
  const a = getAttribution();
  return leadAttributionToEventProps(a);
}

export function leadAttributionToEventProps(
  a: Partial<LeadAttribution>,
): Record<string, string | undefined> {
  return {
    utm_source: a.utm_source,
    utm_medium: a.utm_medium,
    utm_campaign: a.utm_campaign,
    utm_content: a.utm_content,
    utm_term: a.utm_term,
    referrer: a.referrer,
    landing_path: a.landing_path,
  };
}

export function isInternalTrafficOptedOut(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(INTERNAL_FLAG_KEY) === "1";
  } catch {
    return false;
  }
}

/** `?internal=1` opts this browser out of PostHog capture for good. */
export function applyInternalTrafficFlagFromUrl(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get("internal") !== "1") return false;
  try {
    window.localStorage.setItem(INTERNAL_FLAG_KEY, "1");
  } catch {
    // ignore
  }
  return true;
}