import { z } from "zod";

/**
 * Server-side validation for the lead payload.
 *
 * The funnel already validates each step in the browser. This is not a
 * duplicate of that — it is the only validation that counts. Client
 * checks exist to help an honest user; anything reaching this route
 * arrived over HTTP and could have been sent by curl. TypeScript is
 * erased at runtime, so Zod is what actually inspects the shape.
 *
 * Length caps throughout: an unbounded text field is an invitation to
 * post a megabyte of junk into a JSONB column.
 */

const answerValue = z.union([
  z.string().max(5_000),
  z.array(z.string().max(500)).max(50),
]);

export const leadSubmissionSchema = z.object({
  persona: z.enum(["founder", "lp", "services", "general"]),

  contact: z.object({
    firstName: z.string().min(1, "First name is required").max(100),
    lastName: z.string().max(100).optional(),
    email: z.email("Enter a valid email address").max(254),
    phone: z.string().max(50).optional(),
    company: z.string().max(200).optional(),
    companyUrl: z.string().max(500).optional(),
  }),

  // Open-ended by design: the whole point of the JSONB column is that
  // adding a question needs no migration, and it would defeat that to
  // enumerate every question id here.
  answers: z.record(z.string().max(100), answerValue),

  attribution: z.object({
    utm_source: z.string().max(200).optional(),
    utm_medium: z.string().max(200).optional(),
    utm_campaign: z.string().max(200).optional(),
    utm_content: z.string().max(200).optional(),
    utm_term: z.string().max(200).optional(),
    referrer: z.string().max(1000).optional(),
    landing_path: z.string().max(500).optional(),
    heard_about_us: z.string().max(200),
  }),

  meta: z.object({
    submittedAt: z.string().max(40),
    completedSteps: z.number().int().min(0).max(100),
    totalSteps: z.number().int().min(0).max(100),
    isPartial: z.boolean(),
    // Must be a real UUID — it is written to a uuid column, and a
    // malformed value would fail at the database rather than here,
    // where the error is legible.
    sessionId: z.uuid(),
  }),

  // ── Transport-only anti-spam fields ────────────────────────────────
  // Consumed by the route and never stored.
  _hp: z.string().max(200).optional(),
  _startedAt: z.number().optional(),
});

export type ValidatedLead = z.infer<typeof leadSubmissionSchema>;

/**
 * Flatten Zod issues into `{ "contact.email": "message" }`.
 *
 * A flat map keyed by dotted path is what a form can actually consume —
 * Zod's nested issue tree would have to be walked by the client, which
 * would put validation logic back in the browser.
 */
export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const path = issue.path.join(".");
    // First issue per field wins; showing three messages for one input
    // is noise.
    if (!(path in fieldErrors)) fieldErrors[path] = issue.message;
  }
  return fieldErrors;
}
