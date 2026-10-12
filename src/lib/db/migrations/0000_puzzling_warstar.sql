-- Idempotent initial schema.
--
-- Safe against a fresh Postgres (creates everything) and against a
-- database whose `leads` table was already created by the former
-- Netlify SQL migration (`netlify/database/migrations/0000_create_leads.sql`).
-- Drizzle still records this hash in `__drizzle_migrations` so later
-- migrations run exactly once.

CREATE TABLE IF NOT EXISTS "leads" (
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
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leads_utm_source_idx" ON "leads" USING btree ("utm_source");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "leads_created_at_idx" ON "leads" USING btree ("created_at");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "leads_session_id_idx" ON "leads" USING btree ("session_id");
