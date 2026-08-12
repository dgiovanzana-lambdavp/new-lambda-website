import "server-only";

import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

export * from "./schema";

/**
 * The single database client.
 *
 * Deliberately one exported accessor rather than a client created per
 * call site: the deferred Payload admin is meant to adopt this same
 * connection, and a second client would mean a second connection pool
 * against the same database.
 *
 * ── Why a pooled TCP connection, not a serverless HTTP driver ───────
 *
 * This ran on Neon's HTTP driver while the target was Netlify, whose
 * functions are short-lived and created per request — a model where a
 * conventional connection pool exhausts the server's connection limit
 * under modest traffic.
 *
 * Railway runs a long-lived container instead, so the process outlives
 * any single request and a pool is exactly right: connections are
 * opened once and reused, rather than renegotiated per query. The
 * serverless driver's advantage does not apply here, and it costs an
 * HTTP round trip per statement.
 *
 * If this ever moves to a serverless host, revisit this file — a plain
 * pool there needs a pooler (PgBouncer or equivalent) in front of it.
 */

/**
 * Cached on globalThis, not module scope.
 *
 * Next.js dev reloads this module on every edit. With a plain
 * module-level variable each reload would construct a fresh Pool while
 * the previous one kept its sockets open, and a morning of editing ends
 * with the database refusing connections. The global survives reloads,
 * so there is only ever one pool.
 */
const globalForDb = globalThis as unknown as {
  __lambdaPool?: Pool;
  __lambdaDb?: NodePgDatabase<typeof schema>;
};

/**
 * Returns the client, or `null` when DATABASE_URL is not configured.
 *
 * Null rather than a thrown error, deliberately. The rest of the funnel
 * — validation, scoring, email, the user's thank-you screen — should
 * still work with the missing write logged loudly. Throwing here would
 * take the whole form down over a configuration gap, which is a worse
 * failure than a missing row.
 */
export function getDb(): NodePgDatabase<typeof schema> | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;

  if (!globalForDb.__lambdaDb) {
    globalForDb.__lambdaPool ??= new Pool({
      connectionString: url,
      // Modest: this funnel is low volume by design, and a large pool
      // on a small Postgres plan just moves the contention.
      max: 10,
      idleTimeoutMillis: 30_000,
      // Fail fast rather than hanging a submission for the default
      // 30 seconds if the database is unreachable.
      connectionTimeoutMillis: 10_000,
      /**
       * SSL comes from the connection string, not from code.
       *
       * Railway's internal host (`postgres.railway.internal`) is on a
       * private network and needs none; the public proxy accepts
       * `?sslmode=require`. Hardcoding `ssl: { rejectUnauthorized:
       * false }` — the usual copy-paste fix — would silently disable
       * certificate verification everywhere, including in production.
       */
    });

    globalForDb.__lambdaDb = drizzle(globalForDb.__lambdaPool, { schema });
  }

  return globalForDb.__lambdaDb;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
