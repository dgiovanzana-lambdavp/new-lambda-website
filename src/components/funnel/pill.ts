/**
 * Shared option-pill styling.
 *
 * One definition, used by both the single- and multi-select question
 * components, so the two can never drift apart visually. Every value
 * here resolves through the lambda-* tokens in src/styles/theme.css —
 * the merge swap point — rather than a stock Tailwind palette class.
 *
 * `min-h-[44px]`: the spec's minimum tap target. It is a floor, not a
 * suggestion — below it, thumb taps on mobile start missing.
 */
export const PILL_BASE =
  "flex min-h-[44px] w-full items-center rounded-pill border px-5 py-3 text-left " +
  "text-base transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lambda-accent";

export const PILL_UNSELECTED =
  "border-lambda-border bg-transparent text-lambda-body " +
  "hover:border-lambda-border-strong hover:bg-lambda-raised";

export const PILL_SELECTED =
  "border-lambda-accent bg-lambda-accent text-lambda-accent-ink font-medium";

export function pillClass(selected: boolean): string {
  return `${PILL_BASE} ${selected ? PILL_SELECTED : PILL_UNSELECTED}`;
}

/**
 * Options wrap onto new lines; they never scroll horizontally. A
 * horizontally scrolling option list hides choices off-screen with no
 * affordance, which on a qualification form means people answer from
 * the visible subset.
 */
export const PILL_LIST = "flex flex-col gap-3";
