/**
 * Build-time export of markdown pages and BM25 search index.
 * Run before `next build` (see package.json).
 */
import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ALL_POSTS, getHeadingsForSlug, postCanonical } from "../src/lib/blog/posts";
import { BlogPostBody } from "../src/lib/blog/post-body";
import { htmlToMarkdown } from "../src/lib/agent/html-to-markdown";
import {
  aboutMarkdown,
  contactMarkdown,
  homeMarkdown,
  teamMarkdown,
  whatWeFundMarkdown,
} from "../src/lib/agent/site-copy";
import { SITE_ORIGIN } from "../src/lib/agent/constants";
import { buildDocument } from "../src/lib/agent/document";
import type { AgentSearchIndex } from "../src/lib/agent/search-index-edge";

const OUT_DIR = path.join(process.cwd(), "src/generated/agent/markdown");
const INDEX_FILE = path.join(process.cwd(), "src/generated/agent/search-index.json");

function writePage(filename: string, markdown: string): void {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, filename), `${markdown.trim()}\n`, "utf8");
}

function blogPostMarkdown(slug: string): string | null {
  const post = ALL_POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  const headings = getHeadingsForSlug(slug);
  const html = renderToStaticMarkup(createElement(BlogPostBody, { slug }));
  const bodyMd = htmlToMarkdown(html);

  const lines = [
    `# ${post.h1}`,
    "",
  post.description,
    "",
    `URL: ${postCanonical(slug)}`,
    `Category: ${post.category}`,
    `Published: ${post.date}`,
    "",
  ];

  if (headings.length) {
    lines.push("## Sections", "");
    for (const h of headings) {
      lines.push(`- ${h.text}`);
    }
    lines.push("");
  }

  lines.push(bodyMd);
  return lines.join("\n").trim();
}

function blogIndexMarkdown(): string {
  const lines = [
    "# Lambda Capital Blog",
    "",
    "Notes on growth capital for vertical software companies.",
    "",
    "## Posts",
    "",
    ...ALL_POSTS.map(
      (p) =>
        `- [${p.metaTitle}](${SITE_ORIGIN}/blog/${p.slug}) (${p.date}): ${p.description}`,
    ),
  ];
  return lines.join("\n").trim();
}

function main(): void {
  fs.mkdirSync(path.dirname(INDEX_FILE), { recursive: true });

  const pages: { file: string; path: string; title: string; md: string }[] = [
    { file: "index.md", path: "/", title: "Lambda Capital", md: homeMarkdown() },
    { file: "about.md", path: "/about", title: "About Lambda Capital", md: aboutMarkdown() },
    {
      file: "what-we-fund.md",
      path: "/what-we-fund",
      title: "What we fund",
      md: whatWeFundMarkdown(),
    },
    { file: "team.md", path: "/team", title: "Team", md: teamMarkdown() },
    { file: "contact.md", path: "/contact", title: "Contact", md: contactMarkdown() },
    { file: "blog.md", path: "/blog", title: "Blog", md: blogIndexMarkdown() },
  ];

  for (const p of pages) writePage(p.file, p.md);

  for (const post of ALL_POSTS) {
    const md = blogPostMarkdown(post.slug);
    if (!md) continue;
    writePage(`blog__${post.slug}.md`, md);
    pages.push({
      file: `blog__${post.slug}.md`,
      path: `/blog/${post.slug}`,
      title: post.metaTitle,
      md,
    });
  }

  const documents = pages.map((p) =>
    buildDocument(p.path, p.title, `${SITE_ORIGIN}${p.path === "/" ? "" : p.path}`, p.md),
  );

  const index: AgentSearchIndex = {
    generatedAt: new Date().toISOString(),
    documents,
  };

  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2), "utf8");
  console.log(
    `Agent index: ${documents.length} documents -> ${INDEX_FILE}`,
  );
}

main();