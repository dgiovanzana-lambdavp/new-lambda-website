"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ensureAnalytics, trackPageview } from "@/lib/analytics";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ensureAnalytics();
  }, []);

  useEffect(() => {
    if (!pathname) return;

    const search = searchParams?.toString();
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}${pathname}${search ? `?${search}` : ""}`
        : pathname;

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
  }, [pathname, searchParams]);

  return children;
}
