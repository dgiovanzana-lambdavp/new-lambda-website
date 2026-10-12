# Lambda Capital — `/contact` Qualification Funnel

A multi-step, persona-branching contact funnel that captures contact
details first, scores founder submissions **on the server** against
Lambda's investment criteria, and either shows a booking calendar inline
or returns a courteous non-answer — never revealing why.

Every submission lands in Postgres with its campaign tags intact, so
**bookings-by-traffic-source is a single SQL query**.

---

## Status

| Phase | State |
|---|---|
| Question trees, types, config | Done |
| Funnel UI, branching, progress, resume | Done |
| `scoreLead` + 43 tests | Done |
| Postgres, `/api/leads`, destinations | Done, verified against a live database |
| Cal.com embed + webhook | Done, awaiting account |
| PostHog events + server-side flags | Done, awaiting keys |
| Accessibility + mobile | Done |
| Admin panel (Payload) | **Deliberately not built.** Phase 2. |

Everything runs today. The remaining work is credentials, not code.

---

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in DATABASE_URL
npm run dev
```

Open http://localhost:3000/contact

Useful things to try:

```bash
# UTM tags must survive to the database
open "http://localhost:3000/contact?utm_source=linkedin&utm_campaign=test"

# Start over
open "http://localhost:3000/contact/founder?resetProgress=1"
```

### Verification

```bash
npm run verify
```

Runs the test suite, a production build, and the bundle-leak check. That
last one greps the built client JS for markers that only exist inside
the scoring module — if any appear, scoring reached the browser and the
build is wrong.

```bash
node scripts/query-leads.mjs             # recent leads
node scripts/query-leads.mjs attribution # bookings by utm_source ← the deliverable
node scripts/reset-leads.mjs --yes       # clear dev fixtures
```

---

## Credentials to plug in

Each one is independent. The funnel degrades gracefully without any of
them — a missing key disables its feature and logs why, rather than
breaking the form.

### 1. `DATABASE_URL` — Railway Postgres

The system of record. Everything else here is reversible; a lead that
was only ever emailed is unqueryable forever.

Railway exposes **two** connection strings, and the difference matters:

| Variable | Host | Use it for |
|---|---|---|
| `DATABASE_URL` | `postgres.railway.internal` | The deployed app. Private network, no egress cost |
| `DATABASE_PUBLIC_URL` | `*.proxy.rlwy.net` | Your laptop — migrations and the dev scripts |

In Railway, reference the internal one on the app service. In your local
`.env.local`, use the public one — `postgres.railway.internal` does not
resolve outside the Railway project, and the dev scripts fail with a
clear message if you try.

```bash
npx drizzle-kit migrate   # apply the schema (uses DATABASE_URL)
```

### 2. Cal.com — unlocks the Tier A inline calendar

1. Create the meeting type qualified founders should book.
2. **Connect Google Calendar** — Cal.com → Apps → Google Calendar →
   Install. Set it as the *destination* calendar so every booking is
   written there with a Meet link and an invite, and enable it as a
   *conflict* calendar so Cal.com reads your existing busy times and
   never double-books you.

   Cal.com and Google Calendar are not alternatives: Cal.com is the
   availability-aware booking front door, Google Calendar is where the
   meeting lands and where you actually live. This step is configuration
   only — nothing in this codebase changes.

   Google Calendar cannot replace Cal.com here. Two Cal.com features are
   load-bearing: arbitrary booking **metadata** (we plant `sessionId` in
   it) and a **webhook that returns that metadata**. Google's appointment
   schedules offer neither, so booking-to-campaign attribution would
   degrade to matching by email and timestamp by hand — the exact
   reconciliation this rebuild exists to eliminate.
3. Put the event type's slug in `src/config/funnel.ts`:
   ```ts
   export const BOOKING_CONFIG = { tierACalLink: "lambda/intro" };
   ```
4. Add a webhook → `https://YOUR-DOMAIN/api/webhooks/cal`, event
   `BOOKING_CREATED`, and copy the secret into `CAL_WEBHOOK_SECRET`.

Until the slug is set, Tier A founders still get the right outcome and
copy — they just see "we'll follow up shortly with a time" instead of a
calendar. Nothing breaks.

