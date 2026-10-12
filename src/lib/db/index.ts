import "server-only";

import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

function resolveDatabaseUrl(): string | undefined {
  return process.env.DATABASE_URL;
}

export * from "./schema";

/**
 * The single database client.
 *
 * Deliberately one exported accessor rather than a client created per
 * call site: the deferred Payload admin is meant to adopt this same
 * connection, and a second client would mean a second connection pool
 * against the same database.
 *
 * Sized for a long-lived Railway container. Requests arrive nowhere
 * near close enough together to queue behind two connections. If volume
 * ever climbs enough to make that uncomfortable, the answer is
 * PgBouncer in front of Postgres — not a bigger number here.
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
  const url = resolveDatabaseUrl();
  if (!url) return null;

  if (!globalForDb.__lambdaDb) {
    globalForDb.__lambdaPool ??= new Pool({
      connectionString: url,
      max: 2,
      idleTimeoutMillis: 10_000,
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
  return Boolean(resolveDatabaseUrl());
}
