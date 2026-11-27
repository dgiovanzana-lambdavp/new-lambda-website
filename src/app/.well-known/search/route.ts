import { NextResponse } from "next/server";
import {
  parseSearchQueryFromBody,
  searchResponse,
} from "@/lib/agent/search-http";

function parseQueryFromGet(url: URL): string {
  return (url.searchParams.get("q") ?? "").trim();
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const accept = request.headers.get("accept") ?? "";
  const res = searchResponse(parseQueryFromGet(url), accept);
  return new NextResponse(res.body, {
    status: res.status,
    headers: { "Content-Type": res.contentType },
  });
}

export async function QUERY(request: Request) {
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

export async function POST(request: Request) {
  const url = new URL(request.url);
  const fromQuery = parseQueryFromGet(url);
  const raw = await request.text();
  const query =
    fromQuery ||
    parseSearchQueryFromBody(request.headers.get("content-type") ?? "", raw);
  const accept = request.headers.get("accept") ?? "";
  const res = searchResponse(query, accept);
  return new NextResponse(res.body, {
    status: res.status,
    headers: { "Content-Type": res.contentType },
  });
}