import { tokenize, type IndexedDocument } from "@/lib/agent/bm25";

export function buildDocument(
  id: string,
  title: string,
  url: string,
  body: string,
): IndexedDocument {
  const tokens = tokenize(`${title} ${body}`);
  return { id, title, url, body, tokens, length: tokens.length };
}