"use client";

import Link from "next/link";
import { OWNER_CTA_COPY } from "@/config/cta";
import { useCtaView } from "@/hooks/useCtaView";
import { track } from "@/lib/analytics";

type CtaBandProps = {
  heading?: string;
  text?: string;
  href?: string;
  buttonLabel?: string;
  postSlug?: string;
};

export default function CtaBand({
  heading = OWNER_CTA_COPY.heading,
  text = OWNER_CTA_COPY.text,
  href = OWNER_CTA_COPY.href,
  buttonLabel = OWNER_CTA_COPY.buttonLabel,
  postSlug,
}: CtaBandProps) {
  const location = "end_band";
  const viewRef = useCtaView(location, { post_slug: postSlug });

  return (
    <section ref={viewRef} className="blog-cta-band">
      <div className="blog-cta-band__inner">
        <h2 className="blog-cta-band__heading">{heading}</h2>
        <p className="blog-cta-band__text">{text}</p>
        <Link
          href={href}
          className="blog-btn-white"
          onClick={() => {
            track(
              "cta_click",
              { location, post_slug: postSlug },
              { send_instantly: true },
            );
            track(
              "blog_cta_click",
              { cta: "end_band", location, post_slug: postSlug },
              { send_instantly: true },
            );
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
