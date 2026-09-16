/**
 * The contract every layer of the funnel agrees on.
 *
 * This file is imported by client components, the API route, the
 * database layer, and every destination. It therefore contains types
 * ONLY — no logic, no thresholds, no secrets. Anything added here ships
 * to the browser.
 */

export type Persona = "founder" | "lp" | "services" | "general";

export const PERSONAS: readonly Persona[] = [
  "founder",
  "lp",
  "services",
  "general",
] as const;

export function isPersona(value: string): value is Persona {
  return (PERSONAS as readonly string[]).includes(value);
}

/**
 * A single-select answer is a string; a multi-select is an array.
 * Deliberately narrow — if an answer could be an arbitrary object, the
 * JSONB column becomes unqueryable in practice.
 */
export type AnswerValue = string | string[];
export type Answers = Record<string, AnswerValue>;

/**
 * Campaign attribution. This is the reason the rebuild exists: without
 * these fields surviving to the database, we can count bookings but
 * never attribute them.
 */
export interface LeadAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_path?: string;
  heard_about_us: string;
}

export interface LeadContact {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  companyUrl?: string;
}

export interface LeadSubmission {
  persona: Persona;
  contact: LeadContact;
  answers: Answers;
  attribution: LeadAttribution;
  meta: {
    /** ISO 8601 */
    submittedAt: string;
    completedSteps: number;
    totalSteps: number;
    /** true when flushed by the abandonment beacon */
    isPartial: boolean;
    /** uuid, stable per session — the join key across every system */
    sessionId: string;
  };
}

/**
 * What the browser is allowed to learn about its own submission.
 *
 * Note what is absent: no tier, no score, no failed gates, no reasons.
 * The user sees a calendar or a courteous reply, and nothing about the
 * machinery. Widening this type is how that guarantee gets broken, so
 * treat any addition here as a decision, not a convenience.
 */
export type Outcome = "book" | "review" | "decline";

export interface LeadResponse {
  outcome: Outcome;
  calendarUrl?: string;
}

/**
 * The scoring verdict, as destinations see it.
 *
 * Structurally identical to `ScoreResult` from lib/leads/score.ts, but
 * declared here so this file stays free of any import from the scoring
 * module. types.ts is imported by client components; scoring.ts is
 * server-only. Re-declaring four fields is a smaller price than a
 * coupling that would need a build-time guard to stay safe.
 *
 * `null` for personas that are never scored (lp, services, general).
 */
export interface LeadScoring {
  tier: "A" | "B" | "C";
  outcome: Outcome;
  failedGates: string[];
  scoreVersion: string;
}

/**
 * A place a lead gets delivered.
 *
 * ── A deliberate departure from the spec's signature ────────────────
 *
 * The spec writes `send(lead: LeadSubmission)`. That signature cannot
 * satisfy the spec's own acceptance criteria: `tier`, `failedGates`,
 * and `scoreVersion` must be persisted on every stored lead, and none
 * of them exist on LeadSubmission — scoring happens on the server,
 * after the browser's payload arrives. The email destination needs the
 * same data to put failed gates in the subject line.
 *
 * The alternative would be widening LeadSubmission to carry scoring,
 * which would put tier and failed gates in the type the CLIENT builds
 * and posts. That is the one thing the design is trying to prevent.
 * So the verdict travels as a second argument instead.
 *
 * Implementations must never throw. They report failure in the return
 * value, so one destination failing cannot take down another or the
 * user's thank-you screen.
 */
export interface LeadDestination {
  name: string;
  send(
    lead: LeadSubmission,
    scoring: LeadScoring | null,
  ): Promise<{ ok: boolean; error?: string }>;
}
