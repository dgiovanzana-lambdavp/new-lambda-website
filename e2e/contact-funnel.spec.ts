import { expect, test } from "@playwright/test";
import path from "node:path";

/**
 * Viewport smoke for the founder contact funnel.
 *
 * Lead submission is mocked so nothing reaches Postgres, Resend, or
 * production. PostHog ingest is blocked for the same reason.
 */
const ARTIFACT_DIR = path.join(
  process.cwd(),
  "tmp",
  "contact-funnel-screenshots",
);

async function mockOutbound(page: import("@playwright/test").Page) {
  await page.route("**/api/leads", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ outcome: "review" }),
    });
  });

  await page.route(/posthog\.com|i\.posthog\.com/, async (route) => {
    await route.fulfill({ status: 204, body: "" });
  });
}

for (const lane of [
  {
    path: "/contact/founder",
    step1Heading: "Which best describes your company?",
    advanceLabel: "GovTech",
  },
  {
    path: "/contact/lp",
    step1Heading: "Which best describes you?",
    advanceLabel: "Family office",
  },
  {
    path: "/contact/general",
    step1Heading: "First, how do we reach you?",
    advanceWithContinue: true,
  },
] as const) {
  test.describe(`${lane.path}`, () => {
    test("step 1 renders and advances", async ({ page }, testInfo) => {
      await mockOutbound(page);
      await page.goto(`${lane.path}?resetProgress=1`);

      await expect(
        page.getByRole("heading", { name: lane.step1Heading }),
      ).toBeVisible();

      const shotName = `${lane.path.replace(/\//g, "_").slice(1)}-${testInfo.project.name}-step1.png`;
      await page.screenshot({
        path: path.join(ARTIFACT_DIR, shotName),
        fullPage: true,
      });

      if ("advanceWithContinue" in lane && lane.advanceWithContinue) {
        await page.getByLabel("Name").fill("Test Visitor");
        await page.getByLabel("Email").fill("test.visitor@example.com");
        const continueButton = page.getByRole("button", { name: "Continue" });
        await expect(continueButton).toBeVisible();
        await continueButton.click();
        await expect(
          page.getByRole("heading", { name: "What can we help with?" }),
        ).toBeVisible();
      } else {
        await page.getByRole("radio", { name: lane.advanceLabel }).click();
        await expect(
          page.getByRole("heading", {
            name:
              lane.path === "/contact/founder"
                ? "What is your current annual revenue?"
                : "What would you like to discuss?",
          }),
        ).toBeVisible();
      }
    });
  });
}

test.describe("founder continue control", () => {
  test("shows Continue on the contact step", async ({ page }, testInfo) => {
    await mockOutbound(page);
    await page.goto("/contact/founder?resetProgress=1");

    await page.getByRole("radio", { name: "GovTech" }).click();
    await page.getByRole("radio", { name: "$3M - $10M" }).click();

    await expect(
      page.getByRole("heading", { name: "First, how do we reach you?" }),
    ).toBeVisible();

    const continueButton = page.getByRole("button", { name: "Continue" });
    await expect(continueButton).toBeVisible();

    if (testInfo.project.name === "mobile-390") {
      const box = await continueButton.boundingBox();
      expect(box).toBeTruthy();
      if (box) {
        // Full-width sticky control should sit near the bottom of the
        // 390px viewport and span nearly the full content width.
        expect(box.y + box.height).toBeGreaterThan(700);
        expect(box.width).toBeGreaterThan(300);
      }
    }

    await page.screenshot({
      path: path.join(
        ARTIFACT_DIR,
        `founder-contact-${testInfo.project.name}.png`,
      ),
      fullPage: true,
    });
  });
});
