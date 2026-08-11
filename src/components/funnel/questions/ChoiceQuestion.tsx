"use client";

import { useRef, useState } from "react";
import type { ChoiceQuestion as ChoiceQuestionType } from "@/config/questions/types";
import { PILL_LIST, pillClass } from "../pill";

interface ChoiceQuestionProps {
  question: ChoiceQuestionType;
  value?: string;
  /** Selecting also advances — the parent owns the transition. */
  onSelect: (value: string) => void;
  labelledBy?: string;
}

export function ChoiceQuestion({
  question,
  value,
  onSelect,
  labelledBy,
}: ChoiceQuestionProps) {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  /**
   * Roving tabindex: exactly one option is in the tab order at a time,
   * so Tab moves past the whole group rather than through nine pills.
   * Arrow keys move within it.
   */
  const selectedIndex = question.options.findIndex((o) => o.value === value);
  const [focusIndex, setFocusIndex] = useState(
    selectedIndex >= 0 ? selectedIndex : 0,
  );

  function moveFocus(nextIndex: number) {
    const count = question.options.length;
    const wrapped = (nextIndex + count) % count;
    setFocusIndex(wrapped);
    buttonsRef.current[wrapped]?.focus();
  }

  /**
   * ── Why arrow keys move focus WITHOUT selecting ──────────────────
   *
   * The standard ARIA radiogroup pattern selects as you arrow. That is
   * correct when selection is inert, and wrong here: selecting
   * auto-advances to the next question, so the first arrow press would
   * fire the user off the screen before they had seen option two.
   * Keyboard users would be unable to browse the list at all.
   *
   * ARIA explicitly permits this variant — focus moves, and the user
   * commits with Enter or Space — for groups where selection has side
   * effects. Because these are real <button> elements, Enter and Space
   * already fire onClick, so committing needs no extra handling.
   */
  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        moveFocus(index + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        moveFocus(index - 1);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(0);
        break;
      case "End":
        event.preventDefault();
        moveFocus(question.options.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div role="radiogroup" aria-labelledby={labelledBy} className={PILL_LIST}>
      {question.options.map((option, index) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              buttonsRef.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={index === focusIndex ? 0 : -1}
            className={pillClass(isSelected)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => setFocusIndex(index)}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
