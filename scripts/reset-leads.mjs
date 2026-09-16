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

import { connect } from "./db-connect.mjs";

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

const client = await connect();
try {
  const { rowCount } = await client.query("DELETE FROM leads");
  console.log(`deleted ${rowCount} row(s)`);
} finally {
  await client.end();
}