`CAL_WEBHOOK_SECRET` currently holds a **placeholder** so the path is
testable locally. Replace it. Without a real secret the endpoint fails
closed and rejects everything, which is the correct default — an
unverified webhook that writes to your database is an open endpoint.

### 3. `RESEND_API_KEY` — unlocks notification email

Verify a sending domain in Resend, then set `LEAD_FROM_EMAIL`.
Notifications go to `LEAD_NOTIFICATION_EMAIL` (`info@lambdavp.com`).

Subject lines are built to be triaged from a phone:

```
[Founder] Jane Smith — Acme Corp — $3M–$10M — via linkedin
[REVIEW]  Jane Smith — Acme Corp — $1M–$3M — FAILED: profitability
[PARTIAL] [Founder] Jane Smith — Acme Corp — abandoned at step 4 of 9
```

### 4. PostHog — unlocks analytics and no-deploy threshold changes

`NEXT_PUBLIC_POSTHOG_KEY` for events; `POSTHOG_PERSONAL_API_KEY` for
server-side flag evaluation.

Flags to create:

| Flag | Type | Effect |
|---|---|---|
| `scoring-config` | JSON payload | Overrides the gates without a deploy |
| `booking-cal-link` | String payload | Overrides the Tier A Cal.com link |

A malformed or unreachable flag **always** falls back to the
checked-in `SCORING_CONFIG`. A flag outage can never open the gate or
take the form down — there are tests for exactly this.

**Never prefix a scoring flag with `NEXT_PUBLIC_`.** That would ship the
thresholds in the browser bundle and defeat server-side scoring.

---

## Deployment

Two environments, two hosts, and the difference between them is the
thing to understand before changing anything here.

| | Staging | Production |
|---|---|---|
| Host | Railway | Netlify |
| URL | `new-lambda-website-staging.up.railway.app` | lambdavp.com |
| Branch | `Staging` | `main` |
| Runs as | one long-lived container | serverless functions |
| Migrations | on start, via `npm start` | at build, via `build:netlify` |

Production is on Netlify because the domain already was. Moving the app
to the domain is cheaper than moving the domain to the app: the apex
record cannot be a CNAME, and Google Cloud DNS has no ALIAS, so
repointing lambdavp.com would have meant migrating DNS to a provider
with CNAME flattening before anything else could happen.

**The old site was a static export** (`output: 'export'`). That is why
none of this could simply be dropped into it: a static export has no
server, so it cannot run `/api/leads`, cannot score on the server, and
cannot write to Postgres. Server-side scoring is not negotiable — in
the browser the thresholds are readable by anyone, and a founder who
reads them can answer their way onto a partner's calendar.

### What the serverless model changes

**Migrations move to build time.** Railway has a process to run them
before the server starts. Netlify has no equivalent — the build emits
functions, and a function only runs when a request arrives, so the
first request would be racing the schema. `netlify.toml` runs them in
the build command instead, with `MIGRATE_STRICT=1` so a failure stops
the deploy. That is the opposite of the Railway setting and it is not
an inconsistency: a failed build leaves the previous deploy serving,
whereas a failed start on Railway left nothing serving at all.

**The database pool is small.** Every warm function instance holds its
own pool, so the connection count against Postgres is `max` times the
number of live instances. `max` is 2 for that reason. See the note in
`src/lib/db/index.ts` — the fix for real volume is PgBouncer, never a
bigger number.

**Rate limiting is weaker.** `src/lib/rate-limit.ts` keeps its state in
process memory, so the real limit is per instance rather than per site,
and a cold start resets it. That was a documented trade before and it
is a slightly worse one here. It still stops a naive script, which is
what it is for. The file's interface matches what a Redis-backed
version would look like, so swapping it is a one-file change.

**`DATABASE_URL` must be the public URL.** Netlify runs outside
Railway's network, so `postgres.railway.internal` fails there exactly
as it does on a laptop. Use `DATABASE_PUBLIC_URL` (`*.proxy.rlwy.net`)
with `?sslmode=require`, set in both the build and function contexts.

### First deploy

1. Point a Netlify site at the branch you want to test. Use a **branch
   deploy or a separate site first** — the existing site serves
   lambdavp.com and should not be the experiment.
2. Set the environment variables above in Netlify.
3. Deploy, and read the build log.

