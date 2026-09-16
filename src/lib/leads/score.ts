import { GATE_QUESTION_IDS, REVENUE_BANDS } from "@/config/answer-values";
import type { ScoringConfig } from "@/config/scoring";
import type { Answers, Outcome } from "@/lib/leads/types";

/**
 * Qualification scoring.
 *
 * ── Pure, with config injected ──────────────────────────────────────
 *
 * `scoreLead` performs no I/O and reads nothing from module scope. The
 * rules arrive as an argument. That is not ceremony — it is what makes
 * three separate things possible at once:
 *
 *   • tests drive it with fixture configs, not the production one
 *   • production drives it with the checked-in SCORING_CONFIG
 *   • a PostHog flag payload can override the thresholds at runtime
 *
 * A function that reached into module scope for its rules could only
 * ever be exercised one way, and every later change would be a guess.
 *
 * Note there is no `import "server-only"` here. This file holds the
 * SHAPE of the decision, not the thresholds — those live in
 * scoring.ts, which is server-only. Keeping the guard on the data
 * rather than the logic is what lets the test suite import this
 * directly.
 *
 * ── Founder lane only ───────────────────────────────────────────────
 *
 * Only founder submissions are scored. LP, services, and general leads
 * are routed by persona in the API route and never reach this function.
 */

export interface ScoreResult {
  outcome: Outcome;
  tier: "A" | "B" | "C";
  /** Internal only. Never returned to the client. */
  failedGates: string[];
  scoreVersion: string;
}

/** Gate names as they appear in failedGates and in alert subject lines. */
export const GATES = {
  focusArea: "focusArea",
  revenue: "revenue",
  profitability: "profitability",
} as const;

function asString(value: Answers[string] | undefined): string | undefined {
  return typeof value === "string" && value ? value : undefined;
}

/**
 * Revenue is a FLOOR, compared by position in the ordered band list
 * rather than by membership in a list of passing values.
 *
 * Listing the passing bands explicitly would mean that adding a new
 * band above the floor (say "$25M – $50M") silently fails to qualify
 * anyone in it until somebody remembers to add it to the config. An
 * ordinal comparison keeps working.
 *
 * An unrecognised band fails. A value not in the vocabulary means the
 * question changed without the rules being revisited, and quietly
 * passing an unknown is how a gate stops being a gate.
 */
function meetsRevenueFloor(band: string | undefined, floor: string): boolean {
  if (!band) return false;
  const bandIndex = REVENUE_BANDS.indexOf(band as (typeof REVENUE_BANDS)[number]);
  const floorIndex = REVENUE_BANDS.indexOf(
    floor as (typeof REVENUE_BANDS)[number],
  );
  if (bandIndex === -1 || floorIndex === -1) return false;
  return bandIndex >= floorIndex;
}

export function scoreLead(
  answers: Answers,
  config: ScoringConfig,
): ScoreResult {
  const focusArea = asString(answers[GATE_QUESTION_IDS.focusArea]);
  const revenue = asString(answers[GATE_QUESTION_IDS.revenue]);
  const profitability = asString(answers[GATE_QUESTION_IDS.profitability]);

  const failedGates: string[] = [];

  // A missing answer fails its gate. Partial submissions reach this
  // function too, and an unanswered question is not a pass.
  const focusPasses =
    focusArea !== undefined && config.gates.focusArea.includes(focusArea);
  if (!focusPasses) failedGates.push(GATES.focusArea);

  const revenuePasses = meetsRevenueFloor(revenue, config.gates.minRevenueBand);
  if (!revenuePasses) failedGates.push(GATES.revenue);

  const profitabilityPasses =
    profitability !== undefined &&
    config.gates.profitability.includes(profitability);
  if (!profitabilityPasses) failedGates.push(GATES.profitability);

  /**
   * Focus area is decisive, and deliberately not symmetric with the
   * financial gates.
   *
   * A profitable $10M company outside Lambda's areas is not a near
   * miss — it is the wrong company, and no amount of revenue changes
   * that. Whereas a company in the right area that is merely
   * pre-profit is exactly the lead a human should look at. So focus
   * failing means decline outright, while a financial gate failing
   * means review.
   */
  if (!focusPasses) {
    return {
      outcome: "decline",
      tier: "C",
      failedGates,
      scoreVersion: config.version,
    };
  }

  if (revenuePasses && profitabilityPasses) {
    return {
      outcome: "book",
      tier: "A",
      failedGates,
      scoreVersion: config.version,
    };
  }

  return {
    outcome: "review",
    tier: "B",
    failedGates,
    scoreVersion: config.version,
  };
}
