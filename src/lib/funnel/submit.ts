import type { LeadResponse, LeadSubmission } from "@/lib/leads/types";

/**
 * The single path from browser to server.
 *
 * Note what this file does NOT import: no database driver, no email
 * SDK, no scoring config. The browser's entire knowledge of the
 * submission pipeline is "POST this shape to this URL, receive an
 * outcome". Everything else happens server-side, which is what keeps
 * the investment criteria out of the JS bundle.
 */

const ENDPOINT = "/api/leads";

/**
 * Anti-spam fields ride alongside the lead rather than inside it.
 *
 * `LeadSubmission` is the canonical shape that gets stored; `_hp` and
 * `_startedAt` are transport concerns the server consumes and discards.
 * Folding them into LeadSubmission would mean carrying honeypot state
 * into the database schema and every destination adapter.
 */
interface TransportEnvelope extends LeadSubmission {
  _hp: string;
  /** Epoch ms when the flow began, for the minimum-duration check. */
  _startedAt: number;
}

function envelope(
  lead: LeadSubmission,
  honeypot: string,
  startedAt: number,
): TransportEnvelope {
  return { ...lead, _hp: honeypot, _startedAt: startedAt };
}

export async function submitLead(
  lead: LeadSubmission,
  honeypot: string,
  startedAt: number,
): Promise<LeadResponse> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(envelope(lead, honeypot, startedAt)),
  });

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`);
  }

  return (await response.json()) as LeadResponse;
}

/**
 * Abandonment beacon.
 *
 * `sendBeacon` rather than `fetch`, because the page is being torn down
 * and the browser cancels in-flight fetches. A beacon is handed to the
 * browser and delivered independently of the page's lifetime — which is
 * the entire reason the API exists.
 *
 * Fire-and-forget: there is no response to read, because there is no
 * longer a page to read it. The return value reports whether the
 * browser accepted the payload for delivery, not whether the server
 * received it.
 */
export function sendPartialBeacon(
  lead: LeadSubmission,
  honeypot: string,
  startedAt: number,
): boolean {
  if (typeof navigator === "undefined" || !navigator.sendBeacon) return false;

  const body = JSON.stringify(envelope(lead, honeypot, startedAt));

  // Sent as a Blob so the Content-Type survives. A bare string arrives
  // as text/plain and the route's JSON parsing would reject it.
  const blob = new Blob([body], { type: "application/json" });

  try {
    return navigator.sendBeacon(ENDPOINT, blob);
  } catch {
    return false;
  }
}
