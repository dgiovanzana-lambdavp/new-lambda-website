import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { validateStep } from "@/lib/funnel/validate";
import type { Answers } from "@/lib/leads/types";
import { founderQuestions } from "./founder";
import { resolvePath } from "./types";

const DASHES = /[—–]/;

describe("founder question path", () => {
  it("does not walk a qualifying founder into the out-of-focus question", () => {
    const pathIds = resolvePath(founderQuestions, {
      focus_area: "govtech",
      revenue: "3m_10m",
      financials: "ebitda_positive",
      use_of_proceeds: "growth",
      capital_amount: "3m_10m",
      optional_details: "done",
      timeline: "immediate",
    });

    expect(pathIds).toEqual([
      "focus_area",
      "revenue",
      "contact",
      "financials",
      "use_of_proceeds",
      "capital_amount",
      "optional_details",
      "timeline",
    ]);
  });

  it("short-circuits out-of-focus founders without attribution", () => {
    const pathIds = resolvePath(founderQuestions, { focus_area: "none" });
    expect(pathIds).toEqual(["focus_area", "contact", "out_of_focus"]);
  });

  it("puts one-click gates before contact", () => {
    const ids = founderQuestions.map((question) => question.id);
    expect(ids.indexOf("focus_area")).toBeLessThan(ids.indexOf("contact"));
    expect(ids.indexOf("revenue")).toBeLessThan(ids.indexOf("contact"));
  });

  it("keeps phone and website off the primary contact screen", () => {
    const contact = founderQuestions.find((question) => question.id === "contact");
    expect(contact?.type).toBe("contact");
    if (contact?.type !== "contact") return;
    expect(contact.fields.map((field) => field.name)).toEqual([
      "firstName",
      "lastName",
      "email",
      "company",
    ]);

    const optional = founderQuestions.find(
      (question) => question.id === "optional_details",
    );
    expect(optional?.type).toBe("contact");
    if (optional?.type !== "contact") return;
    expect(optional.fields.map((field) => field.name)).toEqual([
      "phone",
      "companyUrl",
    ]);
    expect(optional.fields.every((field) => !field.required)).toBe(true);
  });

  it("does not ask how they heard about Lambda", () => {
    expect(founderQuestions.some((question) => question.id === "heard_about")).toBe(
      false,
    );
  });
});

describe("founder copy", () => {
  it("has no em or en dashes in anything a visitor can read", () => {
    for (const question of founderQuestions) {
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

describe("Maya Chen walks the founder funnel", () => {
  /**
   * Mirrors a real qualifying founder: one-click gates first, then a
   * slim contact screen, website left for the optional step, then the
   * remaining questions. Each step has to validate before the next one
   * is reachable.
   */
  it("can finish without a website and without an attribution question", () => {
    const contact = {
      firstName: "Maya",
      lastName: "Chen",
      email: "maya@harborcompliance.com",
      phone: "415-555-0142",
      company: "Harbor Compliance",
      companyUrl: "",
    };
    const answers: Answers = {};
    const steps: string[] = [];

    for (const question of founderQuestions) {
      const pathIds = resolvePath(founderQuestions, answers);
      if (!pathIds.includes(question.id)) continue;

      if (question.type === "contact") {
        expect(validateStep(question, answers, contact).ok).toBe(true);
        if (question.id === "optional_details") {
          answers.optional_details = "done";
        }
        steps.push(question.id);
        continue;
      }

      if (question.id === "focus_area") answers.focus_area = "govtech";
      if (question.id === "revenue") answers.revenue = "3m_10m";
      if (question.id === "financials") answers.financials = "ebitda_positive";
      if (question.id === "use_of_proceeds") answers.use_of_proceeds = "growth";
      if (question.id === "capital_amount") answers.capital_amount = "3m_10m";
      if (question.id === "timeline") answers.timeline = "immediate";

      expect(validateStep(question, answers, contact).ok).toBe(true);
      steps.push(question.id);
    }

    expect(steps).toEqual([
      "focus_area",
      "revenue",
      "contact",
      "financials",
      "use_of_proceeds",
      "capital_amount",
      "optional_details",
      "timeline",
    ]);
    expect(steps).not.toContain("heard_about");
  });
});

describe("progress indicator", () => {
  it("is not rendered in the step chrome", () => {
    const source = readFileSync(
      path.join(process.cwd(), "src/components/funnel/StepShell.tsx"),
      "utf8",
    );
    const returnedMarkup = source.slice(source.indexOf("return ("));
    expect(returnedMarkup).not.toMatch(/Question \d/);
    expect(returnedMarkup).not.toMatch(/of 9/);
    expect(returnedMarkup).not.toMatch(/{currentIndex/);
    expect(returnedMarkup).not.toMatch(/totalSteps/);
  });

  it("labels the forward control with Continue or Send", () => {
    const source = readFileSync(
      path.join(process.cwd(), "src/components/funnel/StepShell.tsx"),
      "utf8",
    );
    expect(source).toContain('"Continue"');
    expect(source).toContain('"Send"');
  });
});
