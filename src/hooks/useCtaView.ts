"use client";

import { useEffect, useRef, type RefObject } from "react";
import { track } from "@/lib/analytics";

/**
 * Fire `cta_view` once when the CTA element scrolls into view.
 */
export function useCtaView<T extends HTMLElement = HTMLElement>(
  location: string,
  props: { post_slug?: string } = {},
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || fired.current) continue;
          fired.current = true;
          track("cta_view", {
            location,
            post_slug: props.post_slug,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [location, props.post_slug]);

  return ref;
}
