import { heardAboutQuestion } from "./attribution";
import type { Question } from "./types";

/**
 * Operating-support branch.
 *
 * ⚠ Gated behind FUNNEL_CONFIG.servicesLaneEnabled, default false.
 *
 * The purpose of this lane is demand measurement before commitment.
 * Lambda has not decided whether to sell these services, so the copy
 * carries no pricing, no engagement-model language, no implied practice
 * areas, and no "our fractional CFO team". It is interest capture.
 *
 * If nobody selects a given service in 90 days, that is the answer.
 */
export const servicesQuestions: Question[] = [
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
        label: "Company",
        type: "text",
        required: true,
        autoComplete: "organization",
        width: "half",
      },
    ],
  },
  {
    id: "support_type",
    type: "multichoice",
    title: "What kind of support are you looking for?",
    subtitle: "Select all that apply.",
    required: true,
    options: [
      // Sales leads the list deliberately — it is the strongest
      // capability, and first position measurably shapes selection.
      { value: "sales", label: "Sales strategy and system building" },
      { value: "customer_success", label: "Customer success and retention" },
      { value: "finance", label: "Finance and CFO-level support" },
      { value: "marketing", label: "Marketing and demand generation" },
      { value: "not_sure", label: "Not sure — want to talk it through" },
    ],
  },
  {
    id: "driver",
    type: "text",
    title: "What's driving this right now?",
    required: true,
    placeholder: "What's the problem you're trying to solve?",
  },
  {
    id: "timeline",
    type: "choice",
    title: "What's your timeline?",
    required: true,
    options: [
      { value: "urgent", label: "Urgent — this quarter" },
      { value: "next_3_6_months", label: "Next 3–6 months" },
      { value: "later", label: "Exploring for later" },
      { value: "curious", label: "Just curious" },
    ],
  },
  {
    id: "portfolio_connection",
    type: "choice",
    title: "Are you connected to Lambda's portfolio?",
    required: true,
    options: [
      { value: "yes", label: "Yes, portfolio company" },
      { value: "no", label: "No" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  heardAboutQuestion,
];
