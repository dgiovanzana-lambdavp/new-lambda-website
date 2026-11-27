import { NextResponse } from "next/server";
import {
  canonicalUrlForPath,
  normalizeAgentPath,
  readMarkdownForPath,
} from "@/lib/agent/search-index";

export const dynamic = "force-static";

function pathFromBlogSlug(path: string): string {
  const m = path.match(/^\/blog\/([^/]+)$/);
  if (m) return `/blog/${m[1]}`;
  return path;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const raw = url.searchParams.get("path") ?? "/";
  let pagePath = normalizeAgentPath(raw);
  pagePath = pathFromBlogSlug(pagePath);

  if (pagePath === "/index") pagePath = "/";

  const body = readMarkdownForPath(pagePath);
  if (!body) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const canonical = canonicalUrlForPath(pagePath);
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    "Content-Disposition": "inline",
    Link: `<${canonical}>; rel="canonical"`,
  });

  return new NextResponse(body, { status: 200, headers });
}