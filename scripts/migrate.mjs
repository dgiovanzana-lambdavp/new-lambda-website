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
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";

const url = process.env.DATABASE_URL;

if (!url) {
  console.error(
    "[migrate] DATABASE_URL is not set. On Railway, add it to the app\n" +
      "          service as a reference: ${{Postgres.DATABASE_URL}}",
  );
  process.exit(1);
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
  console.error(
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
  process.exit(1);
}

const pool = new pg.Pool({ connectionString: url, max: 1 });

try {
  console.log("[migrate] applying pending migrations…");
  await migrate(drizzle(pool), { migrationsFolder: "./src/lib/db/migrations" });
  console.log("[migrate] up to date");
} catch (error) {
  console.error(
    `[migrate] FAILED: ${error instanceof Error ? error.message : String(error)}`,
  );
  // Non-zero exit stops the deploy. That is deliberate: shipping code
  // that expects a table which does not exist would fail on every
  // submission instead, at the worst possible moment and less visibly.
  process.exit(1);
} finally {
  await pool.end();
}
