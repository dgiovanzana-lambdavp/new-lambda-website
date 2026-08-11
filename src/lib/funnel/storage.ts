import type { ContactFieldName } from "@/config/questions/types";
import type { Answers, Persona } from "@/lib/leads/types";

/**
 * Resumable progress.
 *
 * Answers are persisted to sessionStorage so a refresh, an accidental
 * back-navigation, or a tab restore does not wipe a half-finished
 * flow. Losing six answered questions to a stray gesture is the kind
 * of thing that turns a warm lead cold.
 *
 * Keyed per persona so switching lanes starts clean rather than
 * carrying a founder's answers into the general branch, where the
 * question ids differ and stale values would be silently submitted.
 */

const KEY_PREFIX = "lambda_funnel_state_v1";

export interface PersistedState {
  answers: Answers;
  /**
   * Contact fields are held apart from `answers` because they are
   * apart in LeadSubmission: `contact` is a typed shape the database
   * promotes to real columns, while `answers` is an open JSONB blob.
   * Merging them here would mean re-separating them at submit time
   * using a list of magic key names.
   */
  contact: Partial<Record<ContactFieldName, string>>;
}

const EMPTY: PersistedState = { answers: {}, contact: {} };

function keyFor(persona: Persona): string {
  return `${KEY_PREFIX}:${persona}`;
}

export function loadState(persona: Persona): PersistedState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(keyFor(persona));
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    // Defensive: a schema change between deploys can leave a stale
    // shape in a live tab. Fall back per-key rather than throwing.
    return {
      answers: parsed.answers ?? {},
      contact: parsed.contact ?? {},
    };
  } catch {
    return EMPTY;
  }
}

export function saveState(persona: Persona, state: PersistedState): void {
  try {
    window.sessionStorage.setItem(keyFor(persona), JSON.stringify(state));
  } catch {
    // Storage full or unavailable — the in-memory flow still works.
  }
}

export function clearState(persona: Persona): void {
  try {
    window.sessionStorage.removeItem(keyFor(persona));
  } catch {
    // ignore
  }
}

/**
 * Clear every persona's state. Used by `?resetProgress=1`, which has to
 * work even when the user is on a different lane than the one holding
 * the stale state.
 */
export function clearAllState(): void {
  try {
    const toRemove: string[] = [];
    for (let i = 0; i < window.sessionStorage.length; i += 1) {
      const key = window.sessionStorage.key(i);
      if (key?.startsWith(KEY_PREFIX)) toRemove.push(key);
    }
    // Collected first, then removed: mutating sessionStorage while
    // iterating it by index shifts the remaining entries and silently
    // skips half of them.
    toRemove.forEach((key) => window.sessionStorage.removeItem(key));
  } catch {
    // ignore
  }
}
