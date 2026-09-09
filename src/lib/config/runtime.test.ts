import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { SCORING_CONFIG } from "@/config/scoring";
import { BOOKING_CONFIG } from "@/config/funnel";
import { getBookingLink, getScoringConfig } from "./runtime";

/**
 * The failure mode these tests protect against is the expensive one.
 *
 * If PostHog is unreachable and the code throws, /api/leads returns 500
 * and the contact form is down. If it silently returns an empty config,
 * every gate passes and unqualified founders book partner time. Both
 * are worse than running on slightly stale thresholds, so the only
 * acceptable behaviour is to fall back to what is checked in.
 */

const SAVED = {
  personal: process.env.POSTHOG_PERSONAL_API_KEY,
  project: process.env.NEXT_PUBLIC_POSTHOG_KEY,
};

beforeEach(() => {
  delete process.env.POSTHOG_PERSONAL_API_KEY;
  delete process.env.NEXT_PUBLIC_POSTHOG_KEY;
});

afterEach(() => {
  if (SAVED.personal) process.env.POSTHOG_PERSONAL_API_KEY = SAVED.personal;
  if (SAVED.project) process.env.NEXT_PUBLIC_POSTHOG_KEY = SAVED.project;
});

describe("getScoringConfig", () => {
  it("returns the checked-in config when PostHog is not configured", async () => {
    await expect(getScoringConfig()).resolves.toEqual(SCORING_CONFIG);
  });

  it("returns a usable config even with a bogus PostHog host", async () => {
    // Stands in for "PostHog is unreachable" — a blocked host, DNS
    // failure, or outage. It must resolve, not reject, and the gate
    // must stay exactly where it was.
    process.env.NEXT_PUBLIC_POSTHOG_KEY = "phc_test";
    process.env.POSTHOG_PERSONAL_API_KEY = "phx_test";
    process.env.NEXT_PUBLIC_POSTHOG_HOST = "https://127.0.0.1:9";

    const config = await getScoringConfig();

    expect(config.gates.minRevenueBand).toBe(
      SCORING_CONFIG.gates.minRevenueBand,
    );
    expect(config.gates.profitability).toEqual(
      SCORING_CONFIG.gates.profitability,
    );
  }, 15_000);

  it("never returns a config with empty gates", async () => {
    // An empty focusArea list would pass nothing; an empty
    // profitability list the same. Either would be a silent, total
    // change in behaviour, so assert the invariant directly.
    const config = await getScoringConfig();
    expect(config.gates.focusArea.length).toBeGreaterThan(0);
    expect(config.gates.profitability.length).toBeGreaterThan(0);
    expect(config.version).toBeTruthy();
  });
});

describe("getBookingLink", () => {
  it("falls back to the checked-in booking link", async () => {
    await expect(getBookingLink()).resolves.toBe(
      BOOKING_CONFIG.tierABookingLink,
    );
  });
});
