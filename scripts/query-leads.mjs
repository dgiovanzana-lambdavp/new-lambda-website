#!/usr/bin/env node
/**
 * Inspect the leads table from the command line.
 *
 *   node scripts/query-leads.mjs            → recent leads
 *   node scripts/query-leads.mjs attribution → bookings by utm_source
 *
 * The `attribution` mode runs THE query this whole rebuild exists to
 * make answerable. If it ever stops being a single statement, something
 * has gone wrong with the schema.
 */

import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";

// Minimal .env.local loader — this is a dev utility and not worth a
// dependency. Next.js loads .env.local itself for the app.
function loadEnv() {
  try {
    for (const line of readFileSync(".env.local", "utf8").split("\n")) {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
    }
  } catch {
    // fall through to whatever is already in the environment
  }
}

loadEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not set (looked in .env.local and the environment)");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const mode = process.argv[2] ?? "recent";

if (mode === "attribution") {
  // ── The deliverable ────────────────────────────────────────────────
  // Bookings by traffic source: which post, video, or newsletter issue
  // produced an actual meeting. One statement, no reconciliation.
  const rows = await sql`
    SELECT
      COALESCE(utm_source, '(direct)') AS source,
      COALESCE(utm_campaign, '—')      AS campaign,
      COUNT(*)                          AS leads,
      COUNT(*) FILTER (WHERE tier = 'A')          AS tier_a,
      COUNT(*) FILTER (WHERE booked_at IS NOT NULL) AS booked
    FROM leads
    WHERE is_partial = false
    GROUP BY 1, 2
    ORDER BY booked DESC, leads DESC
  `;
  console.table(rows);
} else {
  const rows = await sql`
    SELECT
      created_at, persona, is_partial, first_name, last_name, email, company,
      tier, outcome, failed_gates, score_version,
      utm_source, utm_campaign, heard_about_us,
      booking_id, booked_at, session_id
    FROM leads
    ORDER BY created_at DESC
    LIMIT 20
  `;
  console.log(`\n${rows.length} row(s):\n`);
  for (const r of rows) {
    console.log(JSON.stringify(r, null, 2));
    console.log("─".repeat(60));
  }
}
