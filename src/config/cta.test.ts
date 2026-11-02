import { describe, expect, it } from "vitest";
import { HOME_HERO_COPY, OWNER_CTA_COPY } from "./cta";

const DASHES = /[—–]/;
const FORBIDDEN =
  /\b(buy|buys|buying|bought|acquire|acquisition|seller|selling|sale|succession|exit|permanent home|hold forever|holdco)\b/i;

describe("cleared growth-capital CTA copy", () => {
  it("matches the Critiquito-cleared home hero strings", () => {
    expect(HOME_HERO_COPY.headline).toBe(
      "Growth capital for profitable software companies.",
    );
    expect(HOME_HERO_COPY.subhead).toBe(
      "Fund your next hires, contract or product without raising venture capital.",
    );
    expect(HOME_HERO_COPY.buttonLabel).toBe("Talk to Domenic (20 min)");
    expect(HOME_HERO_COPY.href).toBe("/contact/founder");
  });

  it("matches the Critiquito-cleared owner CTA strings", () => {
    expect(OWNER_CTA_COPY.heading).toBe("Run a profitable software company?");
    expect(OWNER_CTA_COPY.text).toBe(
      "Talk to Domenic for 20 minutes about funding your next stage.",
    );
    expect(OWNER_CTA_COPY.buttonLabel).toBe("Talk to Domenic (20 min)");
    expect(OWNER_CTA_COPY.href).toBe("/contact/founder");
  });

  it("has no em or en dashes", () => {
    for (const value of Object.values(HOME_HERO_COPY)) {
      expect(value).not.toMatch(DASHES);
    }
    for (const value of Object.values(OWNER_CTA_COPY)) {
      expect(value).not.toMatch(DASHES);
    }
  });

  it("never implies buying, selling, succession, exit, or a permanent home", () => {
    for (const value of Object.values(HOME_HERO_COPY)) {
      expect(value).not.toMatch(FORBIDDEN);
    }
    for (const value of Object.values(OWNER_CTA_COPY)) {
      expect(value).not.toMatch(FORBIDDEN);
    }
  });
});
