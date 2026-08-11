import "server-only";

import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export * from "./schema";

/**
 * The single database client.
 *
 * Deliberately one exported accessor rather than a client created per
 * call site: the deferred Payload admin is meant to adopt this same
 * connection, and a second client would mean a second connection pool
 * against the same Neon branch.
 *
 * ── Why the Neon HTTP driver ───────────────────────────────────────
 *
 * `@neondatabase/serverless` speaks Postgres over HTTP rather than a
 * long-lived TCP socket. Netlify functions are short-lived and
 * per-request; a conventional pg driver assumes a connection pool that
 * outlives the request, and in a serverless runtime it exhausts the
 * connection limit under quite modest traffic.
 */

let cached: NeonHttpDatabase<typeof schema> | null = null;

/**
 * Returns the client, or `null` when DATABASE_URL is not configured.
 *
 * Null rather than a thrown error, deliberately. Until Neon exists the
 * rest of the funnel — validation, scoring, email, the user's
 * thank-you screen — should still work, with the missing write logged
 * loudly. Throwing here would take the whole form down over a
 * configuration gap, which is a worse failure than a missing row.
 */
export function getDb(): NeonHttpDatabase<typeof schema> | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;

  if (!cached) {
    cached = drizzle(neon(url), { schema });
  }
  return cached;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
