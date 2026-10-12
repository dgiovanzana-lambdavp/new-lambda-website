import { describe, expect, it } from "vitest";
import type { LeadSubmission } from "@/lib/leads/types";
import { PERSONA_LABEL } from "./email";

/**
 * buildSubject is not exported; the triage label map is. That map is
 * what ends up in the notification subject as `[Investor / LP] ...`,
 * so this is the contract the inbox depends on.
 */
describe("lead notification persona labels", () => {
  it("labels the LP lane clearly as an investor / LP inquiry", () => {
    expect(PERSONA_LABEL.lp).toBe("Investor / LP");
  });

  it("keeps other lane labels distinct", () => {
    expect(PERSONA_LABEL.founder).toBe("Founder");
    expect(PERSONA_LABEL.general).toBe("General");
    expect(PERSONA_LABEL.services).toBe("Operating Support");
  });
});

describe("LP lead shape for notifications", () => {
  it("carries persona lp so destinations can label the inquiry", () => {
    const lead = {
      persona: "lp",
      contact: {
        firstName: "Alex",
        lastName: "Ng",
        email: "alex.ng@examplefamilyoffice.com",
      },
      answers: { investor_type: "family_office" },
      attribution: { heard_about_us: "linkedin" },
      meta: {
        submittedAt: new Date().toISOString(),
        completedSteps: 5,
        totalSteps: 5,
        isPartial: false,
        sessionId: crypto.randomUUID(),
      },
    } satisfies Pick<
      LeadSubmission,
      "persona" | "contact" | "answers" | "attribution" | "meta"
    >;

    expect(lead.persona).toBe("lp");
    expect(PERSONA_LABEL[lead.persona]).toBe("Investor / LP");
  });
});
