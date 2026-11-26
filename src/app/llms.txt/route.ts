import { NextResponse } from "next/server";
import { renderLlmsTxt } from "@/lib/agent/llms";

export const dynamic = "force-static";

export async function GET() {
  return new NextResponse(renderLlmsTxt(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}