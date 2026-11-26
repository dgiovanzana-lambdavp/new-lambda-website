import { describe, expect, it } from "vitest";
import { searchDocuments } from "@/lib/agent/bm25";
import { buildDocument } from "@/lib/agent/document";

describe("searchDocuments", () => {
  const docs = [
    buildDocument(
      "a",
      "Growth capital",
      "https://example.com/a",
      "Growth capital for profitable bootstrapped B2B software companies.",
    ),
    buildDocument(
      "b",
      "Government contracts",
      "https://example.com/b",
      "Government contract funding and SLED vendors bridging award to payment.",
    ),
    buildDocument(
      "c",
      "Holding company",
      "https://example.com/c",
      "Lambda Capital is a permanent capital holding company.",
    ),
  ];

  it("ranks growth capital query", () => {
    const hits = searchDocuments(docs, "growth capital bootstrapped software");
    expect(hits[0]?.title).toBe("Growth capital");
    expect(hits[0]?.score).toBeGreaterThan(0);
  });

  it("ranks government funding query", () => {
    const hits = searchDocuments(docs, "government contract funding");
    expect(hits[0]?.title).toBe("Government contracts");
  });

  it("ranks permanent capital query", () => {
    const hits = searchDocuments(docs, "permanent capital holding company");
    expect(hits[0]?.title).toBe("Holding company");
  });
});