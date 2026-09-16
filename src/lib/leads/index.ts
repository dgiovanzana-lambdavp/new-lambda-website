import "server-only";

import { consoleDestination } from "./destinations/console";
import { emailDestination } from "./destinations/email";
import { postgresDestination } from "./destinations/postgres";
import type { LeadDestination, LeadScoring, LeadSubmission } from "./types";

export * from "./types";

/**
 * The registered destinations, in the order they are attempted.
 *
 * Stubs (hubspot, airtable, scheduling-agent) are deliberately absent.
 * They exist as files so the shape is settled, but registering an
 * unimplemented destination would mean every submission logs a failure
 * forever, and a log full of expected failures is a log nobody reads.
 */
const destinations: LeadDestination[] = [
  postgresDestination,
  emailDestination,
  // Dev only; the destination itself no-ops in production.
  ...(process.env.NODE_ENV === "production" ? [] : [consoleDestination]),
];

export interface DeliveryReport {
  /** Whether the system of record accepted the lead. */
  persisted: boolean;
  results: { name: string; ok: boolean; error?: string }[];
}

/**
 * Deliver a lead to every destination.
 *
 * ── Independent failure ─────────────────────────────────────────────
 *
 * The naive version awaits each destination in sequence:
 *
 *     await postgres.send(lead);
 *     await email.send(lead);
 *
 * If email throws there, the function exits and the user gets a 500 —
 * even though their lead was saved perfectly. A notification failure
 * would have cost a real founder their confirmation screen. So every
 * destination is settled independently and one failing can never
 * affect another.
 *
 * ── The one asymmetry ───────────────────────────────────────────────
 *
 * If Postgres fails we log loudly and STILL report success to the
 * user. That looks wrong — the record was lost and the visitor is told
 * everything is fine. But consider the alternative: they see an error,
 * refile or leave, and now you have lost the person as well as the
 * record. Failing the response does not recover the write, so it buys
 * nothing and costs a lead.
 *
 * The caller decides what to do with `persisted`. Nothing here throws.
 */
export async function deliverLead(
  lead: LeadSubmission,
  scoring: LeadScoring | null,
): Promise<DeliveryReport> {
  const settled = await Promise.allSettled(
    destinations.map((destination) => destination.send(lead, scoring)),
  );

  const results = settled.map((outcome, i) => {
    const name = destinations[i].name;

    // A rejected promise means a destination threw despite the contract
    // saying it must not. Caught here so a misbehaving adapter still
    // cannot take down the others.
    if (outcome.status === "rejected") {
      const error = String(outcome.reason);
      console.error(`[leads] destination "${name}" threw: ${error}`);
      return { name, ok: false, error };
    }

    return { name, ...outcome.value };
  });

  const persisted =
    results.find((r) => r.name === postgresDestination.name)?.ok ?? false;

  if (!persisted) {
    console.error(
      `[leads] LEAD NOT PERSISTED — session=${lead.meta.sessionId} ` +
        `email=${lead.contact.email} persona=${lead.persona}. ` +
        "The user was shown success. Recover from the notification email.",
    );
  }

  return { persisted, results };
}
