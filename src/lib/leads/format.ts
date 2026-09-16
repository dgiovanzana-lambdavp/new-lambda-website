import "server-only";

import { getQuestions } from "@/config/questions";
import type { LeadSubmission } from "@/lib/leads/types";

/**
 * Turn a stored answer set back into human-readable lines.
 *
 * Answers are persisted as machine values (`3m_10m`, `govtech`) because
 * display copy has to be free to change without breaking scoring. That
 * trade has a cost at the other end: an alert email full of
 * `ebitda_positive` is not scannable in an inbox. This resolves values
 * back through the same question tree that rendered them, so the label
 * shown in the email is by construction the label the founder clicked.
 */

export interface FormattedAnswer {
  question: string;
  answer: string;
}

export function formatAnswers(lead: LeadSubmission): FormattedAnswer[] {
  const questions = getQuestions(lead.persona);
  const formatted: FormattedAnswer[] = [];

  // Iterate the tree, not the answer object, so the email presents
  // questions in the order they were asked rather than in whatever
  // order the keys happen to sit in the JSON.
  for (const question of questions) {
    if (question.type === "contact") continue;

    const raw = lead.answers[question.id];
    if (raw === undefined) continue;

    let answer: string;

    if (question.type === "choice" || question.type === "multichoice") {
      const toLabel = (value: string) =>
        question.options.find((o) => o.value === value)?.label ?? value;
      answer = Array.isArray(raw)
        ? raw.map(toLabel).join(", ")
        : toLabel(String(raw));
    } else {
      answer = Array.isArray(raw) ? raw.join(", ") : String(raw);
    }

    if (answer.trim()) {
      formatted.push({ question: question.title, answer });
    }
  }

  return formatted;
}

/** A short label for one answer, used to build the subject line. */
export function labelFor(
  lead: LeadSubmission,
  questionId: string,
): string | undefined {
  const question = getQuestions(lead.persona).find((q) => q.id === questionId);
  if (!question || question.type === "contact" || question.type === "text") {
    return undefined;
  }

  const raw = lead.answers[questionId];
  if (typeof raw !== "string" || !raw) return undefined;

  return question.options.find((o) => o.value === raw)?.label ?? raw;
}

export function fullName(lead: LeadSubmission): string {
  return [lead.contact.firstName, lead.contact.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();
}
