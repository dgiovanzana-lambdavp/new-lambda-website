const STOP = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "was",
  "what",
  "when",
  "with",
  "your",
]);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s/-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

export type IndexedDocument = {
  id: string;
  title: string;
  url: string;
  body: string;
  tokens: string[];
  length: number;
};

export type SearchHit = {
  title: string;
  url: string;
  snippet: string;
  score: number;
};

function buildIdf(docs: IndexedDocument[]): Map<string, number> {
  const df = new Map<string, number>();
  for (const doc of docs) {
    const seen = new Set(doc.tokens);
    for (const t of seen) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const idf = new Map<string, number>();
  const n = docs.length;
  for (const [term, freq] of df) {
    idf.set(term, Math.log(1 + (n - freq + 0.5) / (freq + 0.5)));
  }
  return idf;
}

const K1 = 1.2;
const B = 0.75;

function snippet(body: string, queryTokens: string[], max = 220): string {
  const lower = body.toLowerCase();
  let best = 0;
  for (const t of queryTokens) {
    const idx = lower.indexOf(t);
    if (idx !== -1) {
      best = idx;
      break;
    }
  }
  const start = Math.max(0, best - 40);
  const slice = body.slice(start, start + max).replace(/\s+/g, " ").trim();
  return (start > 0 ? "..." : "") + slice + (start + max < body.length ? "..." : "");
}

export function searchDocuments(
  docs: IndexedDocument[],
  query: string,
  limit = 10,
): SearchHit[] {
  const qTokens = tokenize(query);
  if (!qTokens.length || !docs.length) return [];

  const avgLen = docs.reduce((s, d) => s + d.length, 0) / docs.length;
  const idf = buildIdf(docs);
  const scores: { doc: IndexedDocument; score: number }[] = [];

  for (const doc of docs) {
    const tf = new Map<string, number>();
    for (const t of doc.tokens) tf.set(t, (tf.get(t) ?? 0) + 1);

    let score = 0;
    for (const term of qTokens) {
      const freq = tf.get(term) ?? 0;
      if (!freq) continue;
      const idfVal = idf.get(term) ?? 0;
      const denom =
        freq + K1 * (1 - B + (B * doc.length) / (avgLen || 1));
      score += idfVal * ((freq * (K1 + 1)) / denom);
    }
    if (score > 0) scores.push({ doc, score });
  }

  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, limit).map(({ doc, score }) => ({
    title: doc.title,
    url: doc.url,
    snippet: snippet(doc.body, qTokens),
    score: Math.round(score * 1000) / 1000,
  }));
}