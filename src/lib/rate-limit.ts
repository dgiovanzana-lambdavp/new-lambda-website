import "server-only";

/**
 * In-memory, per-IP rate limiting.
 *
 * ── Read this before trusting it ────────────────────────────────────
 *
 * The state lives in the process. On a serverless platform each
 * instance has its own map, and instances are created and destroyed
 * freely — so the real limit is "N per window per instance", not "N per
 * window". An attacker who can reach several instances gets several
 * budgets, and a cold start resets the counter entirely.
 *
 * That is an acceptable trade here and a bad one later. This funnel is
 * expected to be low volume — the brief's own estimate is a handful of
 * leads a quarter — so the job is stopping a naive script, not a
 * distributed attack. It costs no dependency and no network hop.
 *
 * TODO: move to Upstash Redis (or any shared store) if the site scales
 * beyond one instance in a way that matters, or if abuse is observed.
 * The interface below is deliberately the same shape a Redis-backed
 * implementation would have, so swapping it is a one-file change.
 */

interface Bucket {
  count: number;
  /** Epoch ms when this bucket resets. */
  resetAt: number;
}

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

/**
 * Bounded so a flood of unique IPs cannot grow the map without limit —
 * a rate limiter that can be turned into a memory-exhaustion vector is
 * worse than none.
 */
const MAX_TRACKED_IPS = 10_000;

const buckets = new Map<string, Bucket>();

function evictExpired(now: number): void {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitResult {
  allowed: boolean;
  /** Seconds until the window resets, for the Retry-After header. */
  retryAfterSeconds: number;
}

export function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(identifier);

  if (!existing || existing.resetAt <= now) {
    if (buckets.size >= MAX_TRACKED_IPS) evictExpired(now);
    // Still full after eviction: every bucket is live. Drop the whole
    // map rather than refuse traffic — a reset briefly loosens the
    // limit, whereas refusing would deny real submissions.
    if (buckets.size >= MAX_TRACKED_IPS) buckets.clear();

    buckets.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  existing.count += 1;

  if (existing.count > MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Best-effort client IP.
 *
 * Behind Vercel or Netlify the platform sets these headers and strips
 * client-supplied copies, so they are trustworthy there. Directly
 * exposed they are spoofable — which is another reason this limiter is
 * a speed bump rather than a security control.
 */
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  // x-forwarded-for is a chain; the first entry is the original client.
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}

/** Exported for tests. */
export function __resetRateLimits(): void {
  buckets.clear();
}
