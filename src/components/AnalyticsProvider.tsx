"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { applyInternalTrafficFlagFromUrl } from "@/lib/analytics-attribution";
import { ensureAnalytics, trackPageview } from "@/lib/analytics";
import { registerPosthogAttribution } from "@/lib/register-posthog-attribution";

/**
 * Fires SPA pageviews on route changes. Uses `usePathname` only (no
 * `useSearchParams`) so the layout never opts into client-side rendering;
 * query strings are read from `window.location` inside the effect.
 */
function AnalyticsPageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;

    const url = `${window.location.origin}${window.location.pathname}${window.location.search}`;

    const onBlog = pathname === "/blog" || pathname.startsWith("/blog/");
    const postSlug = pathname.startsWith("/blog/")
      ? pathname.slice("/blog/".length).split("/")[0] || undefined
      : undefined;

    trackPageview({
      $current_url: url,
      path: pathname,
      section: onBlog ? "blog" : undefined,
      post_slug: postSlug,
    });
  }, [pathname]);

  return null;
}

/**
 * Site-wide PostHog bootstrap + SPA pageviews.
 *
 * Mounted once in the root layout. No-ops when NEXT_PUBLIC_POSTHOG_KEY
 * is unset. Fires `$pageview` on the initial load and on every App
 * Router pathname / search change.
 *
 * Blog routes get `$pathname` / `$current_url` from PostHog defaults
 * plus explicit `section` / `post_slug` tags so funnel reports can
 * filter marketing traffic without parsing URLs.
 */
export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    applyInternalTrafficFlagFromUrl();
    ensureAnalytics();
    registerPosthogAttribution();
  }, []);

  return (
    <>
      <AnalyticsPageviewTracker />
      {children}
    </>
  );
}
