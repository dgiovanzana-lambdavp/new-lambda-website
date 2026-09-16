#!/usr/bin/env node
/**
 * Inspect the leads table from the command line.
 *
 *   node scripts/query-leads.mjs             → recent leads
 *   node scripts/query-leads.mjs attribution → bookings by utm_source
 *
 * The `attribution` mode runs THE query this whole rebuild exists to
 * make answerable. If it ever stops being a single statement, something
 * has gone wrong with the schema.
 */

import { connect } from "./db-connect.mjs";

const client = await connect();
const mode = process.argv[2] ?? "recent";

try {
  if (mode === "attribution") {
    // ── The deliverable ──────────────────────────────────────────────
    // Bookings by traffic source: which post, video, or newsletter
    // issue produced an actual meeting. One statement, no
    // reconciliation.
    const { rows } = await client.query(`
      SELECT
        COALESCE(utm_source, '(direct)') AS source,
        COALESCE(utm_campaign, '—')      AS campaign,
        COUNT(*)::int                     AS leads,
        COUNT(*) FILTER (WHERE tier = 'A')::int            AS tier_a,
        COUNT(*) FILTER (WHERE booked_at IS NOT NULL)::int AS booked
      FROM leads
      WHERE is_partial = false
      GROUP BY 1, 2
      ORDER BY booked DESC, leads DESC
    `);
    console.table(rows);
  } else {
    const { rows } = await client.query(`
      SELECT
        created_at, persona, is_partial, first_name, last_name, email,
        company, tier, outcome, failed_gates, score_version,
        utm_source, utm_campaign, heard_about_us,
        booking_id, booked_at, session_id
      FROM leads
      ORDER BY created_at DESC
      LIMIT 20
    `);
    console.log(`\n${rows.length} row(s):\n`);
    for (const row of rows) {
      console.log(JSON.stringify(row, null, 2));
      console.log("─".repeat(60));
    }
  }
} finally {
  await client.end();
}
