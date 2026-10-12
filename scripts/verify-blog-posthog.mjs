/**
 * Local verification with a fake NEXT_PUBLIC_POSTHOG_KEY.
 * Spoofs automation signals so posthog-js does not drop events as a bot.
 */
import { chromium } from "playwright";
import zlib from "zlib";

const BASE = process.env.VERIFY_BASE || "http://localhost:3010";
const SLUG = "government-contract-financing-for-software-companies";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const bodies = [];

function decode(req) {
  const buf = req.postDataBuffer();
  // sendBeacon/"ping" requests often expose no post data in Playwright;
  // prefer fetch/XHR bodies. Fall back to postData() string when present.
  if (!buf) {
    return req.postData() || "";
  }
  try {
    return zlib.gunzipSync(buf).toString("utf8");
  } catch {
    const text = buf.toString("utf8");
    if (text.startsWith("data=")) {
      try {
        return Buffer.from(decodeURIComponent(text.slice(5)), "base64").toString(
          "utf8",
        );
      } catch {
        return text;
      }
    }
    // compression=base64 query: body may be raw base64 of gzip/json
    if (req.url().includes("compression=base64") && /^[A-Za-z0-9+/=\s]+$/.test(text.slice(0, 40))) {
      try {
        const raw = Buffer.from(text, "base64");
        try {
          return zlib.gunzipSync(raw).toString("utf8");
        } catch {
          return raw.toString("utf8");
        }
      } catch {
        return text;
      }
    }
    return text;
  }
}

function ingest(req) {
  const url = req.url();
  if (!url.includes("posthog.com")) return;
  if (!url.includes("/e/") && !url.includes("/i/v0") && !url.includes("/batch")) {
    return;
  }
  const body = decode(req);
  if (body) bodies.push(body);
}

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"],
});
const context = await browser.newContext({
  userAgent: UA,
  viewport: { width: 1280, height: 900 },
});
await context.addInitScript(() => {
  Object.defineProperty(navigator, "webdriver", { get: () => undefined });
  Object.defineProperty(navigator, "userAgentData", {
    get: () => ({
      brands: [
        { brand: "Chromium", version: "120" },
        { brand: "Google Chrome", version: "120" },
      ],
      mobile: false,
      platform: "macOS",
      getHighEntropyValues: async () => ({}),
    }),
  });
});
const page = await context.newPage();
page.on("request", ingest);

await page.goto(`${BASE}/blog`, { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

await page.goto(`${BASE}/blog/${SLUG}`, { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

await page.locator(".blog-jump__link").first().click();
await page.waitForTimeout(1200);

await page.locator(".blog-inline-cta__link").click();
await page.waitForTimeout(1200);

await page.goto(`${BASE}/blog/${SLUG}`, { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.locator(".blog-cta-band .blog-btn-white").click();
await page.waitForTimeout(1200);

await page.goto(`${BASE}/blog/${SLUG}`, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const maxScroll = await page.evaluate(
  () => document.documentElement.scrollHeight - window.innerHeight,
);
for (const pct of [0.28, 0.55, 0.8, 1.0]) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.floor(maxScroll * pct));
  await page.waitForTimeout(900);
}
await page.waitForTimeout(2500);
await page.evaluate(() => window.dispatchEvent(new Event("pagehide")));
await page.waitForTimeout(1000);

const all = bodies.join("\n");
const checks = {
  ingest_requests: bodies.length > 0,
  fake_key: all.includes("phc_fake_local_verify_key_12345"),
  pageview: all.includes('"$pageview"') || all.includes('"event":"$pageview"'),
  blog_section: all.includes('"section":"blog"'),
  post_slug: all.includes(SLUG),
  blog_cta_inline:
    all.includes('"blog_cta_click"') && all.includes('"cta":"inline"'),
  blog_cta_end_band:
    all.includes('"blog_cta_click"') && all.includes('"cta":"end_band"'),
  jump_link_click: all.includes('"jump_link_click"'),
  scroll_25:
    all.includes('"blog_scroll_depth"') && /"percent":\s*25/.test(all),
  scroll_50:
    all.includes('"blog_scroll_depth"') && /"percent":\s*50/.test(all),
  scroll_75:
    all.includes('"blog_scroll_depth"') && /"percent":\s*75/.test(all),
  scroll_100:
    all.includes('"blog_scroll_depth"') && /"percent":\s*100/.test(all),
};

const eventNames = [
  ...all.matchAll(/"event"\s*:\s*"([^"]+)"/g),
].map((m) => m[1]);
const unique = [...new Set(eventNames)];

console.log(JSON.stringify({ bodyCount: bodies.length, uniqueEvents: unique, checks }, null, 2));

const failed = Object.entries(checks).filter(([, v]) => !v);
await browser.close();
if (failed.length) {
  console.error("FAILED", failed.map(([k]) => k));
  process.exit(1);
}
console.log("ALL CHECKS PASSED");
