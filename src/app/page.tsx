import type { Metadata } from "next";
import HomePage from "./HomePage";
import { BLOG_SITE_ORIGIN } from "@/config/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lambda Capital",
  url: BLOG_SITE_ORIGIN,
  logo: `${BLOG_SITE_ORIGIN}/android-chrome-512x512.png`,
  description:
    "Lambda Capital is a permanent capital holding company investing in vertical market technology that strengthens national security and core sectors of the economy.",
  email: "info@lambdavp.com",
  sameAs: ["https://www.linkedin.com/company/lambda-capital-management/"],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
