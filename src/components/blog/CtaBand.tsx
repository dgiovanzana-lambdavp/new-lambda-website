"use client";

import Link from "next/link";
import { BLOG_CTA_REPLY_LINE } from "@/config/blog";
import { track } from "@/lib/analytics";

type CtaBandProps = {
  heading: string;
  text?: string;
  href?: string;
  buttonLabel?: string;
  postSlug?: string;
};

export default function CtaBand({
  heading,
  text = `Tell us where you are. ${BLOG_CTA_REPLY_LINE}`,
  href = "/contact",
  buttonLabel = "Get In Touch",
  postSlug,
}: CtaBandProps) {
  return (
    <section className="blog-cta-band">
      <div className="blog-cta-band__inner">
        <h2 className="blog-cta-band__heading">{heading}</h2>
        <p className="blog-cta-band__text">{text}</p>
        <Link
          href={href}
          className="blog-btn-white"
          onClick={() =>
            track(
              "blog_cta_click",
              { cta: "end_band", post_slug: postSlug },
              { send_instantly: true },
            )
          }
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
