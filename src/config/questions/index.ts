import type { Persona } from "@/lib/leads/types";
import { founderQuestions } from "./founder";
import { generalQuestions } from "./general";
import { lpQuestions } from "./lp";
import { servicesQuestions } from "./services";
import type { Question } from "./types";

export * from "./types";

/**
 * The one place a persona maps to its question tree.
 *
 * Everything downstream — the funnel component, progress computation,
 * validation, the eventual CMS migration — looks the tree up here, so
 * adding a persona is one entry rather than a search for switch
 * statements.
 */
export const QUESTION_TREES: Record<Persona, Question[]> = {
  founder: founderQuestions,
  lp: lpQuestions,
  services: servicesQuestions,
  general: generalQuestions,
};

export function getQuestions(persona: Persona): Question[] {
  return QUESTION_TREES[persona];
}
