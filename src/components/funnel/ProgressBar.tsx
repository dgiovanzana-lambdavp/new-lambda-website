interface ProgressBarProps {
  /** 1-based position on the CURRENT branch. */
  current: number;
  /** Length of the current branch, not of the whole question bank. */
  total: number;
}

/**
 * "Question N of M" plus a bar.
 *
 * M comes from the resolved branch path, so a founder who selects
 * "None of these" sees "of 4" while a qualifying founder sees "of 9".
 * Showing the total question-bank size instead would tell someone on a
 * four-question path that they have nine to go, which is both wrong and
 * a reason to quit.
 */
export function ProgressBar({ current, total }: ProgressBarProps) {
  const safeTotal = Math.max(total, 1);
  const percent = Math.min(100, Math.round((current / safeTotal) * 100));

  return (
    <div className="mb-8">
      <div
        className="h-1 w-full overflow-hidden rounded-pill bg-lambda-border/50"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={safeTotal}
        aria-label={`Question ${current} of ${safeTotal}`}
      >
        <div
          className="h-full rounded-pill bg-lambda-accent transition-[width] ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-3 text-sm text-lambda-muted tabular-nums">
        Question {current} of {safeTotal}
      </p>
    </div>
  );
}
