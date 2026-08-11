import type { Answers } from "@/lib/leads/types";

/**
 * A question tree is DATA, not JSX.
 *
 * This is the single most consequential structural decision in the
 * build, so it's worth stating why rather than leaving it implied.
 *
 * As JSX, a question is a program: you cannot count questions, reorder
 * them, compute how many remain on the current branch, or move them
 * into a CMS without executing or rewriting code. As data, all of those
 * are ordinary operations on an array.
 *
 * Two requirements depend on it directly:
 *
 *   • "Question N of M, where M is recomputed from the current branch."
 *     With data, M is the length of a resolved path. With JSX you would
 *     hardcode M and hand-maintain it, and it would drift the first
 *     time somebody inserted a question.
 *
 *   • The deferred Payload CMS admin. Migrating a typed array into a
 *     CMS collection is mechanical. Migrating JSX is a rewrite.
 *
 * Adding or reordering a question must be an edit to a config file and
 * never an edit to a component.
 */

/** An option's stable machine value, decoupled from its display copy. */
export interface Choice {
  value: string;
  label: string;
}

export type ContactFieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "company"
  | "companyUrl";

export interface ContactField {
  name: ContactFieldName;
  label: string;
  type: "text" | "email" | "tel" | "url";
  required: boolean;
  /** Browser autofill hint. Free conversion — always set it. */
  autoComplete?: string;
  placeholder?: string;
  /** Layout hint for the field grid. */
  width: "full" | "half";
}

interface QuestionBase {
  id: string;
  title: string;
  /** Optional muted sub-copy under the heading. */
  subtitle?: string;
  /**
   * Where to go after this question.
   *
   * Returning `null` ends the branch. Omitting `next` falls through to
   * the next question in array order — so the common case stays quiet
   * and only genuine branch points carry a resolver.
   */
  next?: (answers: Answers) => string | null;
}

export interface ContactQuestion extends QuestionBase {
  type: "contact";
  fields: ContactField[];
}

export interface ChoiceQuestion extends QuestionBase {
  type: "choice";
  required: boolean;
  options: Choice[];
}

export interface MultiChoiceQuestion extends QuestionBase {
  type: "multichoice";
  required: boolean;
  options: Choice[];
}

export interface TextQuestion extends QuestionBase {
  type: "text";
  required: boolean;
  placeholder?: string;
}

export type Question =
  | ContactQuestion
  | ChoiceQuestion
  | MultiChoiceQuestion
  | TextQuestion;

/**
 * Walk the tree from the first question, following each `next`
 * resolver, and return the ids on the path the current answers imply.
 *
 * This is what makes the progress indicator honest. A founder who
 * selects "None of these" is on a four-question path and should see
 * "of 4"; a qualifying founder sees "of 9". Recomputed on every answer
 * change rather than cached, because a user can go back and change a
 * branching answer at any time.
 *
 * The `seen` set is not defensive paranoia — `next` resolvers are
 * authored by hand in config files, and a resolver pointing backwards
 * would otherwise hang the browser. Terminating on a revisit turns a
 * config typo into a short path instead of a frozen tab.
 */
export function resolvePath(questions: Question[], answers: Answers): string[] {
  if (questions.length === 0) return [];

  const byId = new Map(questions.map((q) => [q.id, q]));
  const path: string[] = [];
  const seen = new Set<string>();

  let current: Question | undefined = questions[0];

  while (current && !seen.has(current.id)) {
    seen.add(current.id);
    path.push(current.id);

    const explicit = current.next?.(answers);

    if (explicit === null) break;

    if (explicit !== undefined) {
      current = byId.get(explicit);
    } else {
      const index = questions.indexOf(current);
      current = questions[index + 1];
    }
  }

  return path;
}
