import { describe, expect, it } from "vitest";
import nextConfig from "../../../next.config";
import { FOOTER_COMPANY_LINKS } from "@/lib/site/footer-links";
import {
  assertNoDashCharacters,
  privacyMarkdown,
  privacySections,
  termsMarkdown,
  termsSections,
} from "@/lib/legal/content";
import { readMarkdownForPath } from "@/lib/agent/search-index";

const REDIRECT_PAIRS: { source: string; destination: string }[] = [
  { source: "/privacy-policy", destination: "/privacy" },
  { source: "/privacy-policy/", destination: "/privacy" },
  { source: "/terms-of-service", destination: "/terms" },
  { source: "/terms-of-service/", destination: "/terms" },
  { source: "/terms-of-use", destination: "/terms" },
  { source: "/terms-of-use/", destination: "/terms" },
];

describe("legal pages", () => {
  it("footer includes Privacy and Terms", () => {
    const hrefs = FOOTER_COMPANY_LINKS.map((l) => l.href);
    expect(hrefs).toContain("/privacy");
    expect(hrefs).toContain("/terms");
  });

  it("legal copy has no em or en dashes", () => {
    const blobs = [
      privacyMarkdown(),
      termsMarkdown(),
      ...privacySections.flatMap((s) => [
        s.title,
        ...s.paragraphs,
        ...(s.bullets ?? []),
      ]),
      ...termsSections.flatMap((s) => [
        s.title,
        ...s.paragraphs,
        ...(s.bullets ?? []),
      ]),
    ];
    for (const text of blobs) {
      assertNoDashCharacters(text);
      expect(text).not.toMatch(/[\u2013\u2014]/);
    }
  });

  it("agent markdown exists for privacy and terms", () => {
    expect(readMarkdownForPath("/privacy")).toMatch(/Privacy Policy/i);
    expect(readMarkdownForPath("/terms")).toMatch(/Terms of Service/i);
  });

  it("permanent redirects for alternate legal URLs", async () => {
    const rules = (await nextConfig.redirects?.()) ?? [];
    for (const pair of REDIRECT_PAIRS) {
      const rule = rules.find(
        (r) => r.source === pair.source && r.destination === pair.destination,
      );
      expect(rule, `missing redirect ${pair.source}`).toBeTruthy();
      expect(rule?.statusCode).toBe(301);
    }
  });
});