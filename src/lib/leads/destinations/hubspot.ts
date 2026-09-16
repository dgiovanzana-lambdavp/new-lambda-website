import "server-only";

import type { LeadDestination } from "@/lib/leads/types";

/**
 * STUB — not implemented, not registered.
 *
 * Left in place so adding CRM sync later is filling in one function
 * rather than reopening the delivery architecture.
 */
export const hubspotDestination: LeadDestination = {
  name: "hubspot",

  async send() {
    // Field mapping goes here: contact.email → HubSpot `email`,
    // contact.company → `company`, attribution.utm_source →
    // `hs_analytics_source`, answers.* → custom properties, and
    // meta.sessionId → a custom property so bookings still join back.
    return { ok: false, error: "hubspot destination not implemented" };
  },
};
