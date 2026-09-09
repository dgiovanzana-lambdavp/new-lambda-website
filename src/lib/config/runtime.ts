import "server-only";

import { z } from "zod";
import { REVENUE_BANDS } from "@/config/answer-values";
import { BOOKING_CONFIG } from "@/config/funnel";
import { SCORING_CONFIG, type ScoringConfig } from "@/config/scoring";

/**
 * Runtime configuration from PostHog feature-flag payloads.
 *
 * ── Server only, and the build enforces it ──────────────────────────
 *
 * `import "server-only"` above makes importing this from a client
 * component a build error. That is the whole point: evaluating scoring
 * flags in the browser would ship the thresholds in the bundle and
 * undo the reason scoring lives on the server at all.
 *
 * ── Always falls back ───────────────────────────────────────────────
 *
 * Every path here ends at the checked-in SCORING_CONFIG. A flag service
 * outage must never open the gate or take the form down — those are the
 * two failure modes that matter, and both are worse than running on
 * slightly stale thresholds.
 */

/** Beyond this, give up and use the checked-in config. */
const FLAG_TIMEOUT_MS = 1_500;

/**
 * The shape a flag payload must have to be trusted.
 *
 * Validated rather than cast. A payload is edited by a human in a web
 * UI with no type checking, so a typo like `minRevenueBand: "1M-3M"` is
 * entirely likely — and silently accepting it would compare against a
 * band that does not exist, fail every revenue gate, and quietly send
 * every qualified founder to Tier B. Falling back on a malformed
 * payload is the only safe reading.
 */
const scoringPayloadSchema = z.object({
  version: z.string().min(1),
  gates: z.object({
    focusArea: z.array(z.string()).min(1),
    minRevenueBand: z.enum(REVENUE_BANDS),
    profitability: z.array(z.string()).min(1),
  }),
});

function isConfigured(): boolean {
  return Boolean(
    process.env.POSTHOG_PERSONAL_API_KEY && process.env.NEXT_PUBLIC_POSTHOG_KEY,
  );
}

/**
 * Resolve a flag payload, or null on any failure whatsoever.
 *
 * Deliberately swallows every error. A caller that has to distinguish
 * "PostHog is down" from "the flag is unset" would be tempted to treat
 * them differently, and there is no useful difference: both mean use
 * the checked-in config.
 */
async function readFlagPayload(flagKey: string): Promise<unknown | null> {
  if (!isConfigured()) return null;

  // Imported lazily so the PostHog Node client is never pulled into a
  // build that does not use flags.
  const { PostHog } = await import("posthog-node");

  const client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    personalApiKey: process.env.POSTHOG_PERSONAL_API_KEY,
    // Evaluate locally from cached definitions rather than making a
    // network call per submission.
    featureFlagsPollingInterval: 60_000,
  });

  try {
    const payload = await Promise.race([
      // distinct_id is required by the API but irrelevant here — these
      // flags are global switches, not per-user experiments.
      client.getFeatureFlagPayload(flagKey, "server"),
      new Promise<null>((resolve) =>
        setTimeout(() => resolve(null), FLAG_TIMEOUT_MS),
      ),
    ]);
    return payload ?? null;
  } catch (error) {
    console.warn(
      `[runtime-config] flag "${flagKey}" unavailable, using checked-in defaults: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
    return null;
  } finally {
    await client.shutdown().catch(() => {});
  }
}

/**
 * The scoring rules to use for this submission.
 *
 * Returns the checked-in SCORING_CONFIG unless PostHog supplies a
 * payload that fully validates.
 */
export async function getScoringConfig(): Promise<ScoringConfig> {
  const payload = await readFlagPayload("scoring-config");
  if (!payload) return SCORING_CONFIG;

  const parsed = scoringPayloadSchema.safeParse(payload);
  if (!parsed.success) {
    console.warn(
      "[runtime-config] scoring-config payload failed validation, " +
        "using checked-in defaults. Issues: " +
        parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
    );
    return SCORING_CONFIG;
  }

  // The version travels with the payload and is stamped onto every lead
  // scored under it. Without that, a threshold change makes every
  // historical lead uninterpretable — you can no longer tell which
  // rules produced which tier.
  return parsed.data;
}

/** The Tier A booking link, overridable without a deploy. */
export async function getBookingLink(): Promise<string> {
  const payload = await readFlagPayload("booking-cal-link");
  if (typeof payload === "string" && payload.trim()) return payload.trim();
  return BOOKING_CONFIG.tierABookingLink;
}
