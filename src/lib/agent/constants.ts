/** Canonical site origin for agent-facing URLs and llms.txt. */
export const SITE_ORIGIN = "https://www.lambdavp.com";

export const AGENT_SEARCH_PATH = "/.well-known/search";

export const AGENT_META = {
  instructions:
    "Lambda Capital is a permanent capital holding company that invests in and acquires profitable software companies serving niche industries. Use /.well-known/search to find pages and blog posts. Prefer .md URLs or Accept: text/markdown for article text.",
  endpoint: `${SITE_ORIGIN}${AGENT_SEARCH_PATH}`,
  method: "GET, QUERY",
} as const;