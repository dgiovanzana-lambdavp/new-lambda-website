import { describe, expect, it } from "vitest";
import { validateStep } from "@/lib/funnel/validate";
import type { Answers } from "@/lib/leads/types";
import { lpQuestions } from "./lp";
import { resolvePath } from "./types";

const DASHES = /[—–]/;

describe("lp question path", () => {
  it("walks the full investor lane in order", () => {
    const pathIds = resolvePath(lpQuestions, {
      investor_type: "family_office",
      discuss: "learn_more",
      notes: "Happy to share context on a call.",
      heard_about: "linkedin",
    });

    expect(pathIds).toEqual([
      "investor_type",
      "discuss",
      "contact",
      "notes",
      "heard_about",
    ]);
  });

  it("puts one-click questions before contact", () => {
    const ids = lpQuestions.map((question) => question.id);
    expect(ids.indexOf("investor_type")).toBeLessThan(ids.indexOf("contact"));
    expect(ids.indexOf("discuss")).toBeLessThan(ids.indexOf("contact"));
  });

  it("keeps optional notes off the required path when blank", () => {
    const pathIds = resolvePath(lpQuestions, {
      investor_type: "individual",
      discuss: "co_investment",
      heard_about: "referral",
    });

    expect(pathIds).toEqual([
      "investor_type",
      "discuss",
      "contact",
      "notes",
      "heard_about",
    ]);
  });
});

describe("lp copy", () => {
  it("has no em or en dashes in anything a visitor can read", () => {
    for (const question of lpQuestions) {
      expect(question.title, question.id).not.toMatch(DASHES);
      if (question.subtitle) {
        expect(question.subtitle, question.id).not.toMatch(DASHES);
      }
      if (question.type === "contact") {
        for (const field of question.fields) {
          expect(field.label, field.name).not.toMatch(DASHES);
          if (field.placeholder) {
            expect(field.placeholder, field.name).not.toMatch(DASHES);
          }
        }
      }
      if (question.type === "choice" || question.type === "multichoice") {
        for (const option of question.options) {
          expect(option.label, option.value).not.toMatch(DASHES);
        }
      }
      if (question.type === "text" && question.placeholder) {
        expect(question.placeholder, question.id).not.toMatch(DASHES);
      }
    }
  });
});

describe("investor walks the lp funnel", () => {
  it("can finish with firm left blank and notes left blank", () => {
    const contact = {
      firstName: "Alex",
      lastName: "Ng",
      email: "alex.ng@examplefamilyoffice.com",
      phone: "",
      company: "",
    };
    const answers: Answers = {};
    const steps: string[] = [];

    for (const question of lpQuestions) {
      const pathIds = resolvePath(lpQuestions, answers);
      if (!pathIds.includes(question.id)) continue;

      if (question.type === "contact") {
        expect(validateStep(question, answers, contact).ok).toBe(true);
        steps.push(question.id);
        continue;
      }

      if (question.id === "investor_type") answers.investor_type = "family_office";
      if (question.id === "discuss") answers.discuss = "learn_more";
      if (question.id === "notes") answers.notes = "";
      if (question.id === "heard_about") answers.heard_about = "linkedin";

      expect(validateStep(question, answers, contact).ok).toBe(true);
      steps.push(question.id);
    }

    expect(steps).toEqual([
      "investor_type",
      "discuss",
      "contact",
      "notes",
      "heard_about",
    ]);
  });
});
