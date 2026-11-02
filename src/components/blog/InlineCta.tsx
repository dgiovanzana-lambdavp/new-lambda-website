"use client";

import Link from "next/link";
import { OWNER_CTA_COPY } from "@/config/cta";
import { useCtaView } from "@/hooks/useCtaView";
import { track } from "@/lib/analytics";

type InlineCtaProps = {
  href?: string;
  postSlug?: string;
  /** When true, hide on desktop so the end band stays the main desktop ask. */
  mobileOnly?: boolean;
};

export default function InlineCta({
  href = OWNER_CTA_COPY.href,
  postSlug,
  mobileOnly = false,
}: InlineCtaProps) {
  const location = mobileOnly ? "mid_post_mobile" : "mid_post";
  const viewRef = useCtaView(location, { post_slug: postSlug });

  return (
    <aside
      ref={viewRef}
      className={
        mobileOnly
          ? "blog-inline-cta blog-inline-cta--mobile-only"
          : "blog-inline-cta"
      }
      aria-label="Contact Lambda Capital"
    >
      <p>
        {OWNER_CTA_COPY.heading} {OWNER_CTA_COPY.text}
      </p>
      <Link
        href={href}
        className="blog-inline-cta__link"
        onClick={() => {
          track(
            "cta_click",
            { location, post_slug: postSlug },
            { send_instantly: true },
          );
          track(
            "blog_cta_click",
            { cta: "inline", location, post_slug: postSlug },
            { send_instantly: true },
          );
        }}
      >
        {OWNER_CTA_COPY.buttonLabel}
      </Link>
    </aside>
  );
}
