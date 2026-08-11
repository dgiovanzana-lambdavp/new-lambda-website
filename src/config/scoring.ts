/**
 * ═══════════════════════════════════════════════════════════════════
 * SERVER ONLY. Lambda's investment criteria live here.
 * ═══════════════════════════════════════════════════════════════════
 *
 * The import below is load-bearing. `server-only` resolves to a module
 * that throws at build time if anything in the client component tree
 * imports this file, directly or transitively. That turns "somebody
 * accidentally imported the thresholds into a component" from a silent
 * security hole into a failed build.
 *
 * Why it matters: these values ARE the gate. In the browser they are
 * readable by anyone who opens devtools, and a founder who reads them
 * can answer their way onto a partner's calendar. The server sends back
 * "show the calendar" or "don't" — never the reasoning.
 *
 * Belt and braces: `npm run check:bundle-leak` greps the built client
 * output for the sentinel below, catching the case where the
 * server-only guard was removed.
 */
import "server-only";

import type { RevenueBand } from "@/config/answer-values";

/**
 * A string that exists nowhere else in the codebase.
 *
 * The bundle-leak checker greps client JS for it. We cannot grep for
 * the threshold values themselves — `1m_3m` and `net_income_positive`
 * are legitimately in the client bundle as question option values, so
 * that check would cry wolf on every build. This string has no reason
 * to exist except in this module, which makes it a reliable tripwire.
 */
export const LAMBDA_SCORING_SENTINEL = "LAMBDA_SCORING_SENTINEL_DO_NOT_SHIP";

export interface ScoringConfig {
  version: string;
  gates: {
    /** Focus areas that pass. Anything else is out of scope. */
    focusArea: readonly string[];
    /** Inclusive floor, compared by position in REVENUE_BANDS. */
    minRevenueBand: RevenueBand;
    /** Financial positions that pass. */
    profitability: readonly string[];
  };
}

/**
 * The checked-in defaults.
 *
 * These are also the fallback when PostHog is unreachable — a flag
 * service outage must never open the gate or take the form down.
 *
 * ── On changing these ──────────────────────────────────────────────
 *
 * Bump `version` on every rules change, and never mutate a rule in
 * place. Every lead is stored with the scoreVersion it was scored
 * under; without that, historical leads become uninterpretable and you
 * lose the ability to ask "did the leads we auto-booked under the old
 * thresholds actually convert better?"
 *
 * ── On widening these ──────────────────────────────────────────────
 *
 * Resist it during the first quarter. Lambda meets 400+ companies a
 * year against a purposefully concentrated portfolio: deal flow is not
 * the constraint, partner calendar time is. Auto-booking optimises for
 * meeting volume, which is the resource already in surplus. Manually
 * promoting a Tier B lead to a call is cheap. Un-booking someone is
 * not.
 */
export const SCORING_CONFIG: ScoringConfig = {
  version: "2026-07-30.1",

  // ALL must pass for Tier A.
  gates: {
    focusArea: [
      "vertical_saas_fintech",
      "govtech",
      "compliance_tech",
      "other_mission_critical",
    ],
    minRevenueBand: "1m_3m", // $1M+ annual revenue
    profitability: ["net_income_positive", "ebitda_positive"],
  },
};
