import { heardAboutQuestion } from "./attribution";
import type { Question } from "./types";

/**
 * LP / investor branch.
 *
 * ⚠ Gated behind FUNNEL_CONFIG.lpLaneEnabled, default false, pending
 * counsel review. See the note in src/config/funnel.ts.
 *
 * Deliberately short and non-promotional. There is no offering
 * language here and there should not be: the copy describes a
 * conversation, not an investment.
 *
 * Note what is NOT asked — check size, accreditation status, net worth.
 * Those questions on a publicly accessible form are exactly what turns
 * a contact page into something a securities lawyer has opinions
 * about. Route the conversation to a human instead.
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
