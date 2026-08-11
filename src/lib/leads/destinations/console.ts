import "server-only";

import type {
  LeadDestination,
  LeadScoring,
  LeadSubmission,
} from "@/lib/leads/types";

/**
 * Development only.
 *
 * Registered solely so the funnel is fully exercisable before Neon and
 * Resend exist: you can complete a submission, see the whole payload,
 * and confirm the UTM tags survived — with no accounts configured.
 *
 * The production guard is not decoration. Lead payloads carry names,
 * emails, phone numbers, and company financials; on a hosted platform
 * stdout is retained, searchable, and visible to anyone with log
 * access. The spec's "never log full payloads in production" is a
 * privacy requirement, so the check lives inside the destination rather
 * than depending on someone remembering not to register it.
 */
export const consoleDestination: LeadDestination = {
  name: "console",

  async send(lead: LeadSubmission, scoring: LeadScoring | null) {
    if (process.env.NODE_ENV === "production") {
      return { ok: true };
    }

    console.log(
      "\n[leads:console] ─────────────────────────────────────────────",
    );
    console.log(JSON.stringify({ lead, scoring }, null, 2));
    console.log(
      "[leads:console] ─────────────────────────────────────────────\n",
    );

    return { ok: true };
  },
};
