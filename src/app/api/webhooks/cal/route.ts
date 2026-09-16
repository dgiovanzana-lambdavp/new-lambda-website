import { createHmac, timingSafeEqual } from "node:crypto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb, leads } from "@/lib/db";

/**
 * POST /api/webhooks/cal — Cal.com booking notifications.
 *
 * This is the join that turns "we got bookings" into "this X post
 * produced a booking". Cal.com returns the `sessionId` we planted in
 * the booking metadata; we use it to stamp `bookingId` and `bookedAt`
 * on the matching lead row, and bookings-by-utm_source becomes one SQL
 * statement instead of manual reconciliation.
 *
 * Requires a server runtime — impossible on a static export.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Cal.com sends the HMAC in this header. */
const SIGNATURE_HEADER = "x-cal-signature-256";

const calWebhookSchema = z.object({
  triggerEvent: z.string(),
  payload: z.object({
    // Cal.com's stable public identifier for the booking.
    uid: z.string().optional(),
    bookingId: z.union([z.string(), z.number()]).optional(),
    startTime: z.string().optional(),
    // Values are declared loosely because Cal.com passes metadata
    // through untouched and a stray key must not fail validation.
    metadata: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Constant-time signature comparison.
 *
 * `timingSafeEqual` rather than `===` because a byte-by-byte string
 * comparison leaks, through timing, how much of a guessed signature was
 * correct — which is enough to forge one given sufficient attempts.
 * It also throws on length mismatch, so lengths are checked first.
 */
function signatureMatches(expected: string, received: string): boolean {
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(received, "utf8");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request): Promise<NextResponse> {
  const secret = process.env.CAL_WEBHOOK_SECRET;

  /**
   * No secret configured means we cannot verify anything, so we accept
   * nothing. Failing closed is the only safe default: an endpoint that
   * skips verification "until the secret is set" is an open write path
   * into the system of record, and that state tends to outlive the
   * intention behind it.
   */
  if (!secret) {
    console.error(
      "[webhooks:cal] CAL_WEBHOOK_SECRET is not set — rejecting webhook. " +
        "Bookings will not be joined to leads until it is configured.",
    );
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  // The raw body, read exactly once. The HMAC is computed over the bytes
  // Cal.com sent — parsing to JSON and re-serialising would reorder keys
  // and change whitespace, and the signature would never match.
  const rawBody = await request.text();

  const received = request.headers.get(SIGNATURE_HEADER);
  if (!received) {
    return NextResponse.json({ error: "Missing signature." }, { status: 401 });
  }

  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  if (!signatureMatches(expected, received)) {
    console.warn("[webhooks:cal] rejected a request with an invalid signature");
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Malformed body." }, { status: 400 });
  }

  const parsed = calWebhookSchema.safeParse(parsedJson);
  if (!parsed.success) {
    return NextResponse.json({ error: "Unexpected payload." }, { status: 400 });
  }

  const { triggerEvent, payload } = parsed.data;

  // Other trigger events (reschedules, cancellations) are acknowledged
  // rather than rejected — a 4xx would make Cal.com retry a delivery
  // that is simply not interesting to us yet.
  if (triggerEvent !== "BOOKING_CREATED") {
    return NextResponse.json({ ok: true, ignored: triggerEvent });
  }

  const sessionId = payload.metadata?.sessionId;
  if (typeof sessionId !== "string" || !sessionId) {
    // A booking made directly on the Cal.com page rather than through
    // the funnel has no sessionId. Legitimate and unjoinable — worth a
    // log line, not an error.
    console.warn(
      "[webhooks:cal] BOOKING_CREATED with no sessionId in metadata; " +
        "cannot join to a lead.",
    );
    return NextResponse.json({ ok: true, joined: false });
  }

  const db = getDb();
  if (!db) {
    console.error("[webhooks:cal] DATABASE_URL not set — booking NOT recorded.");
    return NextResponse.json({ error: "Storage unavailable." }, { status: 503 });
  }

  try {
    const bookingId = payload.uid ?? String(payload.bookingId ?? "");
    const bookedAt = payload.startTime ? new Date(payload.startTime) : new Date();

    const updated = await db
      .update(leads)
      .set({ bookingId, bookedAt, updatedAt: new Date() })
      .where(eq(leads.sessionId, sessionId))
      .returning({ id: leads.id });

    if (updated.length === 0) {
      console.warn(
        `[webhooks:cal] no lead matched sessionId=${sessionId}; booking not joined.`,
      );
      return NextResponse.json({ ok: true, joined: false });
    }

    return NextResponse.json({ ok: true, joined: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[webhooks:cal] update failed: ${message}`);
    // 500 so Cal.com retries — a transient database error should not
    // permanently lose the booking join.
    return NextResponse.json({ error: "Update failed." }, { status: 500 });
  }
}
