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
 * ── A pooled TCP connection, sized for two very different hosts ─────
 *
 * This file used to say a plain pool would need a pooler in front of
 * it on a serverless host. Production is now exactly that: Netlify
 * functions, while staging stays on Railway's long-lived container.
 * The resolution is not a second driver, it is a smaller pool.
 *
 * The danger on serverless was never pooling itself. It is that every
 * concurrently-live function instance holds its OWN pool, so the real
 * connection count is `max` multiplied by however many instances are
 * warm — which is what exhausts a database's connection limit. With
 * `max` at 2 the arithmetic stops being frightening: it takes fifty
 * simultaneously-warm instances to reach a hundred connections, and
 * this funnel is designed around a handful of leads a quarter.
 *
 * A small pool costs the long-lived Railway container nothing either.
 * Requests there arrive nowhere near close enough together to queue
 * behind two connections, so one setting serves both hosts and there
 * is no host-conditional branch to get wrong.
 *
 * If volume ever climbs enough to make that arithmetic uncomfortable,
 * the answer is PgBouncer in front of Postgres — not a bigger number
 * here, which makes it worse.
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
      // Small on purpose — see the note above. Every warm serverless
      // instance holds its own pool, so this number is multiplied by
      // instance count against the database's connection limit.
      max: 2,
      // Shorter than the old 30s. A serverless instance that has gone
      // idle is usually about to be frozen or discarded, and a
      // connection held open across that is a connection the database
      // counts but nothing is using.
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
  return Boolean(process.env.DATABASE_URL);
}
