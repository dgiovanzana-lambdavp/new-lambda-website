/**
 * Shared answer vocabulary: the machine values an answer can take, and
 * the order of any band that is ordinal.
 *
 * ── Why this file is separate from both the questions and the rules ──
 *
 * The question trees need these values to render options. The scoring
 * rules need them to express gates. If either side owned them, the
 * other would have to import it:
 *
 *   questions → scoring   would drag the server-only rules into the
 *                         client bundle (a build error, by design)
 *   scoring → questions   would make the thresholds depend on display
 *                         copy, so renaming a label breaks scoring
 *
 * So the vocabulary lives here, on its own, and both sides depend on
 * it. It is safe for the browser because it contains no thresholds:
 * knowing that `1m_3m` is a revenue band tells you nothing about which
 * bands pass.
 *
 * ── Why values are not the display labels ──
 *
 * Options carry a stable machine `value` and a separate human `label`.
 * If the gate matched on display copy, editing "GovTech" to "Government
 * technology" would silently stop qualifying govtech companies, with no
 * error and no test failure. Decoupling them means copy is free to
 * change and the rules keep working.
 */

/**
 * Revenue bands in ascending order. The ORDER is load-bearing: the
 * revenue gate is a floor ("at least $1M"), evaluated by comparing
 * positions in this array, not by listing every passing band. Insert a
 * new band in the wrong position and the floor silently moves.
 */
export const REVENUE_BANDS = [
  "pre_revenue",
  "under_1m",
  "1m_3m",
  "3m_10m",
  "10m_25m",
  "over_25m",
] as const;

export type RevenueBand = (typeof REVENUE_BANDS)[number];

export const REVENUE_LABELS: Record<RevenueBand, string> = {
  pre_revenue: "Pre-revenue",
  under_1m: "Under $1M",
  "1m_3m": "$1M – $3M",
  "3m_10m": "$3M – $10M",
  "10m_25m": "$10M – $25M",
  over_25m: "Over $25M",
};

/** Focus areas. `none` is the explicit out-of-focus escape hatch. */
export const FOCUS_AREAS = [
  "vertical_saas_fintech",
  "govtech",
  "compliance_tech",
  "other_mission_critical",
  "none",
] as const;

export type FocusArea = (typeof FOCUS_AREAS)[number];

export const FOCUS_AREA_LABELS: Record<FocusArea, string> = {
  vertical_saas_fintech: "Vertical SaaS / technology for financial services",
  govtech: "GovTech",
  compliance_tech: "Compliance technology",
  other_mission_critical: "Other niche mission-critical technology",
  none: "None of these",
};

/**
 * Financial position, asked as a band and never as a yes/no.
 * "Are you profitable?" gets a yes from nearly everyone; a band forces
 * a real answer and gives you something to score.
 */
export const PROFITABILITY_BANDS = [
  "net_income_positive",
  "ebitda_positive",
  "breakeven",
  "burning_funded",
  "burning_need",
] as const;

export type ProfitabilityBand = (typeof PROFITABILITY_BANDS)[number];

export const PROFITABILITY_LABELS: Record<ProfitabilityBand, string> = {
  net_income_positive: "Profitable on a net income basis",
  ebitda_positive: "EBITDA positive, not yet net income positive",
  breakeven: "Around breakeven",
  burning_funded: "Burning cash, comfortably funded",
  burning_need: "Burning cash, need capital soon",
};

/** Question ids that scoring depends on. Named so a rename is caught. */
export const GATE_QUESTION_IDS = {
  focusArea: "focus_area",
  revenue: "revenue",
  profitability: "financials",
} as const;