**The known risk is the Next.js runtime.** Netlify installs its own
Next runtime and this app is on Next 16, which is recent enough that
support is worth confirming rather than assuming. If the build fails on
the runtime, the options are to wait for it or to pin Next down a
major. Find this out on a branch deploy, not on the apex domain.

Once a branch deploy is verified, merge `Staging` into `main` and let
the existing Netlify site build it. Nothing about the domain changes.


---

## The marketing site lives here now

This was once a standalone funnel meant to be copied into the marketing
site. It went the other way instead: the site is 16 files of
straightforward pages, this app is 59 files of tested infrastructure, so
the site moved in here rather than this being merged into a codebase two
Next majors, a React major and a Tailwind major behind.

So `/`, `/about`, `/portfolio` and `/team` are in `src/app`, the shared
components are in `src/components`, and the root layout carries the
site's nav and footer around every route including the funnel.

Two things resolved on the way in, worth knowing if you touch styling:

**Tailwind is v4 everywhere.** The site's v3 palette was translated into
`@theme` tokens in `src/styles/site-theme.css`, values unchanged, so
existing class names still work. It sits beside `theme.css` and its
`lambda-*` tokens rather than replacing it — the two are the same
colours, and collapsing them touches every funnel component, which is a
separate change from the port.

**Framer Motion is on v13.** The marketing pages animate with it and v10
does not support React 19. The funnel still uses CSS transitions capped
at 180ms and honours `prefers-reduced-motion` — either approach is fine,
just don't mix them in one component.

> **Accessibility note:** the site's `muted-foreground`
> (`hsl(220 15% 70%)`) is about **2.4:1 on white** and fails WCAG AA. It
> survives in the ported palette because a page still uses it. The
> funnel uses `muted` (`hsl(220 25% 45%)`, 5.5:1) for all sub-copy.
> Worth fixing site-wide.

---

## How it works

```
src/
  app/
    contact/
      page.tsx              router screen
      [persona]/page.tsx    the funnel
      layout.tsx            split-screen shell
    api/
      leads/route.ts        validate → score → deliver
      webhooks/cal/route.ts signature-verified booking join
  components/funnel/        StepShell, ProgressBar, 4 question types
  config/
    answer-values.ts        shared vocabulary (client-safe)
    questions/*.ts          question trees AS DATA
    scoring.ts              SERVER ONLY — the thresholds
  lib/
    leads/score.ts          pure scoreLead(answers, config)
    leads/destinations/     postgres · email · console (+ 3 stubs)
    db/                     Drizzle schema + migrations
```

Five decisions worth knowing about:

**Contact details are captured first.** Someone who abandons at question
4 is still a named lead with an email address. Most abandonment happens
after the email is already typed.

**Question trees are data, not JSX.** `resolvePath()` walks the tree
following each `next` resolver, which is what makes "Question N of M"
honest — a founder who answers "None of these" is on a 4-question path
and sees "of 4", not "of 9". It is also what makes a future CMS
migration mechanical instead of a rewrite.

**Scoring is pure, with config injected as an argument.** That is what
lets the same function be driven by fixtures in tests, by checked-in
defaults in production, and by a PostHog payload at runtime.

**`answers` is JSONB; the gates are indexed columns.** Adding a question
must never need a migration. But `utm_source`, `tier`, and `created_at`
are what you filter on, so they are promoted to real columns. Promote
what you query by; leave in the blob what you only read back.

**Partial and complete UPSERT on `sessionId`.** One row per session,
upgraded — never two to deduplicate later. And once a row is complete,
a late abandonment beacon can no longer touch it: `sendBeacon` is
delivered independently of the page, so it genuinely can arrive after
the submission that completed the flow.

---

## Deliberately not built

- **Admin panel.** Phase 2, Payload CMS. Question trees are already
  typed data and the DB client is a single export, so it drops in.
- **CRM integrations.** `hubspot.ts`, `airtable.ts`, and
  `scheduling-agent.ts` are stubs with mapping notes.
- **Services lane.** `servicesLaneEnabled: false`. Router option hidden
  and `/contact/services` redirects.
- **LP lane.** `lpLaneEnabled: false` pending counsel review. A public
  page soliciting investors can constitute general solicitation, which
  affects whether an offering qualifies under Rule 506(b) or 506(c).
  Flipping that flag is a legal decision, not an engineering one.
