import { heardAboutQuestion } from "./attribution";
import type { Question } from "./types";

/**
 * LP / investor branch.
 *
 * Shown when FUNNEL_CONFIG.lpLaneEnabled is true. Deliberately short
 * and non-promotional: the copy describes a conversation, not an
 * investment. Check size, accreditation, and net worth stay off the
 * public form and are handled by a human follow-up.
 */
export const lpQuestions: Question[] = [
  {
    id: "contact",
    type: "contact",
    title: "First, how do we reach you?",
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
        label: "Firm / entity",
        type: "text",
        required: false,
        autoComplete: "organization",
        width: "half",
      },
    ],
  },
  {
    id: "investor_type",
    type: "choice",
    title: "Which best describes you?",
    required: true,
    options: [
      { value: "family_office", label: "Family office" },
      { value: "institutional", label: "Institutional investor" },
      { value: "fund_of_funds", label: "Fund of funds" },
      { value: "individual", label: "Individual investor" },
      { value: "advisor", label: "Financial advisor / consultant" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "discuss",
    type: "choice",
    title: "What would you like to discuss?",
    required: true,
    options: [
      { value: "learn_more", label: "Learning more about Lambda" },
      { value: "portfolio_company", label: "A specific portfolio company" },
      { value: "co_investment", label: "Co-investment" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "notes",
    type: "text",
    title: "Anything you'd like us to know before we connect?",
    required: false,
    placeholder: "Optional.",
  },
  heardAboutQuestion,
];
