import fs from "node:fs";
import path from "node:path";
import { AGENT_META, AGENT_SEARCH_PATH, SITE_ORIGIN } from "@/lib/agent/constants";
import { ALL_POSTS } from "@/lib/blog/posts";

const keyPages: { label: string; html: string; md: string }[] = [
  { label: "Home", html: "/", md: "/index.md" },
  { label: "About (who we are)", html: "/about", md: "/about.md" },
  {
    label: "What we fund / how it works",
    html: "/what-we-fund",
    md: "/what-we-fund.md",
  },
  { label: "Team", html: "/team", md: "/team.md" },
  { label: "Contact", html: "/contact", md: "/contact.md" },
  { label: "Blog index", html: "/blog", md: "/blog.md" },
];

export function renderLlmsTxt(): string {
  const lines = [
    "# Lambda Capital",
    "",
    "> Lambda Capital is a permanent capital holding company that invests in and acquires profitable software companies serving niche industries. Growth capital for profitable bootstrapped B2B software and GovTech/SLED contract funding are lines of business among others.",
    "",
    AGENT_META.instructions,
    "",
    `Search: ${AGENT_META.endpoint} (${AGENT_META.method})`,
    "",
    "## Key pages",
    "",
    ...keyPages.flatMap((p) => [
      `- [${p.label}](${SITE_ORIGIN}${p.html}): HTML`,
      `  - [Markdown](${SITE_ORIGIN}${p.md})`,
    ]),
    "",
    "## Blog",
    "",
    `- [Blog index](${SITE_ORIGIN}/blog.md)`,
    "",
    ...ALL_POSTS.slice(0, 12).map(
      (p) =>
        `- [${p.metaTitle}](${SITE_ORIGIN}/blog/${p.slug}.md)`,
    ),
    ALL_POSTS.length > 12
      ? `- (${ALL_POSTS.length - 12} more posts; use ${AGENT_SEARCH_PATH}?q=... or /llms-full.txt)`
      : "",
    "",
    "## Markdown",
    "",
    "Append `.md` to any key path above, or send `Accept: text/markdown` on the HTML URL.",
    "",
    "## Optional",
    "",
    `- [Full corpus](${SITE_ORIGIN}/llms-full.txt)`,
  ].filter(Boolean);

  return `${lines.join("\n")}\n`;
}

export function renderLlmsFullTxt(): string {
  const dir = path.join(process.cwd(), "src/generated/agent/markdown");
  const parts: string[] = [
    "# Lambda Capital (full text export)",
    "",
    renderLlmsTxt(),
    "",
    "---",
    "",
  ];

  if (fs.existsSync(dir)) {
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .sort();
    for (const file of files) {
      const body = fs.readFileSync(path.join(dir, file), "utf8");
      parts.push(body, "", "---", "");
    }
  }

  return parts.join("\n").trim() + "\n";
}