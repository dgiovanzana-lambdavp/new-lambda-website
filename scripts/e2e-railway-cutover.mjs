#!/usr/bin/env node
/**
 * E2E for the Railway cutover:
 * 1) Migrate a fresh DB and a Netlify-shaped DB (idempotent).
 * 2) POST /api/leads for each inquiry type; read rows back.
 * 3) Assert validation failures save nothing.
 * 4) Copy source → empty target, assert counts; re-run for idempotency.
 *
 * Requires a running Next server with DATABASE_URL pointing at lambda_app.
 */

import { randomUUID } from "node:crypto";
import pg from "pg";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const APP_URL = process.env.E2E_BASE_URL ?? "http://127.0.0.1:3000";
const APP_DB =
  process.env.DATABASE_URL ??
  "postgresql://lambda:lambda@127.0.0.1:5432/lambda_app";
const SOURCE_DB =
  process.env.SOURCE_DATABASE_URL ??
  "postgresql://lambda:lambda@127.0.0.1:5432/lambda_source";
const TARGET_DB =
  process.env.TARGET_DATABASE_URL ??
  "postgresql://lambda:lambda@127.0.0.1:5432/lambda_target";
const NETLIFY_SHAPED_DB =
  "postgresql://lambda:lambda@127.0.0.1:5432/lambda_netlify_shaped";

const results = [];

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

