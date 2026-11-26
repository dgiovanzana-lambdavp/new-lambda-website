import fs from "node:fs";
import path from "node:path";
import { SITE_ORIGIN } from "@/lib/agent/constants";
export { buildDocument } from "@/lib/agent/document";

export type { AgentSearchIndex } from "@/lib/agent/search-index-edge";
export { loadSearchIndex, searchSite } from "@/lib/agent/search-index-edge";

const INDEX_PATH = path.join(
  process.cwd(),
  "src/generated/agent/search-index.json",
);

export function indexFilePath(): string {
  return INDEX_PATH;
}

export function normalizeAgentPath(input: string): string {
  if (!input || input === "/") return "/";
  let p = input.startsWith("/") ? input : `/${input}`;
  if (p.endsWith("/") && p.length > 1) p = p.slice(0, -1);
  return p;
}

export function markdownBodyPathForPagePath(pagePath: string): string {
  const norm = normalizeAgentPath(pagePath);
  let file: string;
  if (norm === "/") {
    file = "index.md";
  } else if (norm.startsWith("/blog/")) {
    file = `blog__${norm.slice("/blog/".length)}.md`;
  } else {
    file = `${norm.slice(1).replace(/\//g, "__")}.md`;
  }
  return path.join(process.cwd(), "src/generated/agent/markdown", file);
}

export function readMarkdownForPath(pagePath: string): string | null {
  const filePath = markdownBodyPathForPagePath(pagePath);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function canonicalUrlForPath(pagePath: string): string {
  const norm = normalizeAgentPath(pagePath);
  if (norm === "/what-we-fund") return `${SITE_ORIGIN}/what-we-fund`;
  return `${SITE_ORIGIN}${norm === "/" ? "" : norm}`;
}
