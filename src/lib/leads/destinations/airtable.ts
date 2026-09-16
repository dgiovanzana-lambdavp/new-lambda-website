import "server-only";

import type { LeadDestination } from "@/lib/leads/types";

/**
 * STUB — not implemented, not registered.
 */
export const airtableDestination: LeadDestination = {
  name: "airtable",

  async send() {
    // Field mapping goes here: one record per lead, with `answers`
    // flattened to columns (Airtable has no JSON cell type worth
    // querying) and meta.sessionId as the primary external key.
    return { ok: false, error: "airtable destination not implemented" };
  },
};
