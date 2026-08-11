#!/usr/bin/env node
/**
 * Fails the build if anything server-only reached the client bundle.
 *
 * ── Why this is not just "grep for the thresholds" ──────────────────
 *
 * The obvious check is to grep the built output for a threshold value
 * like `1m_3m` or `net_income_positive`. That check is broken, and it
 * is worth understanding why before trusting it.
 *
 * Those exact strings are SUPPOSED to be in the client bundle. They are
 * the option values in the founder question tree — the browser renders
 * them as pills, stores the chosen one in state, and posts it back. A
 * grep for `1m_3m` would fire on every single build, everyone would
 * learn to ignore it, and the one time it mattered nobody would look.
 *
 * What must never reach the client is not the vocabulary, it's the
 * RULES: which values pass, and the logic that decides. So instead of
 * grepping for shared vocabulary, we grep for markers that exist
 * nowhere except inside the scoring module:
 *
 *   1. A sentinel constant exported by src/config/scoring.ts.
 *   2. The scoring version string.
 *   3. `failedGates`, the internal-only diagnostic field the spec says
 *      must never cross the wire.
 *
 * Any of those appearing under .next/static means a client component
 * imported the scoring module, directly or transitively.
 *
 * This is defence in depth. The primary guard is `import "server-only"`
 * at the top of the scoring modules, which makes such an import a hard
 * build error. This script catches the case where that guard was
 * removed or bypassed.
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const CLIENT_DIR = join(process.cwd(), ".next", "static");

/** Strings that must never appear in client-served JavaScript. */
const FORBIDDEN = [
  { needle: "LAMBDA_SCORING_SENTINEL", why: "scoring config module was bundled for the browser" },
  { needle: "2026-07-30.1", why: "scoring version leaked — the rules module reached the client" },
  { needle: "failedGates", why: "internal-only diagnostic field is exposed to the browser" },
];

if (!existsSync(CLIENT_DIR)) {
  console.error(`\n  ✗ ${CLIENT_DIR} not found. Run \`npm run build\` first.\n`);
  process.exit(1);
}

/** Recursively collect every JS file Next.js will serve to a browser. */
function collectJs(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectJs(full, acc);
    else if (entry.endsWith(".js")) acc.push(full);
  }
  return acc;
}

const files = collectJs(CLIENT_DIR);
const hits = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  for (const { needle, why } of FORBIDDEN) {
    if (source.includes(needle)) {
      hits.push({ file: file.replace(process.cwd(), "."), needle, why });
    }
  }
}

if (hits.length > 0) {
  console.error("\n  ✗ SCORING LEAKED INTO THE CLIENT BUNDLE\n");
  for (const h of hits) {
    console.error(`    ${h.file}`);
    console.error(`      found "${h.needle}" — ${h.why}\n`);
  }
  console.error(
    "  Lambda's investment criteria are the rules. In the browser they are\n" +
      "  readable by anyone, who can then answer their way onto the calendar.\n" +
      "  Find the client component importing the scoring module and move that\n" +
      "  work into the /api/leads route handler.\n",
  );
  process.exit(1);
}

console.log(
  `\n  ✓ No scoring leakage. Scanned ${files.length} client JS files under .next/static.\n`,
);
