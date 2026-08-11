import { heardAboutQuestion } from "./attribution";
import type { Question } from "./types";

/**
 * General branch. Deliberately cheap — four screens.
 *
 * This lane exists so press, vendors, and job seekers have somewhere to
 * go that isn't the founder funnel. Qualifying them would be wasted
 * effort; getting them out of the founder lane is the entire value.
 *
 * Note the single "Name" field rather than first/last. LeadContact
 * requires firstName and treats lastName as optional, so a one-field
 * name maps cleanly onto the same shape without a special case
 * anywhere downstream.
 */
export const generalQuestions: Question[] = [
  {
    id: "contact",
    type: "contact",
    title: "First, how do we reach you?",
    fields: [
      {
        name: "firstName",
        label: "Name",
        type: "text",
        required: true,
        autoComplete: "name",
        width: "full",
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
        name: "company",
        label: "Company",
        type: "text",
        required: false,
        autoComplete: "organization",
        width: "full",
      },
    ],
  },
  {
    id: "help_with",
    type: "choice",
    title: "What can we help with?",
    required: true,
    options: [
      { value: "press", label: "Press or media" },
      { value: "partnership", label: "Partnership" },
      { value: "vendor", label: "Service provider / vendor" },
      { value: "careers", label: "Careers" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "message",
    type: "text",
    title: "Your message",
    required: true,
    placeholder: "How can we help?",
  },
  heardAboutQuestion,
];
