"use client";

import { useEffect, useId, useRef } from "react";
import { ProgressBar } from "./ProgressBar";

type ForwardMode = "hidden" | "next" | "send";

interface StepShellProps {
  /** Changing this id is what marks a step transition. */
  questionId: string;
  title: string;
  subtitle?: string;
  current: number;
  total: number;
  canGoBack: boolean;
  onBack: () => void;
  forwardMode: ForwardMode;
  forwardDisabled?: boolean;
  onForward: () => void;
  /** Validation message for the step as a whole. */
  error?: string;
  children: React.ReactNode;
}

const NAV_BUTTON =
  "flex h-11 w-11 items-center justify-center rounded-full border border-lambda-border " +
  "text-lambda-body transition-colors " +
  "hover:border-lambda-border-strong hover:bg-lambda-raised " +
  "disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent " +
  "disabled:hover:border-lambda-border";

export function StepShell({
  questionId,
  title,
  subtitle,
  current,
  total,
  canGoBack,
  onBack,
  forwardMode,
  forwardDisabled,
  onForward,
  error,
  children,
}: StepShellProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingId = useId();
  const errorId = useId();

  /**
   * Move focus to the heading whenever the step changes.
   *
   * Without this, a keyboard or screen-reader user who answers question
   * 3 has their focus land wherever the DOM happens to put it — often
   * the document body — and gets no signal that the screen changed at
   * all. Focusing the heading both announces the new question and puts
   * Tab in the right place to reach the options.
   *
   * `preventScroll` stops the viewport from jumping on desktop, where
   * the heading is already visible.
   */
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [questionId]);

  return (
    <div className="flex min-h-full flex-col justify-between">
      <div>
        <ProgressBar current={current} total={total} />

        {/*
          Position is announced separately from the heading. The heading
          is announced by the focus move above; repeating it in a live
          region would read the question twice. "Question 3 of 9" is the
          part focus alone doesn't convey.
        */}
        <div aria-live="polite" className="sr-only">
          Question {current} of {total}
        </div>

        <h1
          ref={headingRef}
          id={headingId}
          tabIndex={-1}
          className="text-3xl leading-tight font-semibold tracking-tight text-lambda-fg outline-none sm:text-4xl"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-base text-lambda-muted">{subtitle}</p>
        )}

        <div className="mt-8">{children}</div>

        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-4 text-sm text-lambda-error"
          >
            {error}
          </p>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className={NAV_BUTTON}
          aria-label="Previous question"
        >
          <ArrowLeftIcon />
        </button>

        {forwardMode === "hidden" ? (
          // Keeps the back button pinned left when there is no forward
          // control — single-selects advance on click and need none.
          <span aria-hidden="true" className="h-11 w-11" />
        ) : (
          <button
            type="button"
            onClick={onForward}
            disabled={forwardDisabled}
            className={NAV_BUTTON}
            aria-label={forwardMode === "send" ? "Submit" : "Next question"}
          >
            {forwardMode === "send" ? <SendIcon /> : <ArrowRightIcon />}
          </button>
        )}
      </div>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}
