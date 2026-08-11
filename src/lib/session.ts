/**
 * Session identity.
 *
 * A UUID minted the moment someone starts the funnel, before there is
 * an email, a lead row, or a booking to identify them by. It is a join
 * key created in advance of anything to join, and it is what lets four
 * independent systems refer to the same person without agreeing on
 * anything else:
 *
 *   browser   → carries it through every step and into the payload
 *   database  → unique index; partial and complete UPSERT to one row
 *   Cal.com   → passed as booking metadata, returned by the webhook
 *   PostHog   → used as distinct_id
 *
 * That last hop is what makes bookings-by-utm_source a single SQL
 * query instead of matching bookings to leads by email and timestamp
 * by hand.
 *
 * Scope note: sessionStorage is per-tab and dies with the tab, so this
 * identifies a VISIT, not a person. Someone returning next week gets a
 * new id. That is intended — it is why partial-to-complete merging is
 * scoped to a session.
 */

const STORAGE_KEY = "lambda_session_id_v1";

function generateId(): string {
  // Available in every browser Next 16 supports and in Node 19+.
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // Fallback for non-secure contexts (plain http on a LAN IP), where
  // crypto.randomUUID is undefined. Not cryptographically strong, but
  // this is a correlation id, not a secret.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** Get the session id, creating one on first call. */
export function getSessionId(): string {
  if (typeof window === "undefined") return "";

  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing) return existing;

    const id = generateId();
    window.sessionStorage.setItem(STORAGE_KEY, id);
    return id;
  } catch {
    // Storage unavailable. Return a throwaway id so the submission
    // still succeeds — an unjoinable lead beats a lost one.
    return generateId();
  }
}

export function clearSessionId(): void {
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
