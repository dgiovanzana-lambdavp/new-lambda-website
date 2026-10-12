"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100] as const;

type ScrollDepthTrackerProps = {
  postSlug: string;
};

/**
 * Fires `blog_scroll_depth` once per milestone (25/50/75/100) as the
 * reader scrolls the post. Depth is document scroll percent, not a
 * single element's height — that matches how the rest of the marketing
 * pages are measured.
 */
export default function ScrollDepthTracker({
  postSlug,
}: ScrollDepthTrackerProps) {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    fired.current = new Set();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = Math.min(
        100,
        Math.round((window.scrollY / scrollable) * 100),
      );

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone);
          track("blog_scroll_depth", {
            post_slug: postSlug,
            percent: milestone,
          });
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [postSlug]);

  return null;
}
