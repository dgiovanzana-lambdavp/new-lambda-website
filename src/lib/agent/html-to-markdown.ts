/**
 * Lightweight HTML-to-markdown for blog bodies rendered from React.
 * Not a full HTML parser; tuned for our blog-prose markup.
 */

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function innerUntil(
  html: string,
  start: number,
  tag: string,
): { content: string; end: number } | null {
  const open = `<${tag}`;
  const close = `</${tag}>`;
  let depth = 0;
  let i = start;
  while (i < html.length) {
    const nextOpen = html.indexOf(open, i);
    const nextClose = html.indexOf(close, i);
    if (nextClose === -1) return null;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + open.length;
      continue;
    }
    if (depth === 0) {
      return {
        content: html.slice(start, nextClose),
        end: nextClose + close.length,
      };
    }
    depth -= 1;
    i = nextClose + close.length;
  }
  return null;
}

function convertLinks(fragment: string): string {
  return fragment.replace(
    /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_m, href: string, inner: string) => {
      const text = decodeEntities(stripTags(inner));
      return `[${text}](${href})`;
    },
  );
}

function convertHeadings(fragment: string): string {
  return fragment.replace(
    /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi,
    (_m, level: string, inner: string) => {
      const hashes = "#".repeat(Number(level));
      const text = decodeEntities(stripTags(inner));
      return `\n\n${hashes} ${text}\n\n`;
    },
  );
}

function convertParagraphs(fragment: string): string {
  return fragment.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_m, inner: string) => {
    const text = decodeEntities(stripTags(convertLinks(inner)));
    if (!text) return "";
    return `\n\n${text}\n\n`;
  });
}

function convertLists(fragment: string): string {
  return fragment.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_m, inner: string) => {
    const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(
      (match) => `- ${decodeEntities(stripTags(convertLinks(match[1])))}`,
    );
    return items.length ? `\n\n${items.join("\n")}\n\n` : "";
  });
}

function convertTables(fragment: string): string {
  return fragment.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_m, inner) => {
    const rows = [...inner.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    const lines: string[] = [];
    for (const row of rows) {
      const cells = [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(
        (cell) => decodeEntities(stripTags(convertLinks(cell[1]))),
      );
      if (cells.length) lines.push(`| ${cells.join(" | ")} |`);
    }
    if (lines.length >= 2) {
      const sep = `| ${lines[0]
        .slice(2, -2)
        .split("|")
        .map(() => "---")
        .join(" | ")} |`;
      return `\n\n${[lines[0], sep, ...lines.slice(1)].join("\n")}\n\n`;
    }
    return lines.length ? `\n\n${lines.join("\n")}\n\n` : "";
  });
}

function removeResidualTags(s: string): string {
  return s
    .replace(/<div[^>]*>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function htmlToMarkdown(html: string): string {
  let out = html;
  out = convertTables(out);
  out = convertHeadings(out);
  out = convertLists(out);
  out = convertParagraphs(out);
  out = convertLinks(out);
  out = removeResidualTags(out);
  return out.replace(/\n{3,}/g, "\n\n").trim();
}