import {
  FOCUS_AREA_LABELS,
  FOCUS_AREAS,
  PROFITABILITY_BANDS,
  PROFITABILITY_LABELS,
  REVENUE_BANDS,
  REVENUE_LABELS,
} from "@/config/answer-values";
import { heardAboutQuestion } from "./attribution";
import type { Question } from "./types";

/**
 * Founder branch — the primary lane.
 *
 * Question order is deliberate: the three hard gates (focus area,
 * revenue, profitability) come first, so a visitor who abandons at
 * question 4 has already given us everything needed to tier them. That
 * only pays off because contact details were captured at question 1.
 *
 * Lambda's structure is credit-first with an equity component — a loan
 * first, equity second. That makes qualification substantially more
 * mechanical than a pure equity screen: revenue and profitability are
 * real gates, not judgement calls.
 */
export const founderQuestions: Question[] = [
  {
    id: "contact",
    type: "contact",
    title: "First, how do we reach you?",
    subtitle: "So we can follow up even if you don't finish.",
    fields: [
      {
        name: "firstName",
        label: "First name",
        type: "text",
        required: true,
        autoComplete: "given-name",
        width: "half",
      },
      {
        name: "lastName",
        label: "Last name",
        type: "text",
        required: true,
        autoComplete: "family-name",
        width: "half",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        width: "full",
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        required: false,
        autoComplete: "tel",
        width: "half",
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        required: true,
        autoComplete: "organization",
        width: "half",
      },
      {
        name: "companyUrl",
        label: "Company website",
        type: "url",
        required: false,
        autoComplete: "url",
        placeholder: "https://",
        width: "full",
      },
    ],
  },

  // ── GATE 1 ────────────────────────────────────────────────────────
  {
    id: "focus_area",
    type: "choice",
    title: "Which best describes your company?",
    required: true,
    options: FOCUS_AREAS.map((value) => ({
      value,
      label: FOCUS_AREA_LABELS[value],
    })),
    /**
     * The only branch point in this tree.
     *
     * Someone outside the focus areas is not a fit regardless of how
     * they answer everything else, so running them through six more
     * questions wastes their time and teaches us nothing. Short-circuit
     * to a free-text capture and attribution, then a courteous decline.
     * The record is still stored — an out-of-focus founder today may be
     * a referral source later.
     */
    next: (answers) =>
      answers.focus_area === "none" ? "out_of_focus" : "revenue",
  },

  // ── GATE 2 ────────────────────────────────────────────────────────
  {
    id: "revenue",
    type: "choice",
    title: "What is your current annual revenue?",
    required: true,
    options: REVENUE_BANDS.map((value) => ({
      value,
      label: REVENUE_LABELS[value],
    })),
  },

  // ── GATE 3 ────────────────────────────────────────────────────────
  {
    id: "financials",
    type: "choice",
    // Asked as a band, never as a yes/no. "Are you profitable?" gets a
    // yes from nearly everyone.
    title: "Which best describes the company's current financials?",
    required: true,
    options: PROFITABILITY_BANDS.map((value) => ({
      value,
      label: PROFITABILITY_LABELS[value],
    })),
  },

  {
    id: "use_of_proceeds",
    type: "choice",
    title: "What would the capital be used for?",
    // Standard credit underwriting, and it separates risk profiles
    // sharply — refinancing and liquidity are very different
    // propositions from growth.
    required: true,
    options: [
      { value: "growth", label: "Growth — sales and marketing" },
      { value: "acquisition", label: "An acquisition" },
      { value: "refinancing", label: "Refinancing existing debt" },
      { value: "working_capital", label: "Working capital" },
      { value: "liquidity", label: "Founder or shareholder liquidity" },
      { value: "other", label: "Other" },
    ],
  },

  {
    id: "capital_amount",
    type: "choice",
    title: "How much capital are you looking for?",
    required: true,
    options: [
      { value: "under_1m", label: "Under $1M" },
      { value: "1m_3m", label: "$1M – $3M" },
      { value: "3m_10m", label: "$3M – $10M" },
      { value: "10m_25m", label: "$10M – $25M" },
      { value: "over_25m", label: "Over $25M" },
      { value: "not_sure", label: "Not sure yet" },
    ],
  },

  {
    id: "timeline",
    type: "choice",
    title: "What's your timeline?",
    required: true,
    options: [
      { value: "immediate", label: "Immediate need" },
      { value: "next_3_months", label: "Next 3 months" },
      { value: "next_6_12_months", label: "Next 6–12 months" },
      { value: "exploring", label: "Exploring options" },
    ],
  },

  {
    id: "about",
    type: "text",
    title: "Tell us about the company and what you're building.",
    required: true,
    placeholder:
      "The more context you give us, the more useful our first conversation will be.",
  },

  heardAboutQuestion,

  /**
   * Reached only from the focus-area branch. Placed after the terminal
   * attribution question on purpose: array position is the fall-through
   * order, so anything sitting between two main-line questions would be
   * walked into by default. Parking off-path questions at the end keeps
   * the main line readable.
   */
  {
    id: "out_of_focus",
    type: "text",
    title: "Tell us what you're building.",
    subtitle:
      "We invest in a concentrated set of areas, but we'd still like to know.",
    required: true,
    placeholder: "A sentence or two is plenty.",
    next: () => "heard_about",
  },
];
