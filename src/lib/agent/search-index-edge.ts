import {
  searchDocuments,
  type IndexedDocument,
  type SearchHit,
} from "@/lib/agent/bm25";
import agentIndexJson from "../../generated/agent/search-index.json";

export type AgentSearchIndex = {
  generatedAt: string;
  documents: IndexedDocument[];
};

export function loadSearchIndex(): AgentSearchIndex {
  return agentIndexJson as AgentSearchIndex;
}

export function searchSite(query: string, limit = 10): SearchHit[] {
  const index = loadSearchIndex();
  return searchDocuments(index.documents, query, limit);
}