import { describe, expect, it } from "vitest";
import type { LeadSubmission } from "./types";
import { companyUrlFromEmail, withInferredCompanyUrl } from "./company-url";

function lead(overrides: {
  email: string;
  companyUrl?: string;
}): LeadSubmission {
  return {
    persona: "founder",
    contact: {
      firstName: "Jane",
      email: overrides.email,
      companyUrl: overrides.companyUrl,
    },
    answers: {},
    attribution: { heard_about_us: "" },
    meta: {
      submittedAt: "2026-09-16T00:00:00.000Z",
      completedSteps: 1,
      totalSteps: 7,
      isPartial: true,
      sessionId: "00000000-0000-4000-8000-000000000000",
    },
  };
}

describe("companyUrlFromEmail", () => {
  it("turns a work email into https://domain", () => {
    expect(companyUrlFromEmail("jane@acme.com")).toBe("https://acme.com");
  });

  it("keeps a subdomain", () => {
    expect(companyUrlFromEmail("jane@corp.acme.io")).toBe(
      "https://corp.acme.io",
    );
  });

  it("ignores consumer inboxes", () => {
    expect(companyUrlFromEmail("jane@gmail.com")).toBeUndefined();
    expect(companyUrlFromEmail("jane@outlook.com")).toBeUndefined();
    expect(companyUrlFromEmail("jane@yahoo.com")).toBeUndefined();
  });

  it("ignores malformed addresses", () => {
    expect(companyUrlFromEmail("not-an-email")).toBeUndefined();
    expect(companyUrlFromEmail("jane@localhost")).toBeUndefined();
    expect(companyUrlFromEmail("jane@.com")).toBeUndefined();
  });
});

describe("withInferredCompanyUrl", () => {
  it("fills a missing website from the email domain", () => {
    const result = withInferredCompanyUrl(lead({ email: "jane@acme.com" }));
    expect(result.contact.companyUrl).toBe("https://acme.com");
  });

  it("treats the https:// placeholder as empty", () => {
    const result = withInferredCompanyUrl(
      lead({ email: "jane@acme.com", companyUrl: "https://" }),
    );
    expect(result.contact.companyUrl).toBe("https://acme.com");
  });

  it("does not overwrite a website the visitor typed", () => {
    const result = withInferredCompanyUrl(
      lead({
        email: "jane@acme.com",
        companyUrl: "https://www.acme.com/about",
      }),
    );
    expect(result.contact.companyUrl).toBe("https://www.acme.com/about");
  });

  it("leaves gmail leads without a company site", () => {
    const result = withInferredCompanyUrl(lead({ email: "jane@gmail.com" }));
    expect(result.contact.companyUrl).toBeUndefined();
  });
});
