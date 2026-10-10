import Link from "next/link";

type InlineCtaProps = {
  href?: string;
};

export default function InlineCta({ href = "/contact" }: InlineCtaProps) {
  return (
    <aside className="blog-inline-cta" aria-label="Contact Lambda Capital">
      <p>
        Waiting on a government payment cycle? We invest in vertical software
        companies and can talk through what fits.
      </p>
      <Link href={href} className="blog-inline-cta__link">
        Talk to us →
      </Link>
    </aside>
  );
}
