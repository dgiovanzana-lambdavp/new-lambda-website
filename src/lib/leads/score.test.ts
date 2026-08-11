import { describe, expect, it } from "vitest";
import {
  FOCUS_AREAS,
  PROFITABILITY_BANDS,
  REVENUE_BANDS,
} from "@/config/answer-values";
import { SCORING_CONFIG, type ScoringConfig } from "@/config/scoring";
import type { Answers } from "@/lib/leads/types";
import { scoreLead } from "./score";

/**
 * The fixture table.
 *
 * These tests are the reason `scoreLead` is pure. Every case here is a
 * plain input/output assertion with no database, no network, and no
 * environment — which is what makes it possible to enumerate every gate
 * combination rather than spot-check a few.
 *
 * They also serve as executable documentation of Lambda's criteria. If
 * someone widens a threshold, the diff in this file says exactly which
 * companies started qualifying.
 */

/** Representative values, one passing and one failing per gate. */
const PASS_FOCUS = "govtech";
const FAIL_FOCUS = "none";
const PASS_REVENUE = "3m_10m";
const FAIL_REVENUE = "under_1m";
const PASS_PROFIT = "ebitda_positive";
const FAIL_PROFIT = "breakeven";

function answers(
  focus: string,
  revenue: string,
  profitability: string,
): Answers {
  return { focus_area: focus, revenue, financials: profitability };
}

describe("scoreLead — every gate combination", () => {
  /**
   * All eight combinations of the three gates.
   *
   * Note the asymmetry the table encodes: the four rows where focus
   * fails are ALL decline, regardless of how good the financials are. A
   * profitable $10M company in the wrong sector is not a near miss.
   */
  const table: {
    focus: boolean;
    revenue: boolean;
    profit: boolean;
    outcome: string;
    tier: string;
    failed: string[];
  }[] = [
    // focus  revenue  profit   → outcome    tier  failedGates
    { focus: true,  revenue: true,  profit: true,  outcome: "book",    tier: "A", failed: [] },
    { focus: true,  revenue: true,  profit: false, outcome: "review",  tier: "B", failed: ["profitability"] },
    { focus: true,  revenue: false, profit: true,  outcome: "review",  tier: "B", failed: ["revenue"] },
    { focus: true,  revenue: false, profit: false, outcome: "review",  tier: "B", failed: ["revenue", "profitability"] },
    { focus: false, revenue: true,  profit: true,  outcome: "decline", tier: "C", failed: ["focusArea"] },
    { focus: false, revenue: true,  profit: false, outcome: "decline", tier: "C", failed: ["focusArea", "profitability"] },
    { focus: false, revenue: false, profit: true,  outcome: "decline", tier: "C", failed: ["focusArea", "revenue"] },
    { focus: false, revenue: false, profit: false, outcome: "decline", tier: "C", failed: ["focusArea", "revenue", "profitability"] },
  ];

  for (const row of table) {
    const label = `focus=${row.focus ? "pass" : "fail"} revenue=${
      row.revenue ? "pass" : "fail"
    } profit=${row.profit ? "pass" : "fail"} → ${row.outcome} (Tier ${row.tier})`;

    it(label, () => {
      const result = scoreLead(
        answers(
          row.focus ? PASS_FOCUS : FAIL_FOCUS,
          row.revenue ? PASS_REVENUE : FAIL_REVENUE,
          row.profit ? PASS_PROFIT : FAIL_PROFIT,
        ),
        SCORING_CONFIG,
      );

      expect(result.outcome).toBe(row.outcome);
      expect(result.tier).toBe(row.tier);
      expect(result.failedGates.sort()).toEqual([...row.failed].sort());
    });
  }
});

describe("revenue gate is a floor, evaluated ordinally", () => {
  // Every band in the vocabulary, so adding one without revisiting the
  // rules shows up here rather than in production.
  const expectations: Record<string, boolean> = {
    pre_revenue: false,
    under_1m: false,
    "1m_3m": true, // the floor itself passes — inclusive
    "3m_10m": true,
    "10m_25m": true,
    over_25m: true,
  };

  it("covers every band in REVENUE_BANDS", () => {
    expect(Object.keys(expectations).sort()).toEqual([...REVENUE_BANDS].sort());
  });

  for (const band of REVENUE_BANDS) {
    it(`${band} ${expectations[band] ? "clears" : "fails"} the $1M floor`, () => {
      const result = scoreLead(
        answers(PASS_FOCUS, band, PASS_PROFIT),
        SCORING_CONFIG,
      );
      expect(result.outcome).toBe(expectations[band] ? "book" : "review");
    });
  }

  it("rejects a band that isn't in the vocabulary", () => {
    // A value outside REVENUE_BANDS means the question changed without
    // the rules being revisited. Failing closed is the safe direction.
    const result = scoreLead(
      answers(PASS_FOCUS, "fifty_billion", PASS_PROFIT),
      SCORING_CONFIG,
    );
    expect(result.outcome).toBe("review");
    expect(result.failedGates).toContain("revenue");
  });
});

describe("profitability gate", () => {
  const passing = ["net_income_positive", "ebitda_positive"];

  for (const band of PROFITABILITY_BANDS) {
    const shouldPass = passing.includes(band);
    it(`${band} ${shouldPass ? "clears" : "fails"} the profitability gate`, () => {
      const result = scoreLead(
        answers(PASS_FOCUS, PASS_REVENUE, band),
        SCORING_CONFIG,
      );
      expect(result.outcome).toBe(shouldPass ? "book" : "review");
    });
  }
});

