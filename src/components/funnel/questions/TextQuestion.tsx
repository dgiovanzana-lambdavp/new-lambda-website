"use client";

import { useId } from "react";
import type { TextQuestion as TextQuestionType } from "@/config/questions/types";

interface TextQuestionProps {
  question: TextQuestionType;
  value?: string;
  onChange: (value: string) => void;
  /** Cmd/Ctrl+Enter advances, matching the send affordance. */
  onSubmitStep: () => void;
}

/**
 * Free-text step. Needs an explicit forward control — there is no
 * "done typing" event, and advancing on blur would fire when someone
 * tabs away to re-read the question.
 */
export function TextQuestion({
  question,
  value = "",
  onChange,
  onSubmitStep,
}: TextQuestionProps) {
  const id = useId();

  return (
    <div>
      {/* The visible heading lives in StepShell, so the label here is
          for assistive tech only — the textarea still needs its own
          accessible name. */}
      <label htmlFor={id} className="sr-only">
        {question.title}
      </label>
      <textarea
        id={id}
        rows={6}
        value={value}
        placeholder={question.placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            onSubmitStep();
          }
        }}
        className="w-full resize-y rounded-lg border border-lambda-border bg-transparent px-4 py-3 text-base text-lambda-body placeholder:text-lambda-muted/60 transition-colors hover:border-lambda-border-strong focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lambda-accent"
      />
      {!question.required && (
        <p className="mt-2 text-sm text-lambda-muted">Optional.</p>
      )}
    </div>
  );
}
