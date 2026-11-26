import { searchSite } from "@/lib/agent/search-index-edge";

export type SearchHit = {
  title: string;
  url: string;
  snippet: string;
  score: number;
};

export function parseSearchQueryFromBody(
  contentType: string,
  raw: string,
): string {
  if (!raw.trim()) return "";
  if (contentType.includes("application/json")) {
    try {
      const data = JSON.parse(raw) as { q?: string };
      return (data.q ?? "").trim();
    } catch {
      return "";
    }
  }
  return raw.trim();
}

export function searchHitsToMarkdown(results: SearchHit[]): string {
  const lines = results.length
    ? results.flatMap((r) => [
        `## ${r.title}`,
        `URL: ${r.url}`,
        `Score: ${r.score}`,
        "",
        r.snippet,
        "",
        "---",
        "",
      ])
    : ["No results.", ""];

  return `${lines.join("\n").trim()}\n`;
}

export function runSearch(query: string, limit = 15): SearchHit[] {
  return searchSite(query, limit);
}

export function searchResponse(
  query: string,
  accept: string,
): { status: number; body: string; contentType: string } {
  if (!query) {
    return {
      status: 400,
      body: JSON.stringify({
        error: "missing_query",
        hint: 'Use ?q=... or JSON {"q":"..."}',
      }),
      contentType: "application/json",
    };
  }

  const results = runSearch(query);
  if (accept.includes("application/json")) {
    return {
      status: 200,
      body: JSON.stringify({ q: query, results }),
      contentType: "application/json",
    };
  }

  return {
    status: 200,
    body: searchHitsToMarkdown(results),
    contentType: "text/markdown; charset=utf-8",
  };
}