async function runMigrate(databaseUrl) {
  await new Promise((resolve, reject) => {
    const child = spawn("node", ["scripts/migrate.mjs"], {
      env: { ...process.env, DATABASE_URL: databaseUrl, MIGRATE_STRICT: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("close", (code) => {
      if (code === 0) resolve(out);
      else reject(new Error(`migrate failed (${code}): ${out}`));
    });
  });
}

async function runCopy(source, target) {
  return new Promise((resolve, reject) => {
    const child = spawn("node", ["scripts/copy-from-netlify.mjs"], {
      env: {
        ...process.env,
        SOURCE_DATABASE_URL: source,
        DATABASE_URL: target,
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("close", (code) => {
      if (code === 0) resolve(out.trim());
      else reject(new Error(`copy failed (${code}): ${out}`));
    });
  });
}

function basePayload(persona, sessionId) {
  const common = {
    attribution: {
      utm_source: "e2e",
      utm_medium: "test",
      landing_path: "/contact",
      heard_about_us: "referral",
    },
    meta: {
      submittedAt: new Date().toISOString(),
      completedSteps: 5,
      totalSteps: 5,
      isPartial: false,
      sessionId,
    },
    _hp: "",
    _startedAt: Date.now() - 60_000,
  };

  if (persona === "founder") {
    return {
      ...common,
      persona: "founder",
      contact: {
        firstName: "E2E",
        lastName: "Founder",
        email: `e2e-founder-${sessionId.slice(0, 8)}@example.com`,
        phone: "415-555-0100",
        company: "E2E Founder Co",
        companyUrl: "https://example.com",
      },
      answers: {
        focus_area: "govtech",
        revenue: "3m_10m",
        financials: "ebitda_positive",
        use_of_proceeds: "growth",
        capital_amount: "3m_10m",
        timeline: "immediate",
        heard_about: "referral",
      },
    };
  }

  if (persona === "lp") {
    return {
      ...common,
      persona: "lp",
      contact: {
        firstName: "E2E",
        lastName: "Investor",
        email: `e2e-lp-${sessionId.slice(0, 8)}@example.com`,
        company: "E2E Family Office",
      },
      answers: {
        investor_type: "family_office",
        discuss: "learn_more",
        notes: "E2E investing with Lambda",
        heard_about: "referral",
      },
    };
  }

  if (persona === "general") {
    return {
      ...common,
      persona: "general",
      contact: {
        firstName: "E2E General",
        email: `e2e-general-${sessionId.slice(0, 8)}@example.com`,
        company: "Press",
      },
      answers: {
        topic: "press",
        heard_about: "referral",
      },
    };
  }

  // services lane (API still accepts; UI may be gated)
  return {
    ...common,
    persona: "services",
    contact: {
      firstName: "E2E",
      lastName: "Services",
      email: `e2e-services-${sessionId.slice(0, 8)}@example.com`,
      company: "Ops Co",
    },
    answers: {
      need: "ops",
      heard_about: "referral",
    },
  };
}

async function postLead(body) {
  const res = await fetch(`${APP_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json };
}

async function countLeads(client) {
  const { rows } = await client.query(`SELECT COUNT(*)::int AS c FROM leads`);
  return rows[0].c;
}

async function findBySession(client, sessionId) {
  const { rows } = await client.query(
    `SELECT id, persona, email, first_name, session_id, is_partial
     FROM leads WHERE session_id = $1`,
    [sessionId],
  );
  return rows[0] ?? null;
}

console.log("=== 1) Migrations: fresh + Netlify-shaped (idempotent) ===");

// Netlify-shaped: apply the old CREATE TABLE SQL without drizzle journal
{
  const client = new pg.Client({ connectionString: NETLIFY_SHAPED_DB });
  await client.connect();
  await client.query(`
    CREATE TABLE "leads" (
      "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
      "created_at" timestamp with time zone DEFAULT now() NOT NULL,
      "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
      "persona" text NOT NULL,
      "is_partial" boolean DEFAULT false NOT NULL,
      "first_name" text NOT NULL,
      "last_name" text,
      "email" text NOT NULL,
      "phone" text,
      "company" text,
      "company_url" text,
      "answers" jsonb NOT NULL,
      "utm_source" text,
      "utm_medium" text,
      "utm_campaign" text,
      "utm_content" text,
      "utm_term" text,
      "referrer" text,
      "landing_path" text,
      "heard_about_us" text,
      "tier" text,
      "outcome" text,
      "failed_gates" jsonb,
      "score_version" text,
      "booking_id" text,
      "booked_at" timestamp with time zone,
      "session_id" uuid NOT NULL
    );
    CREATE INDEX "leads_utm_source_idx" ON "leads" USING btree ("utm_source");
    CREATE INDEX "leads_created_at_idx" ON "leads" USING btree ("created_at");
    CREATE UNIQUE INDEX "leads_session_id_idx" ON "leads" USING btree ("session_id");
  `);
  await client.end();
}

await runMigrate(APP_DB);
await runMigrate(NETLIFY_SHAPED_DB); // must succeed despite existing table
await runMigrate(SOURCE_DB);
await runMigrate(TARGET_DB);
results.push({ step: "migrate_fresh", ok: true });
results.push({ step: "migrate_netlify_shaped_idempotent", ok: true });
console.log("migrate fresh: ok");
console.log("migrate over Netlify-shaped schema: ok");

console.log("\n=== 2) Form API submissions (each inquiry type) ===");
const app = new pg.Client({ connectionString: APP_DB });
await app.connect();
await app.query("TRUNCATE leads");

const personas = [
  { persona: "founder", label: "I'm raising growth capital" },
  { persona: "lp", label: "I'm investing with Lambda" },
  { persona: "general", label: "Something else" },
  { persona: "services", label: "I'm looking for operating support (API)" },
];

const beforeAll = await countLeads(app);
assert(beforeAll === 0, `expected empty leads, got ${beforeAll}`);

for (const { persona, label } of personas) {
  const sessionId = randomUUID();
  const before = await countLeads(app);
  const payload = basePayload(persona, sessionId);
  const { status, json } = await postLead(payload);
  assert(status === 200, `${persona} expected 200, got ${status}: ${JSON.stringify(json)}`);
  const row = await findBySession(app, sessionId);
  assert(row, `${persona} (${label}): row missing after POST`);
  assert(row.persona === persona, `${persona}: persona mismatch`);
  assert(row.email === payload.contact.email, `${persona}: email mismatch`);
  const after = await countLeads(app);
  console.log(
    `${label}: status=${status} outcome=${json.outcome} before=${before} after=${after} email=${row.email}`,
  );
  results.push({
    step: `submit_${persona}`,
    label,
    status,
    outcome: json.outcome,
    before,
    after,
    email: row.email,
  });
}

console.log("\n=== 3) Validation failures save nothing ===");
const beforeValidation = await countLeads(app);
const bad = await postLead({
  persona: "founder",
  contact: { firstName: "", email: "not-an-email" },
  answers: {},
  attribution: { heard_about_us: "referral" },
  meta: {
    submittedAt: new Date().toISOString(),
    completedSteps: 1,
    totalSteps: 1,
    isPartial: false,
    sessionId: randomUUID(),
  },
});
assert(bad.status === 400, `expected 400, got ${bad.status}`);
assert(bad.json.error, "expected validation error body");
const afterValidation = await countLeads(app);
assert(
  afterValidation === beforeValidation,
  `validation should not insert; before=${beforeValidation} after=${afterValidation}`,
);
console.log(
  `validation: status=${bad.status} before=${beforeValidation} after=${afterValidation} fieldErrors=${JSON.stringify(bad.json.fieldErrors)}`,
);
results.push({
  step: "validation_failure",
  status: bad.status,
  before: beforeValidation,
  after: afterValidation,
  fieldErrors: bad.json.fieldErrors,
});

await app.end();

console.log("\n=== 4) copy-from-netlify: seed → empty, then idempotent re-run ===");
{
  const source = new pg.Client({ connectionString: SOURCE_DB });
  const target = new pg.Client({ connectionString: TARGET_DB });
  await source.connect();
  await target.connect();
  await source.query("TRUNCATE leads");
  await target.query("TRUNCATE leads");

  // Seed three rows on source
  for (let i = 0; i < 3; i++) {
    await source.query(
      `INSERT INTO leads (persona, first_name, email, answers, session_id)
       VALUES ($1, $2, $3, $4::jsonb, $5)`,
      [
        "founder",
        `Seed${i}`,
        `seed${i}@example.com`,
        JSON.stringify({ focus_area: "govtech" }),
        randomUUID(),
      ],
    );
  }

  const srcBefore = (await source.query(`SELECT COUNT(*)::int AS c FROM leads`))
    .rows[0].c;
  const tgtBefore = (await target.query(`SELECT COUNT(*)::int AS c FROM leads`))
    .rows[0].c;
  console.log(`seeded: source=${srcBefore} target=${tgtBefore}`);

  const out1 = await runCopy(SOURCE_DB, TARGET_DB);
  console.log(out1);
  const tgtAfter1 = (await target.query(`SELECT COUNT(*)::int AS c FROM leads`))
    .rows[0].c;
  assert(tgtAfter1 === srcBefore, `count mismatch after copy: ${tgtAfter1} vs ${srcBefore}`);

  const out2 = await runCopy(SOURCE_DB, TARGET_DB);
  console.log(out2);
  const tgtAfter2 = (await target.query(`SELECT COUNT(*)::int AS c FROM leads`))
    .rows[0].c;
  assert(tgtAfter2 === srcBefore, `idempotent re-run changed count: ${tgtAfter2}`);

  results.push({
    step: "copy_first",
    source: srcBefore,
    targetBefore: tgtBefore,
    targetAfter: tgtAfter1,
    log: out1,
  });
  results.push({
    step: "copy_second_idempotent",
    source: srcBefore,
    targetAfter: tgtAfter2,
    log: out2,
  });

  await source.end();
  await target.end();
}

console.log("\n=== E2E SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
console.log("ALL E2E ASSERTIONS PASSED");
