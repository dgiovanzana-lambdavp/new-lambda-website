import {
  boolean,
  index,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

/**
 * The leads table — the system of record.
 *
 * Everything else in this build is reversible. A lead that was only
 * ever emailed is unqueryable forever: you cannot answer "which X post
 * produced a booking" from an inbox, and that question is the entire
 * point of the rebuild.
 */
export const leads = pgTable(
  "leads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),

    persona: text("persona").notNull(),
    isPartial: boolean("is_partial").notNull().default(false),

    // ── Contact ───────────────────────────────────────────────────
    firstName: text("first_name").notNull(),
    lastName: text("last_name"),
    email: text("email").notNull(),
    phone: text("phone"),
    company: text("company"),
    companyUrl: text("company_url"),

    /**
     * The full answer set as JSONB.
     *
     * Adding or reordering a question must never require a migration —
     * that is this column's job. The values you actually filter on are
     * promoted to real indexed columns below.
     *
     * The rule: promote what you QUERY BY, leave in the blob what you
     * only READ BACK. You will ask "Tier A leads from LinkedIn last
     * quarter". You will never ask "leads whose timeline was 'Next 3
     * months'" — you just read that when looking at one lead.
     */
    answers: jsonb("answers")
      .$type<Record<string, string | string[]>>()
      .notNull(),

    // ── Attribution ───────────────────────────────────────────────
    // Indexed because these are the columns you will actually query.
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    utmContent: text("utm_content"),
    utmTerm: text("utm_term"),
    referrer: text("referrer"),
    landingPath: text("landing_path"),
    heardAboutUs: text("heard_about_us"),

    // ── Scoring ───────────────────────────────────────────────────
    // Persisted so the rules can be backtested later: after a quarter,
    // compare conversion of auto-booked leads against hand-reviewed
    // ones. If Tier A isn't outperforming, the thresholds are wrong and
    // you will have the evidence to move them.
    tier: text("tier"), // 'A' | 'B' | 'C'
    outcome: text("outcome"), // 'book' | 'review' | 'decline'
    failedGates: jsonb("failed_gates").$type<string[]>(),
    scoreVersion: text("score_version"),

    // ── Booking ───────────────────────────────────────────────────
    // Filled in later by the Cal.com webhook.
    bookingId: text("booking_id"),
    bookedAt: timestamp("booked_at", { withTimezone: true }),

    /**
     * The join key, unique by constraint.
     *
     * Partial and complete submissions from one session must UPSERT to
     * a single row, not insert twice. Someone who abandons at question
     * 6 and returns to finish is one row that gets upgraded.
     *
     * The uniqueness is enforced HERE rather than by an application
     * check, because "does a row with this id exist?" followed by an
     * insert is a race: two requests can both check, both find nothing,
     * and both insert. The database refusing the second one is the only
     * version that cannot be bypassed by a code path added later.
     */
    sessionId: uuid("session_id").notNull(),
  },
  (t) => [
    index("leads_utm_source_idx").on(t.utmSource),
    index("leads_created_at_idx").on(t.createdAt),
    uniqueIndex("leads_session_id_idx").on(t.sessionId),
  ],
);

export type LeadRow = typeof leads.$inferSelect;
export type NewLeadRow = typeof leads.$inferInsert;
