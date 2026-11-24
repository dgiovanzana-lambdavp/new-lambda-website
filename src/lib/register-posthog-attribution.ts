import posthog from "posthog-js";
import { captureAttribution } from "@/lib/attribution";
import {
  isInternalTrafficOptedOut,
  leadAttributionToEventProps,
} from "@/lib/analytics-attribution";

let registered = false;

/**
 * Mirror session first-touch attribution into PostHog super properties
 * and person `$initial_*` fields so later funnel steps keep the source.
 */
export function registerPosthogAttribution(): void {
  if (registered || typeof window === "undefined" || isInternalTrafficOptedOut()) {
    return;
  }

  const captured = captureAttribution();
  const props = leadAttributionToEventProps(captured);
  const clean: Record<string, string> = {};

  for (const [key, value] of Object.entries(props)) {
    if (typeof value === "string" && value.length > 0) {
      clean[key] = value;
    }
  }

  if (Object.keys(clean).length > 0) {
    posthog.register(clean);
  }

  const initial: Record<string, string> = {};
  if (captured.utm_source) initial.$initial_utm_source = captured.utm_source;
  if (captured.utm_medium) initial.$initial_utm_medium = captured.utm_medium;
  if (captured.utm_campaign)
    initial.$initial_utm_campaign = captured.utm_campaign;
  if (captured.utm_content) initial.$initial_utm_content = captured.utm_content;
  if (captured.utm_term) initial.$initial_utm_term = captured.utm_term;
  if (captured.referrer) initial.$initial_referrer = captured.referrer;
  if (captured.landing_path) initial.initial_landing_path = captured.landing_path;

  if (Object.keys(initial).length > 0) {
    posthog.people.set_once(initial);
  }

  registered = true;
}