import { expect, test } from "@playwright/test";
import path from "node:path";

const ARTIFACT_DIR = path.join(
  process.cwd(),
  "tmp",
  "growth-capital-cta-screenshots",
);

async function mockOutbound(page: import("@playwright/test").Page) {
  await page.route("**/api/leads", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        outcome: "book",
        calendarUrl:
          "https://calendar.google.com/calendar/appointments/schedules/test?gv=true",
      }),
    });
  });

  await page.route(/posthog\.com|i\.posthog\.com/, async (route) => {
    await route.fulfill({ status: 204, body: "" });
  });
}

test.describe("home hero growth capital CTA", () => {
  test("shows cleared headline, subhead, and Talk to Domenic button", async ({
    page,
  }, testInfo) => {
    await mockOutbound(page);
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Growth capital for profitable software companies.",
      }),
    ).toBeVisible();
    await expect(
      page.getByText(
        "Fund your next hires, contract or product without raising venture capital.",
      ),
    ).toBeVisible();

    const cta = page.getByRole("link", { name: "Talk to Domenic (20 min)" });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/contact/founder");

    await page.screenshot({
      path: path.join(
        ARTIFACT_DIR,
        `home-hero-${testInfo.project.name}.png`,
      ),
      fullPage: false,
    });
  });
});

test.describe("blog owner CTA", () => {
  test("end band uses cleared growth-capital copy", async ({
    page,
  }, testInfo) => {
    await mockOutbound(page);
    await page.goto("/blog/meta-hyperion-data-center-spv-financing");


    const band = page.locator(".blog-cta-band");
    await expect(band.getByRole("heading", { level: 2 })).toHaveText(
      "Run a profitable software company?",
    );
    await expect(band.getByText(
      "Talk to Domenic for 20 minutes about funding your next stage.",
    )).toBeVisible();
    await expect(
      band.getByRole("link", { name: "Talk to Domenic (20 min)" }),
    ).toHaveAttribute("href", "/contact/founder");

    if (testInfo.project.name === "mobile-390") {
      const mid = page.locator(".blog-inline-cta--mobile-only");
      await expect(mid).toBeVisible();
      await expect(
        mid.getByRole("link", { name: "Talk to Domenic (20 min)" }),
      ).toBeVisible();
    }

    await page.screenshot({
      path: path.join(
        ARTIFACT_DIR,
        `blog-cta-${testInfo.project.name}.png`,
      ),
      fullPage: true,
    });
  });
});

test.describe("founder thank-you calendar", () => {
  test("shows the booking calendar after every completed founder form", async ({
    page,
  }, testInfo) => {
    await mockOutbound(page);
    await page.goto("/contact/founder?resetProgress=1");

    await page.getByRole("radio", { name: "GovTech" }).click();
    await page.getByRole("radio", { name: "$3M - $10M" }).click();

    await expect(
      page.getByRole("heading", { name: "First, how do we reach you?" }),
    ).toBeVisible();
    await page.getByLabel("First name").fill("Maya");
    await page.getByLabel("Last name").fill("Chen");
    await page.getByLabel("Email").fill("maya@harborcompliance.com");
    await page.getByLabel("Company").fill("Harbor Compliance");
    await page.getByRole("button", { name: "Continue" }).click();

    await page
      .getByRole("radio", { name: "Profitable on a net income basis" })
      .click();
    await page
      .getByRole("radio", { name: "Growth: sales and marketing" })
      .click();
    await page.getByRole("radio", { name: "$1M - $3M" }).click();

    await expect(
      page.getByRole("heading", { name: "A couple of optional details" }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Continue" }).click();

    await page.getByRole("radio", { name: "Immediate need" }).click();

    await expect(
      page.getByRole("heading", { name: "Thanks, Maya." }),
    ).toBeVisible();
    await expect(page.getByText(/find a time to talk/)).toBeVisible();
    await expect(
      page.getByTitle("Schedule a meeting with Lambda Capital"),
    ).toBeVisible();

    await page.screenshot({
      path: path.join(
        ARTIFACT_DIR,
        `founder-calendar-${testInfo.project.name}.png`,
      ),
      fullPage: true,
    });
  });
});
