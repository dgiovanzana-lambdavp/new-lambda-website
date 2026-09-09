/**
 * Feature flags and booking configuration.
 *
 * Safe for the client: these are switches and a public booking slug,
 * not rules. The scoring thresholds live in scoring.ts, which is
 * server-only and must never be imported from a component.
 */

export const FUNNEL_CONFIG = {
  /**
   * The operating-support lane. Leave `false`.
   *
   * Lambda has not decided whether to sell these services, so this lane
   * exists to measure demand before commitment. When false, the router
   * option is hidden entirely and /contact/services redirects to
   * /contact — not merely visually hidden, since a hidden option in the
   * markup is still a discoverable route.
   */
  servicesLaneEnabled: false,

  /**
   * The LP / investor lane. Leave `false` until counsel signs off.
   *
   * A publicly accessible page that solicits prospective investors can
   * constitute general solicitation, which affects whether an offering
   * qualifies under Rule 506(b) or 506(c) and can carry real
   * consequences for an active raise. The spec says to build the branch
   * but not to make it live without review, and to gate it behind a
   * flag if there is any doubt. There is doubt, so it is gated.
   *
   * Flipping this is a legal decision, not an engineering one.
   */
  lpLaneEnabled: false,
} as const;

export const BOOKING_CONFIG = {
  /** Google Calendar appointment schedule for qualified founders. */
  tierABookingLink:
    "https://calendar.app.google/qZy7enQ2a9Q8jJxVA",
} as const;

/**
 * The response window promised to Tier B ("might fit") leads.
 *
 * Decided by Lambda, not inferred — the brief called this out as
 * ask-don't-guess. Kept here rather than inline in the thank-you
 * component so the promise is one edit, and so it is obvious that
 * changing it changes a commitment made to real people.
 */
export const RESPONSE_WINDOW_COPY = "within 3–5 business days" as const;
