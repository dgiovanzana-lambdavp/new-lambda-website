"use client";

import Link from "next/link";
import { teamMembers } from "@/lib/data";
import { track } from "@/lib/analytics";

const FOUNDER_FORM_HREF = "https://www.lambdavp.com/contact/founder";

type FounderCtaBlockProps = {
  position: "top" | "bottom";
  postSlug?: string;
};

function domenicLinkedIn(): string | undefined {
  return teamMembers.find((m) => m.id === "domenic-giovanzana")?.linkedin;
}

export default function FounderCtaBlock({
  position,
  postSlug,
}: FounderCtaBlockProps) {
  const linkedIn = domenicLinkedIn();

  function onClick(cta: "form" | "linkedin_dm") {
    track(
      "blog_cta_clicked",
      { position, cta, post_slug: postSlug },
      { send_instantly: true },
    );
  }

  return (
    <aside
      className={`blog-founder-cta blog-founder-cta--${position}`}
      aria-label="Talk with Lambda Capital"
    >
      <h2 className="blog-founder-cta__heading">
        Run a profitable software company?
      </h2>
      <p className="blog-founder-cta__body">
        Lambda Capital provides growth capital to profitable software and
        GovTech companies, without the venture treadmill.
      </p>
      <div className="blog-founder-cta__actions">
        <Link
          href={FOUNDER_FORM_HREF}
          className="blog-btn-white blog-founder-cta__btn"
          onClick={() => onClick("form")}
        >
          Talk with us
        </Link>
        {linkedIn ? (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-founder-cta__btn blog-founder-cta__btn--secondary"
            onClick={() => onClick("linkedin_dm")}
          >
            DM Domenic on LinkedIn
          </a>
        ) : null}
      </div>
    </aside>
  );
}