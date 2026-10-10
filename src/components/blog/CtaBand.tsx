import Link from "next/link";
import { BLOG_CTA_REPLY_LINE } from "@/config/blog";

type CtaBandProps = {
  heading: string;
  text?: string;
  href?: string;
  buttonLabel?: string;
};

export default function CtaBand({
  heading,
  text = `Tell us where you are. ${BLOG_CTA_REPLY_LINE}`,
  href = "/contact",
  buttonLabel = "Get In Touch",
}: CtaBandProps) {
  return (
    <section className="blog-cta-band">
      <div className="blog-cta-band__inner">
        <h2 className="blog-cta-band__heading">{heading}</h2>
        <p className="blog-cta-band__text">{text}</p>
        <Link href={href} className="blog-btn-white">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
