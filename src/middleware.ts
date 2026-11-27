import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AGENT_SEARCH_PATH, SITE_ORIGIN } from "@/lib/agent/constants";
import {
  parseSearchQueryFromBody,
  searchResponse,
} from "@/lib/agent/search-http";

const MARKDOWN_INTERNAL = "/api/agent/markdown";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|mp4|webm|woff2?|css|js|map)).*)",
  ],
};

function wantsMarkdown(request: NextRequest): boolean {
  const accept = request.headers.get("accept") ?? "";
  if (!accept.includes("text/markdown")) return false;
  if (!accept.includes("text/html")) return true;
  const md = accept.match(/text\/markdown(?:;\s*q=([\d.]+))?/);
  const html = accept.match(/text\/html(?:;\s*q=([\d.]+))?/);
  const mq = md ? Number.parseFloat(md[1] ?? "1") : 0;
  const hq = html ? Number.parseFloat(html[1] ?? "1") : 0;
  return mq >= hq;
}

function rewriteMarkdown(request: NextRequest, pagePath: string) {
  const url = request.nextUrl.clone();
  url.pathname = MARKDOWN_INTERNAL;
  url.searchParams.set("path", pagePath);
  return NextResponse.rewrite(url);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.method === "QUERY" && pathname === AGENT_SEARCH_PATH) {
    const raw = await request.text();
    const query = parseSearchQueryFromBody(
      request.headers.get("content-type") ?? "",
      raw,
    );
    const accept = request.headers.get("accept") ?? "";
    const res = searchResponse(query, accept);
    return new NextResponse(res.body, {
      status: res.status,
      headers: { "Content-Type": res.contentType },
    });
  }

  if (pathname.startsWith("/api/") || pathname.startsWith("/.well-known/")) {
    return NextResponse.next();
  }

  if (pathname.endsWith(".md")) {
    const stripped = pathname.slice(0, -3);
    const pagePath = stripped === "" || stripped === "/index" ? "/" : stripped;
    return rewriteMarkdown(request, pagePath);
  }

  if (wantsMarkdown(request)) {
    return rewriteMarkdown(request, pathname === "" ? "/" : pathname);
  }

  const response = NextResponse.next();
  if (!pathname.startsWith("/api")) {
    response.headers.append(
      "Link",
      `<${SITE_ORIGIN}${AGENT_SEARCH_PATH}>; rel="search"`,
    );
    response.headers.append("Link", `<${SITE_ORIGIN}/llms.txt>; rel="help"`);
  }
  return response;
}