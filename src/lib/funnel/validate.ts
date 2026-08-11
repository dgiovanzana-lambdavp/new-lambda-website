import type { ContactFieldName, Question } from "@/config/questions/types";
import type { Answers } from "@/lib/leads/types";

/**
 * Client-side step validation.
 *
 * This exists for feedback, not for safety. Every rule here is enforced
 * again by Zod in /api/leads, because anything running in the browser
 * can be skipped by anyone who wants to skip it. The job of this file
 * is to tell an honest user they missed a field before they lose the
 * screen — nothing more.
 */

/**
 * Deliberately permissive. Strict email regexes reject valid addresses
 * (new TLDs, plus-addressing, apostrophes) and the only real check is
 * whether mail arrives. This catches "no @ at all" and typos like a
 * trailing comma, and leaves the rest to the mail server.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface StepValidation {
  ok: boolean;
  /** Per-field messages, for the contact step. */
  fieldErrors: Partial<Record<ContactFieldName, string>>;
  /** A single message for the step as a whole. */
  stepError?: string;
}

const VALID: StepValidation = { ok: true, fieldErrors: {} };

export function validateStep(
  question: Question,
  answers: Answers,
  contact: Partial<Record<ContactFieldName, string>>,
): StepValidation {
  switch (question.type) {
    case "contact": {
      const fieldErrors: Partial<Record<ContactFieldName, string>> = {};

      for (const field of question.fields) {
        const value = (contact[field.name] ?? "").trim();

        if (field.required && !value) {
          fieldErrors[field.name] = `${field.label} is required.`;
          continue;
        }
        if (field.name === "email" && value && !EMAIL_PATTERN.test(value)) {
          fieldErrors[field.name] = "That doesn't look like a valid email.";
        }
      }

      const ok = Object.keys(fieldErrors).length === 0;
      return {
        ok,
        fieldErrors,
        stepError: ok ? undefined : "Please fix the fields above.",
      };
    }

    case "choice": {
      if (!question.required) return VALID;
      const value = answers[question.id];
      return typeof value === "string" && value
        ? VALID
        : { ok: false, fieldErrors: {}, stepError: "Please choose an option." };
    }

    case "multichoice": {
      if (!question.required) return VALID;
      const value = answers[question.id];
      return Array.isArray(value) && value.length > 0
        ? VALID
        : {
            ok: false,
            fieldErrors: {},
            stepError: "Please choose at least one option.",
          };
    }

    case "text": {
      if (!question.required) return VALID;
      const value = answers[question.id];
      return typeof value === "string" && value.trim()
        ? VALID
        : {
            ok: false,
            fieldErrors: {},
            stepError: "Please add a little detail before continuing.",
          };
    }

    default:
      return VALID;
  }
}
