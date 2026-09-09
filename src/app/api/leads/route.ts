import { NextResponse } from "next/server";
import { getBookingLink, getScoringConfig } from "@/lib/config/runtime";
import { deliverLead } from "@/lib/leads";
import { scoreLead } from "@/lib/leads/score";
import type {
  LeadResponse,
  LeadScoring,
  LeadSubmission,
} from "@/lib/leads/types";
import {
  leadSubmissionSchema,
  toFieldErrors,
} from "@/lib/leads/validation";
import { checkRateLimit, clientIpFrom } from "@/lib/rate-limit";

/**
 * POST /api/leads — the only server entry point for the funnel.
 *
 * ── Why scoring lives here and nowhere else ─────────────────────────
 *
 * Lambda's investment criteria are the rules. Anything imported into a
 * React component ships to the browser, where the thresholds are
 * readable by anyone who opens devtools — and a founder who reads them
 * can answer their way onto a partner's calendar. So the browser sends
 * answers and receives `{ outcome, calendarUrl? }`. No tier, no score,
 * no failed gates, no reasons ever cross the wire.
 *
 * This is a Node route handler, which means it CANNOT run on a static
 * export. The site must be deployed to a host that runs server code.
 */

// Node rather than edge: the destinations use the Resend SDK, and this
// route is not latency-critical.
export const runtime = "nodejs";
// Never cached — every request has side effects.
export const dynamic = "force-dynamic";

/** Minimum plausible time to complete the flow. */
const MIN_DURATION_MS = 3_000;

/**
 * Returned when a submission is silently dropped.
 *
 * Bots get a 200 and a plausible-looking body. Telling a spammer that
 * their honeypot tripped just teaches them to fix it; a success
 * response ends the attempt.
 */
const SILENT_DROP: LeadResponse = { outcome: "review" };

export async function POST(request: Request): Promise<NextResponse> {
  // Rate limiting first — it is the cheapest check and the one that
  // protects everything after it, including JSON parsing.
  const ip = clientIpFrom(request.headers);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  const parsed = leadSubmissionSchema.safeParse(raw);
  if (!parsed.success) {
    // Field-level errors so a client can map them back to inputs.
    // Deliberately never echoes the submitted values.
    return NextResponse.json(
      { error: "Validation failed.", fieldErrors: toFieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  const { _hp, _startedAt, ...lead } = parsed.data;

  // Honeypot: a hidden field no human can see or tab to. Non-empty
  // means a bot filled every input it found.
  if (_hp && _hp.trim().length > 0) {
    return NextResponse.json(SILENT_DROP, { status: 200 });
  }

  /**
   * Minimum time on form.
   *
   * Nobody types a name, an email, a company, and eight answers in
   * three seconds. Scoped to complete submissions only — an abandonment
   * beacon legitimately fires seconds after landing, and dropping those
   * would discard exactly the partial leads this build exists to catch.
   */
  if (!lead.meta.isPartial && typeof _startedAt === "number") {
    const elapsed = Date.now() - _startedAt;
    if (elapsed >= 0 && elapsed < MIN_DURATION_MS) {
      return NextResponse.json(SILENT_DROP, { status: 200 });
    }
  }

  const submission = lead as LeadSubmission;

  /**
   * Score complete founder submissions only.
   *
   * Partials are left unscored on purpose. Scoring half an answer set
   * would stamp a tier derived from questions the visitor has not
   * reached yet — a founder who abandons before the focus-area
   * question would be recorded as Tier C, which reads as "we evaluated
   * and declined them" when the truth is "they never finished". A null
   * tier says exactly that, and the upsert fills it in if they return.
   *
   * Non-founder personas are never scored; they are routed by persona.
   */
  let scoring: LeadScoring | null = null;
  if (submission.persona === "founder" && !submission.meta.isPartial) {
    // Resolved per submission so a threshold change in PostHog takes
    // effect without a deploy. Falls back to the checked-in config on
    // any failure, so a flag outage cannot open the gate.
    const config = await getScoringConfig();
    scoring = scoreLead(submission.answers, config);
  }

  const report = await deliverLead(submission, scoring);

  /**
   * A failed database write does NOT fail the request.
   *
   * It is logged loudly inside deliverLead. Showing the visitor an
   * error would not recover the row — it would just add a lost person
   * to a lost record. `report.persisted` is read here only to keep the
   * dependency explicit for whoever changes this next.
   */
  void report.persisted;

  return NextResponse.json(await buildResponse(submission, scoring), {
    status: 200,
  });
}

/**
 * The entire public surface of the scoring system.
 *
 * Everything the server knows — tier, failed gates, rules version —
 * stops here. Widening this function is how the "never tell the user
 * why" guarantee gets broken, so treat any addition as a decision.
 */
async function buildResponse(
  lead: LeadSubmission,
  scoring: LeadScoring | null,
): Promise<LeadResponse> {
  if (lead.persona !== "founder" || !scoring) {
    return { outcome: "review" };
  }

  if (scoring.outcome === "book") {
    const link = await getBookingLink();
    return {
      outcome: "book",
      ...(link ? { calendarUrl: link } : {}),
    };
  }

  return { outcome: scoring.outcome };
}
