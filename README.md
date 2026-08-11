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
| Neon Postgres, `/api/leads`, destinations | Done, verified against a live database |
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

### 1. `DATABASE_URL` — Neon Postgres · **configured**

The system of record. Everything else here is reversible; a lead that
was only ever emailed is unqueryable forever.

```bash
npx drizzle-kit migrate   # apply the schema to a new database
```

> Rotate the current key in the Neon console before going live — it was
> shared in a chat transcript during development.

### 2. Cal.com — unlocks the Tier A inline calendar

1. Create the meeting type qualified founders should book.
2. Put its slug in `src/config/funnel.ts`:
   ```ts
   export const BOOKING_CONFIG = { tierACalLink: "lambda/intro" };
   ```
3. Add a webhook → `https://YOUR-DOMAIN/api/webhooks/cal`, event
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

> **This app cannot run on GitHub Pages.**
>
> lambdavp.com is currently a static export (`output: 'export'`)
> deployed to GitHub Pages. A static export has no server, so it cannot
> run `/api/leads`, cannot score on the server, and cannot write to
> Postgres. Server-side scoring is not negotiable: in the browser, the
> thresholds are readable by anyone, and a founder who reads them can
> answer their way onto a partner's calendar.

To move the marketing site to Vercel:

1. Delete `output: 'export'`, `trailingSlash`, and `images.unoptimized`
   from `next.config.js`.
2. Import the repo in Vercel.
3. Add the environment variables above.
4. Point DNS.
5. Retire `.github/workflows/deploy.yml`.

The site is plain Next.js and deploys as-is. Keeping `/contact` on the
same origin is what lets both homepage CTAs keep working untouched.

---

## Merging into the marketing site

Paths here mirror the target repo, so merging is mostly a copy. Two
things need attention:

**Tailwind version.** This project uses v4 (CSS `@theme`); the site uses
v3 (`tailwind.config.js`). Every colour the funnel uses is confined to
`src/styles/theme.css`, mapped one-to-one onto the site's own tokens.
Move those values into `tailwind.config.js` under `extend.colors`, or
better, point the funnel at the site's existing colour names and delete
that file.

**Framer Motion.** The site animates with it; the funnel uses CSS
transitions capped at 180ms and honours `prefers-reduced-motion`. Either
is fine — don't mix them in one component.

> **Accessibility note:** the site's `muted-foreground`
> (`hsl(220 15% 70%)`) is about **2.4:1 on white** and fails WCAG AA.
> The funnel uses `muted` (`hsl(220 25% 45%)`, 5.5:1) for all sub-copy.
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