describe("focus area gate", () => {
  for (const area of FOCUS_AREAS) {
    const shouldPass = area !== "none";
    it(`${area} → ${shouldPass ? "in scope" : "declined"}`, () => {
      const result = scoreLead(
        answers(area, PASS_REVENUE, PASS_PROFIT),
        SCORING_CONFIG,
      );
      expect(result.outcome).toBe(shouldPass ? "book" : "decline");
    });
  }
});

describe("missing and malformed answers", () => {
  it("treats a missing focus area as a decline, not a pass", () => {
    const result = scoreLead(
      { revenue: PASS_REVENUE, financials: PASS_PROFIT },
      SCORING_CONFIG,
    );
    expect(result.outcome).toBe("decline");
    expect(result.failedGates).toContain("focusArea");
  });

  it("scores an empty answer set as decline with all gates failed", () => {
    const result = scoreLead({}, SCORING_CONFIG);
    expect(result.outcome).toBe("decline");
    expect(result.failedGates.sort()).toEqual(
      ["focusArea", "profitability", "revenue"].sort(),
    );
  });

  it("does not accept an array where a single value belongs", () => {
    // Multi-select answers are string[]. A gate question is never
    // multi-select, so an array here means something upstream is wrong
    // and must not be read as a pass.
    const result = scoreLead(
      { focus_area: ["govtech"], revenue: PASS_REVENUE, financials: PASS_PROFIT },
      SCORING_CONFIG,
    );
    expect(result.outcome).toBe("decline");
  });

  it("treats an empty string as unanswered", () => {
    const result = scoreLead(
      { focus_area: "", revenue: PASS_REVENUE, financials: PASS_PROFIT },
      SCORING_CONFIG,
    );
    expect(result.outcome).toBe("decline");
  });
});

describe("purity", () => {
  it("does not mutate the answers it is given", () => {
    const input = answers(PASS_FOCUS, PASS_REVENUE, PASS_PROFIT);
    const snapshot = structuredClone(input);
    scoreLead(input, SCORING_CONFIG);
    expect(input).toEqual(snapshot);
  });

  it("does not mutate the config it is given", () => {
    const snapshot = structuredClone(SCORING_CONFIG);
    scoreLead(answers(PASS_FOCUS, PASS_REVENUE, PASS_PROFIT), SCORING_CONFIG);
    expect(SCORING_CONFIG).toEqual(snapshot);
  });

  it("returns the same result for the same input", () => {
    const input = answers(PASS_FOCUS, FAIL_REVENUE, PASS_PROFIT);
    const a = scoreLead(input, SCORING_CONFIG);
    const b = scoreLead(input, SCORING_CONFIG);
    expect(a).toEqual(b);
  });
});

describe("config injection", () => {
  /**
   * The point of taking config as an argument: the SAME answers produce
   * a different tier under different rules. This is what a PostHog flag
   * payload will do at runtime, and it is why the version has to be
   * stored on every lead.
   */
  const loosened: ScoringConfig = {
    version: "test-loosened.1",
    gates: {
      focusArea: [...SCORING_CONFIG.gates.focusArea],
      minRevenueBand: "under_1m",
      profitability: [...SCORING_CONFIG.gates.profitability, "breakeven"],
    },
  };

  it("a lead that is Tier B under shipped rules is Tier A under loosened ones", () => {
    const borderline = answers(PASS_FOCUS, "under_1m", "breakeven");

    expect(scoreLead(borderline, SCORING_CONFIG).tier).toBe("B");
    expect(scoreLead(borderline, loosened).tier).toBe("A");
  });

  it("stamps the version of the config that was actually used", () => {
    const input = answers(PASS_FOCUS, PASS_REVENUE, PASS_PROFIT);

    expect(scoreLead(input, SCORING_CONFIG).scoreVersion).toBe(
      SCORING_CONFIG.version,
    );
    expect(scoreLead(input, loosened).scoreVersion).toBe("test-loosened.1");
  });

  it("cannot be widened past the focus gate by loosening financials", () => {
    // Out of scope stays out of scope no matter how the money gates
    // move. Worth pinning: it is the invariant most likely to be
    // broken by a well-meaning threshold tweak.
    const result = scoreLead(answers(FAIL_FOCUS, PASS_REVENUE, PASS_PROFIT), loosened);
    expect(result.outcome).toBe("decline");
  });
});

describe("shipped defaults", () => {
  it("matches the criteria the brief describes", () => {
    // Focus areas, $1M+ revenue, already profitable.
    expect(SCORING_CONFIG.gates.minRevenueBand).toBe("1m_3m");
    expect(SCORING_CONFIG.gates.profitability).toEqual([
      "net_income_positive",
      "ebitda_positive",
    ]);
    expect(SCORING_CONFIG.gates.focusArea).not.toContain("none");
  });

  it("every configured focus area exists in the question vocabulary", () => {
    // Catches a gate that can never fire because its value was renamed
    // in the question tree — a silent failure with no error anywhere.
    for (const area of SCORING_CONFIG.gates.focusArea) {
      expect(FOCUS_AREAS).toContain(area as (typeof FOCUS_AREAS)[number]);
    }
  });

  it("every configured profitability band exists in the vocabulary", () => {
    for (const band of SCORING_CONFIG.gates.profitability) {
      expect(PROFITABILITY_BANDS).toContain(
        band as (typeof PROFITABILITY_BANDS)[number],
      );
    }
  });
});
