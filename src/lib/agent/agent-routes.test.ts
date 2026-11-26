import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { renderLlmsTxt } from "@/lib/agent/llms";
import {
  indexFilePath,
  readMarkdownForPath,
  searchSite,
} from "@/lib/agent/search-index";

describe("agent artifacts", () => {
  it("search index exists after prebuild", () => {
    expect(fs.existsSync(indexFilePath())).toBe(true);
  });

  it("llms.txt references search and markdown", () => {
    const txt = renderLlmsTxt();
    expect(txt).toContain("/.well-known/search");
    expect(txt).toContain(".md");
    expect(txt).not.toContain("\u2014");
  });

  it("serves key markdown paths", () => {
    expect(readMarkdownForPath("/")).toBeTruthy();
    expect(readMarkdownForPath("/about")).toMatch(/Profitable Businesses/i);
    expect(readMarkdownForPath("/what-we-fund")).toMatch(/permanent capital holding company/i);
    expect(readMarkdownForPath("/blog")).toMatch(/Blog/);
  });

  it("search returns relevant site hits", () => {
    const growth = searchSite("growth capital for bootstrapped software", 3);
    expect(growth.length).toBeGreaterThan(0);
    expect(growth[0].url).toMatch(/lambdavp\.com/);

    const gov = searchSite("government contract funding", 3);
    expect(gov.length).toBeGreaterThan(0);

    const perm = searchSite("permanent capital holding company", 3);
    expect(perm.length).toBeGreaterThan(0);
    expect(perm.some((h) => h.title.toLowerCase().includes("fund") || h.snippet.toLowerCase().includes("permanent"))).toBe(
      true,
    );
  });

  it("blog markdown files exist for each indexed slug", () => {
    const raw = fs.readFileSync(indexFilePath(), "utf8");
    const index = JSON.parse(raw) as { documents: { url: string }[] };
    const blogDocs = index.documents.filter((d) => d.url.includes("/blog/"));
    expect(blogDocs.length).toBeGreaterThan(10);
    for (const doc of blogDocs.slice(0, 3)) {
      const slug = doc.url.split("/blog/")[1];
      const file = path.join(
        process.cwd(),
        "src/generated/agent/markdown",
        `blog__${slug}.md`,
      );
      expect(fs.existsSync(file)).toBe(true);
    }
  });
});