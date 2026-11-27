import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { privacySections } from "@/lib/legal/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Lambda Capital",
  description:
    "Privacy Policy for lambdavp.com, operated by Lambda Capital Management LLC.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Lambda Capital",
    description:
      "Privacy Policy for lambdavp.com, operated by Lambda Capital Management LLC.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" sections={privacySections} />;
}