import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { termsSections } from "@/lib/legal/content";

export const metadata: Metadata = {
  title: "Terms of Service | Lambda Capital",
  description:
    "Terms of Service for lambdavp.com, operated by Lambda Capital Management LLC.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Lambda Capital",
    description:
      "Terms of Service for lambdavp.com, operated by Lambda Capital Management LLC.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return <LegalDocument title="Terms of Service" sections={termsSections} />;
}