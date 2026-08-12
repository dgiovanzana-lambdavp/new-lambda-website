import { readFileSync } from "node:fs";
import pg from "pg";

/**
 * Shared connection helper for the dev scripts.
 *
 * Both query-leads and reset-leads need the same three things: load
 * .env.local, fail clearly if DATABASE_URL is missing, and hand back a
 * connected client. Extracted so a change to how we connect happens
 * once rather than in two places that quietly drift.
 */

function loadEnv() {
  try {
    for (const line of readFileSync(".env.local", "utf8").split("\n")) {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].trim();
      }
    }
  } catch {
    // Fall through to the ambient environment.
  }
}

export async function connect() {
  loadEnv();

  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error(
      "DATABASE_URL not set (looked in .env.local and the environment).",
    );
    process.exit(1);
  }

  /**
   * Note for Railway: these scripts run on your laptop, which is
   * OUTSIDE the Railway project's private network. `postgres.railway
   * .internal` is unreachable from here — use the public proxy URL
   * (DATABASE_PUBLIC_URL in Railway) in your local .env.local. The
   * deployed app keeps using the internal one.
   */
  if (url.includes(".railway.internal")) {
    console.error(
      "That is Railway's INTERNAL host, only reachable from inside the\n" +
        "Railway project. Put the public proxy URL in .env.local instead\n" +
        "(Railway shows it as DATABASE_PUBLIC_URL).",
    );
    process.exit(1);
  }

  const client = new pg.Client({ connectionString: url });
  await client.connect();
  return client;
}
