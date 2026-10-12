"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

type InlineCtaProps = {
  href?: string;
  postSlug?: string;
};

export default function InlineCta({
  href = "/contact",
  postSlug,
}: InlineCtaProps) {
  return (
    <aside className="blog-inline-cta" aria-label="Contact Lambda Capital">
      <p>
        Waiting on a government payment cycle? We invest in vertical software
        companies and can talk through what fits.
      </p>
      <Link
        href={href}
        className="blog-inline-cta__link"
        onClick={() =>
          track("blog_cta_click", {
            cta: "inline",
            post_slug: postSlug,
          })
        }
      >
        Talk to us →
      </Link>
    </aside>
  );
}
