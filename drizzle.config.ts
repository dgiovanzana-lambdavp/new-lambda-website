import type { Config } from "drizzle-kit";

/**
 * Drizzle Kit reads the schema and emits SQL migration files.
 *
 * The migrations are plain, readable SQL checked into git — you can see
 * exactly what will run against production before it does. That is the
 * reason for using a migration generator rather than pushing schema
 * changes directly: `drizzle-kit push` is convenient in development and
 * gives you no artifact to review, revert, or replay.
 *
 *   npx drizzle-kit generate   → write a migration from schema changes
 *   npx drizzle-kit migrate    → apply pending migrations
 */
export default {
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    /**
     * Read at command time, never committed. Only `migrate` needs it —
     * `generate` works offline because it diffs the schema file, not
     * the live database.
     *
     * Running this from a laptop against Railway requires the PUBLIC
     * proxy URL; `postgres.railway.internal` resolves only inside the
     * Railway project's network.
     */
    url: process.env.DATABASE_URL ?? "",
  },
} satisfies Config;
