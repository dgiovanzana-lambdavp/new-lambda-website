import { beforeEach, describe, expect, it, vi } from "vitest";
import { BOOKING_CONFIG } from "@/config/funnel";
import type { LeadScoring, LeadSubmission } from "@/lib/leads/types";
import { __resetRateLimits } from "@/lib/rate-limit";

/**
 * These tests drive POST /api/leads the way the browser does: a
 * filled-in founder payload, empty optional website, no "heard about
 * us" answer, and a realistic time-on-form. Destinations are stubbed
 * so we can inspect the lead that would have been stored without
 * needing Postgres or Resend.
 */

const deliverLead = vi.hoisted(() =>
  vi.fn(async (_lead: LeadSubmission, _scoring: LeadScoring | null) => ({
    persisted: true,
    results: [{ name: "postgres", ok: true }],
  })),
);

vi.mock("@/lib/leads", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/leads")>();
  return { ...actual, deliverLead };
});

import { POST } from "./route";

let ipSeq = 0;

function nextIp(): string {
  ipSeq += 1;
  return `203.0.113.${ipSeq}`;
}

function sessionId(): string {
  return crypto.randomUUID();
}

/**
 * Shape the funnel posts after a founder finishes every on-path
 * question. Website left blank, attribution question not asked.
 */
function harborComplianceLead(
  overrides: Record<string, unknown> = {},
): Record<string, unknown> {
  return {
    persona: "founder",
    contact: {
      firstName: "Maya",
      lastName: "Chen",
      email: "maya@harborcompliance.com",
      phone: "415-555-0142",
      company: "Harbor Compliance",
      companyUrl: "",
    },
    answers: {
      focus_area: "govtech",
      revenue: "3m_10m",
      financials: "ebitda_positive",
      use_of_proceeds: "growth",
      capital_amount: "3m_10m",
      timeline: "immediate",
    },
    attribution: {
      utm_source: "linkedin",
      utm_medium: "social",
      landing_path: "/contact",
      heard_about_us: "",
    },
    meta: {
      submittedAt: new Date().toISOString(),
      completedSteps: 7,
      totalSteps: 7,
      isPartial: false,
      sessionId: sessionId(),
    },
    _hp: "",
    _startedAt: Date.now() - 48_000,
    ...overrides,
  };
}

async function postLead(
  body: unknown,
  ip = nextIp(),
): Promise<{ status: number; json: Record<string, unknown> }> {
  const request = new Request("http://localhost/api/leads", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
  const response = await POST(request);
  return { status: response.status, json: (await response.json()) as Record<string, unknown> };
}

function lastStored(): { lead: LeadSubmission; scoring: LeadScoring | null } {
  const call = deliverLead.mock.calls.at(-1);
  if (!call) throw new Error("deliverLead was not called");
  return { lead: call[0] as LeadSubmission, scoring: call[1] as LeadScoring | null };
}

beforeEach(() => {
  deliverLead.mockClear();
  __resetRateLimits();
});

describe("POST /api/leads — qualifying founder", () => {
  it("books a GovTech founder and infers the company site from work email", async () => {
    const { status, json } = await postLead(harborComplianceLead());

    expect(status).toBe(200);
    expect(json).toEqual({
      outcome: "book",
      calendarUrl: BOOKING_CONFIG.embedUrl,
    });
    expect(json).not.toHaveProperty("tier");
    expect(json).not.toHaveProperty("failedGates");
    expect(json).not.toHaveProperty("companyUrl");

    const { lead, scoring } = lastStored();
    expect(lead.contact.companyUrl).toBe("https://harborcompliance.com");
    expect(lead.answers).not.toHaveProperty("heard_about");
    expect(lead.attribution.heard_about_us).toBe("");
    expect(scoring).toMatchObject({ tier: "A", outcome: "book", failedGates: [] });
  });

  it("keeps a website the founder typed instead of guessing from email", async () => {
    await postLead(
      harborComplianceLead({
        contact: {
          firstName: "Priya",
          lastName: "Shah",
          email: "priya@mail.northstarhealth.io",
          company: "Northstar Health",
          companyUrl: "https://www.northstarhealth.io",
        },
      }),
    );

    expect(lastStored().lead.contact.companyUrl).toBe(
      "https://www.northstarhealth.io",
    );
  });

  it("does not treat a Gmail address as the company website", async () => {
    await postLead(
      harborComplianceLead({
        contact: {
          firstName: "James",
          lastName: "Okonkwo",
          email: "james.okonkwo@gmail.com",
          company: "Finledger",
          companyUrl: "",
        },
      }),
    );

    expect(lastStored().lead.contact.companyUrl).toBe("");
  });

  it("treats the https:// placeholder as an empty website", async () => {
    await postLead(
      harborComplianceLead({
        contact: {
          firstName: "Maya",
          lastName: "Chen",
          email: "maya@harborcompliance.com",
          company: "Harbor Compliance",
          companyUrl: "https://",
        },
      }),
    );

    expect(lastStored().lead.contact.companyUrl).toBe(
      "https://harborcompliance.com",
    );
  });
});

describe("POST /api/leads — other realistic paths", () => {
  it("captures a partial after contact details, including inferred site", async () => {
    const { status, json } = await postLead(
      harborComplianceLead({
        answers: {},
        meta: {
          submittedAt: new Date().toISOString(),
          completedSteps: 1,
          totalSteps: 7,
          isPartial: true,
          sessionId: sessionId(),
        },
        _startedAt: Date.now() - 1_200,
      }),
    );

    expect(status).toBe(200);
    expect(json).toEqual({ outcome: "review" });
    expect(lastStored().lead.contact.companyUrl).toBe(
      "https://harborcompliance.com",
    );
    expect(lastStored().scoring).toBeNull();
  });

  it("declines an out-of-focus founder without exposing the reason", async () => {
    const { status, json } = await postLead(
      harborComplianceLead({
        answers: {
          focus_area: "none",
          out_of_focus:
            "We build a consumer marketplace for neighborhood grocery delivery.",
        },
        meta: {
          submittedAt: new Date().toISOString(),
          completedSteps: 3,
          totalSteps: 3,
          isPartial: false,
          sessionId: sessionId(),
        },
      }),
    );

    expect(status).toBe(200);
    expect(json).toEqual({ outcome: "decline" });
    expect(json).not.toHaveProperty("failedGates");
    expect(lastStored().scoring).toMatchObject({
      tier: "C",
      outcome: "decline",
    });
  });

  it("sends a near-miss founder to review, not the calendar", async () => {
    const { json } = await postLead(
      harborComplianceLead({
        answers: {
          focus_area: "govtech",
          revenue: "under_1m",
          financials: "ebitda_positive",
          use_of_proceeds: "growth",
          capital_amount: "1m_3m",
          timeline: "next_3_months",
        },
      }),
    );

    expect(json).toEqual({ outcome: "review" });
    expect(lastStored().scoring).toMatchObject({
      tier: "B",
      outcome: "review",
    });
  });
});
