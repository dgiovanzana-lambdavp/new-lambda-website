import "server-only";

import type { LeadDestination } from "@/lib/leads/types";

/**
 * STUB — not implemented, not registered.
 *
 * ── This is the Tier B follow-up path, and only Tier B ──────────────
 *
 * If Lambda later wires a scheduling agent (SkipUp or similar), it
 * belongs here and nowhere else. Tier B leads are the ones a human
 * replies to by email, which is a genuine email-thread negotiation and
 * exactly what those tools are built for.
 *
 * It must not be used for Tier A: those book themselves inline on the
 * thank-you screen, and inserting an agent would add a hop at the exact
 * moment intent is highest. It must not be used for Tier C either —
 * an out-of-focus founder should not receive follow-up implying
 * otherwise.
 *
 * So when this is implemented, the gate on registering it is
 * `scoring?.tier === "B"`.
 */
export const schedulingAgentDestination: LeadDestination = {
  name: "scheduling-agent",

  async send() {
    // Field mapping goes here: contact.email + contact.firstName as the
    // thread recipient, formatAnswers() output as the agent's context,
    // and meta.sessionId echoed so a booking it arranges still joins
    // back to the funnel submission.
    return { ok: false, error: "scheduling agent destination not implemented" };
  },
};
