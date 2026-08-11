import "server-only";

import { eq } from "drizzle-orm";
import { getDb, leads } from "@/lib/db";
import type {
  LeadDestination,
  LeadScoring,
  LeadSubmission,
} from "@/lib/leads/types";

/**
 * The system of record.
 *
 * This destination is not optional and must not fail silently. Email is
 * a notification — you can always re-send it from the record. The
 * record is reproducible from nothing.
 */
export const postgresDestination: LeadDestination = {
  name: "postgres",

  async send(lead: LeadSubmission, scoring: LeadScoring | null) {
    const db = getDb();

    if (!db) {
      // Loud, and deliberately phrased so it is obvious in a log stream
      // that this is a configuration gap rather than a transient fault.
      console.error(
        "[leads:postgres] DATABASE_URL is not set — lead NOT persisted. " +
          `session=${lead.meta.sessionId} email=${lead.contact.email}`,
      );
      return { ok: false, error: "DATABASE_URL not configured" };
    }

    try {
      const now = new Date();

      const values = {
        persona: lead.persona,
        isPartial: lead.meta.isPartial,

        firstName: lead.contact.firstName,
        lastName: lead.contact.lastName ?? null,
        email: lead.contact.email,
        phone: lead.contact.phone ?? null,
        company: lead.contact.company ?? null,
        companyUrl: lead.contact.companyUrl ?? null,

        answers: lead.answers,

        utmSource: lead.attribution.utm_source ?? null,
        utmMedium: lead.attribution.utm_medium ?? null,
        utmCampaign: lead.attribution.utm_campaign ?? null,
        utmContent: lead.attribution.utm_content ?? null,
        utmTerm: lead.attribution.utm_term ?? null,
        referrer: lead.attribution.referrer ?? null,
        landingPath: lead.attribution.landing_path ?? null,
        heardAboutUs: lead.attribution.heard_about_us || null,

        tier: scoring?.tier ?? null,
        outcome: scoring?.outcome ?? null,
        failedGates: scoring?.failedGates ?? null,
        scoreVersion: scoring?.scoreVersion ?? null,

        sessionId: lead.meta.sessionId,
        updatedAt: now,
      };

      /**
       * UPSERT on sessionId, never a plain insert.
       *
       * A visitor who fills in contact details, abandons, then returns
       * and finishes must end up as ONE row that gets upgraded from
       * partial to complete — not two rows to be deduplicated by hand
       * later, which would also inflate every leads-by-source count.
       *
       * ── setWhere: a completed row is immutable to partial data ─────
       *
       * `sendBeacon` hands the payload to the browser, which delivers it
       * independently of the page. So an abandonment beacon can arrive
       * AFTER the fetch that completed the flow. This is a real ordering
       * race, not a theoretical one — visibilitychange fires when the
       * user navigates away from the thank-you screen.
       *
       * Guarding only `isPartial` is not enough, and that mistake is
       * easy to make: the late beacon still overwrites `answers` with a
       * half-finished set and nulls `tier`, `outcome`, `failedGates`,
       * and `scoreVersion`, because partials are deliberately unscored.
       * The row then claims to be a complete submission that was never
       * scored, and a Tier A founder disappears from the booking
       * numbers — silently, with no error anywhere.
       *
       * So the condition covers the whole update, not one column: when
       * the incoming payload is partial, apply it ONLY if the stored row
       * is still partial. Once complete, always complete.
       */
      await db
        .insert(leads)
        .values(values)
        .onConflictDoUpdate({
          target: leads.sessionId,
          set: {
            persona: values.persona,
            isPartial: values.isPartial,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            company: values.company,
            companyUrl: values.companyUrl,
            answers: values.answers,
            utmSource: values.utmSource,
            utmMedium: values.utmMedium,
            utmCampaign: values.utmCampaign,
            utmContent: values.utmContent,
            utmTerm: values.utmTerm,
            referrer: values.referrer,
            landingPath: values.landingPath,
            heardAboutUs: values.heardAboutUs,
            tier: values.tier,
            outcome: values.outcome,
            failedGates: values.failedGates,
            scoreVersion: values.scoreVersion,
            updatedAt: now,
          },
          // Undefined for complete submissions, which always win.
          setWhere: lead.meta.isPartial
            ? eq(leads.isPartial, true)
            : undefined,
        });

      return { ok: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(
        `[leads:postgres] WRITE FAILED session=${lead.meta.sessionId} ` +
          `email=${lead.contact.email} error=${message}`,
      );
      return { ok: false, error: message };
    }
  },
};
