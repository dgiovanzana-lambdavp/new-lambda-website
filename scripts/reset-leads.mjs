#!/usr/bin/env node
/**
 * Delete every row in `leads`. Development fixtures only.
 *
 *   node scripts/reset-leads.mjs --yes
 *
 * Guarded twice on purpose. A script whose whole job is "delete the
 * table that is the system of record" is a footgun, and the leads it
 * would destroy are the one artifact in this build that cannot be
 * reconstructed from anywhere else.
 */

import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";

if (process.env.NODE_ENV === "production") {
  console.error("Refusing to run with NODE_ENV=production.");
  process.exit(1);
}

if (!process.argv.includes("--yes")) {
  console.error(
    "This deletes EVERY row in `leads`. Re-run with --yes if you mean it.",
  );
  process.exit(1);
}

function loadEnv() {
  try {
    for (const line of readFileSync(".env.local", "utf8").split("\n")) {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
    }
  } catch {
    // fall through to the ambient environment
  }
}

loadEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const rows = await sql`DELETE FROM leads RETURNING session_id`;
console.log(`deleted ${rows.length} row(s)`);
