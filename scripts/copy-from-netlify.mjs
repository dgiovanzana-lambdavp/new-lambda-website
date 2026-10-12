#!/usr/bin/env node
/**
 * One-off row copy: SOURCE_DATABASE_URL → DATABASE_URL.
 *
 * Intended to run inside Railway (or locally) to resync every table
 * from the read-only Netlify / source Postgres into the Railway target.
 *
 * - Upserts by primary key so a second run is a no-op resync.
 * - Prints per-table source and target row counts after each table.
 * - json/jsonb values are JSON.stringify'd before bind (see pg-json-bind.mjs).
 *
 * Usage:
 *   SOURCE_DATABASE_URL=… DATABASE_URL=… node scripts/copy-from-netlify.mjs
 */

import pg from "pg";
import { prepareBoundValues } from "./pg-json-bind.mjs";

function requireUrl(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`[copy] ${name} is not set.`);
    process.exit(1);
  }
  if (value.includes("${{")) {
    console.error(
      `[copy] ${name} still contains an unresolved Railway placeholder.`,
    );
    process.exit(1);
  }
  return value;
}

const sourceUrl = requireUrl("SOURCE_DATABASE_URL");
const targetUrl = requireUrl("DATABASE_URL");

const source = new pg.Client({ connectionString: sourceUrl });
const target = new pg.Client({ connectionString: targetUrl });

await source.connect();
await target.connect();

/**
 * User tables in the public schema, excluding Drizzle's migration book.
 * Ordered so a future FK dependency can be filled by hand later if needed;
 * today only `leads` exists.
 */
const { rows: tables } = await source.query(`
  SELECT c.relname AS table_name
  FROM pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
  WHERE n.nspname = 'public'
    AND c.relkind = 'r'
    AND c.relname NOT IN ('__drizzle_migrations')
  ORDER BY c.relname
`);

if (tables.length === 0) {
  console.log("[copy] No public tables found on the source.");
  await source.end();
  await target.end();
  process.exit(0);
}

console.log(`[copy] Copying ${tables.length} table(s)…`);

for (const { table_name: table } of tables) {
  const {
    rows: [{ count: sourceCount }],
  } = await source.query(`SELECT COUNT(*)::int AS count FROM ${quoteIdent(table)}`);

  const { rows: pkRows } = await source.query(
    `
    SELECT a.attname AS column_name
    FROM pg_index i
    JOIN pg_attribute a
      ON a.attrelid = i.indrelid
     AND a.attnum = ANY (i.indkey)
    WHERE i.indrelid = $1::regclass
      AND i.indisprimary
    ORDER BY array_position(i.indkey, a.attnum)
    `,
    [table],
  );

  if (pkRows.length === 0) {
    console.error(`[copy] ${table}: no primary key — refusing to copy.`);
    await source.end();
    await target.end();
    process.exit(1);
  }

  const pkColumns = pkRows.map((r) => r.column_name);

  const { rows: colRows } = await source.query(
    `
    SELECT column_name, data_type
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = $1
    ORDER BY ordinal_position
    `,
    [table],
  );
  const columns = colRows.map((r) => r.column_name);
  /** @type {Record<string, string>} */
  const columnTypes = Object.fromEntries(
    colRows.map((r) => [r.column_name, r.data_type]),
  );

  const { rows } = await source.query(
    `SELECT ${columns.map(quoteIdent).join(", ")} FROM ${quoteIdent(table)}`,
  );

  // Ensure the target has the table (migration should already have run).
  const {
    rows: [{ exists }],
  } = await target.query(
    `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = $1
    ) AS exists
    `,
    [table],
  );
  if (!exists) {
    console.error(
      `[copy] ${table}: missing on target. Run migrations first (npm start / db:migrate).`,
    );
    await source.end();
    await target.end();
    process.exit(1);
  }

  if (rows.length > 0) {
    const colList = columns.map(quoteIdent).join(", ");
    const placeholders = columns.map((_, i) => `$${i + 1}`).join(", ");
    const conflict = pkColumns.map(quoteIdent).join(", ");
    const updates = columns
      .filter((c) => !pkColumns.includes(c))
      .map((c) => `${quoteIdent(c)} = EXCLUDED.${quoteIdent(c)}`)
      .join(", ");

    const sql =
      updates.length > 0
        ? `INSERT INTO ${quoteIdent(table)} (${colList})
           VALUES (${placeholders})
           ON CONFLICT (${conflict}) DO UPDATE SET ${updates}`
        : `INSERT INTO ${quoteIdent(table)} (${colList})
           VALUES (${placeholders})
           ON CONFLICT (${conflict}) DO NOTHING`;

    await target.query("BEGIN");
    try {
      for (const row of rows) {
        await target.query(sql, prepareBoundValues(row, columns, columnTypes));
      }
      await target.query("COMMIT");
    } catch (error) {
      await target.query("ROLLBACK");
      throw error;
    }
  }

  const {
    rows: [{ count: targetCount }],
  } = await target.query(`SELECT COUNT(*)::int AS count FROM ${quoteIdent(table)}`);

  console.log(
    `[copy] ${table}: source=${sourceCount} target=${targetCount}` +
      (sourceCount === targetCount ? " ✓" : " ✗ COUNT MISMATCH"),
  );
}

await source.end();
await target.end();
console.log("[copy] done");

function quoteIdent(name) {
  return `"${String(name).replace(/"/g, '""')}"`;
}
