#!/usr/bin/env node
/**
 * Apply pending migrations. Runs automatically on every app start.
 *
 * Wired into the `start` script rather than a Railway-specific setting,
 * so the database is set up by the act of running the app — no dashboard
 * configuration to remember, and it behaves the same on any host.
 *
 * ── Why not `drizzle-kit migrate` from a laptop ─────────────────────
 *
 * Railway's database lives on a private network: `postgres.railway
 * .internal` does not resolve anywhere else. Migrating from a developer
 * machine would mean exposing the database through a public TCP proxy —
 * opening the system of record to the internet so a human can run a
 * command by hand, which is both a standing security cost and a step
 * somebody eventually forgets.
 *
 * Running here instead means the schema is applied by the deployment
 * that needs it, from inside the private network, every time, with no
 * human in the loop.
 *
 * ── Why the programmatic migrator, not the CLI ──────────────────────
 *
 * `drizzle-kit` is a devDependency, and production installs prune those.
 * `drizzle-orm/node-postgres/migrator` ships in the runtime dependency
 * we already have, so this works against a pruned install.
 *
 * Idempotent: Drizzle records applied migrations in a metadata table and
 * skips them, so running this on every deploy is safe and cheap.
 *
 * ── Why this no longer stops the server ─────────────────────────────
 *
 * It used to exit non-zero on failure, so `start` short-circuited and
 * the server never booted. The reasoning was that a server which errors
 * on every submission is worse than one that refuses to start.
 *
 * In practice that traded a degraded site for no site at all: one
 * unresolved environment variable returned 502 on every route, and the
 * only clue was in deploy logs nobody thinks to open when the whole
 * domain is down.
 *
 * It also contradicted the rest of the app. `src/lib/db/index.ts`
 * returns null rather than throwing on a missing DATABASE_URL, and
 * `deliverLead` logs loudly and still shows the user their thank-you
 * screen when the write fails. Both choose "degrade and shout" over
 * "fall over". This now does the same: a failure here means leads are
 * emailed but not stored, with `LEAD NOT PERSISTED` in the logs for
 * every one — noisy and recoverable, rather than silent and fatal.
 *
 * Set MIGRATE_STRICT=1 to restore the old fail-fast behaviour.
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";

const STRICT = process.env.MIGRATE_STRICT === "1";

/**
 * Report a fatal-looking problem, then decide whether it is fatal.
 *
 * Always exits — 1 under MIGRATE_STRICT so a deploy visibly fails, 0
 * otherwise so the server still comes up.
 */
function halt(message) {
  console.error(message);

  if (STRICT) {
    console.error("\n[migrate] MIGRATE_STRICT=1 — refusing to start.");
    process.exit(1);
  }

  console.error(
    "\n[migrate] Starting the server anyway. The funnel will load and\n" +
      "          leads will still be emailed, but they will NOT be\n" +
      "          stored until this is fixed. Watch for LEAD NOT\n" +
      "          PERSISTED in the logs.\n" +
      "          Set MIGRATE_STRICT=1 to make this fatal instead.",
  );
  process.exit(0);
}

const url = process.env.DATABASE_URL;

if (!url) {
  halt(
    "[migrate] DATABASE_URL is not set. On Railway, add it to the app\n" +
      "          service as a reference: ${{Postgres.DATABASE_URL}}",
  );
}

/**
 * Catch an unresolved Railway placeholder before handing it to pg.
 *
 * Railway variable references are scoped to the service they are read
 * from. Copying the Postgres service's own definition —
 * `postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@...` — onto the app
 * service leaves those names undefined there, so the literal `${{...}}`
 * text survives into the connection string.
 *
 * Without this check the failure surfaces as `getaddrinfo ENOTFOUND
 * ${{RAILWAY_PRIVATE_DOMAIN}}`, which reads like a DNS problem and
 * sends people looking in entirely the wrong place.
 */
if (url.includes("${{")) {
  halt(
    "[migrate] DATABASE_URL still contains an unresolved Railway\n" +
      "          placeholder, so it is not a real connection string:\n" +
      `          ${url.replace(/:[^:@]*@/, ":****@")}\n\n` +
      "          Those ${{...}} names only resolve inside the Postgres\n" +
      "          service itself. From the app service, reference the\n" +
      "          whole variable by service name instead. Set\n" +
      "          DATABASE_URL to exactly:\n\n" +
      "              ${{Postgres.DATABASE_URL}}\n\n" +
      "          (replace `Postgres` with your database service's name)",
  );
}

const pool = new pg.Pool({ connectionString: url, max: 1 });

let failure = null;

try {
  console.log("[migrate] applying pending migrations…");
  await migrate(drizzle(pool), { migrationsFolder: "./src/lib/db/migrations" });
  console.log("[migrate] up to date");
} catch (error) {
  failure = error instanceof Error ? error.message : String(error);
} finally {
  // Closed before halt() so the process is not holding a socket open
  // when it exits — halt() calls process.exit, which skips `finally`.
  await pool.end();
}

if (failure) {
  halt(`[migrate] FAILED: ${failure}`);
}
