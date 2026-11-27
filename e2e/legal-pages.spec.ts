import { expect, test } from "@playwright/test";

const REDIRECTS: { path: string; location: string }[] = [
  { path: "/privacy-policy", location: "/privacy" },
  { path: "/terms-of-service", location: "/terms" },
  { path: "/terms-of-use", location: "/terms" },
];

test.describe("legal pages", () => {
  test("canonical pages return 200", async ({ request }) => {
    const privacyRes = await request.get("/privacy");
    expect(privacyRes.status()).toBe(200);
    const privacyHtml = await privacyRes.text();
    expect(privacyHtml).toMatch(/Privacy Policy/i);

    const termsRes = await request.get("/terms");
    expect(termsRes.status()).toBe(200);
    const termsHtml = await termsRes.text();
    expect(termsHtml).toMatch(/Terms of Service/i);
  });

  for (const { path, location } of REDIRECTS) {
    test(`redirects ${path} to ${location}`, async ({ request }) => {
      const res = await request.get(path, { maxRedirects: 0 });
      expect(res.status()).toBe(301);
      expect(res.headers().location).toMatch(new RegExp(`${location}$`));
    });
  }

  test("footer links to Privacy and Terms on the homepage", async ({
    request,
  }) => {
    const res = await request.get("/");
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(html).toContain('href="/privacy"');
    expect(html).toContain('href="/terms"');
  });
});