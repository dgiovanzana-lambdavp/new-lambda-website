"use client";

import type { MultiChoiceQuestion as MultiChoiceQuestionType } from "@/config/questions/types";
import { PILL_LIST, pillClass } from "../pill";

interface MultiChoiceQuestionProps {
  question: MultiChoiceQuestionType;
  value?: string[];
  onChange: (value: string[]) => void;
  labelledBy?: string;
}

/**
 * Multi-select pills. Unlike single-select, these do NOT auto-advance —
 * the user needs to pick several, so advancing on the first click would
 * make choosing two options impossible. The forward arrow is the
 * explicit commit.
 *
 * Semantics differ from ChoiceQuestion accordingly: a `group` of
 * checkboxes rather than a `radiogroup` of radios, so assistive tech
 * describes it as "select all that apply" and not "one of nine". Tab
 * moves between checkboxes here, which is the expected checkbox
 * behaviour — no roving tabindex.
 */
export function MultiChoiceQuestion({
  question,
  value = [],
  onChange,
  labelledBy,
}: MultiChoiceQuestionProps) {
  function toggle(optionValue: string) {
    const next = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(next);
  }

  return (
    <div role="group" aria-labelledby={labelledBy} className={PILL_LIST}>
      {question.options.map((option) => {
        const isSelected = value.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            role="checkbox"
            aria-checked={isSelected}
            className={pillClass(isSelected)}
            onClick={() => toggle(option.value)}
          >
            <span className="flex-1">{option.label}</span>
            {isSelected && <CheckIcon />}
          </button>
        );
      })}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="ml-3 shrink-0"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
