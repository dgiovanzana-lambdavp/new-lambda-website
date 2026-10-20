import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Growth capital for software companies at $2M-$10M revenue | Lambda Capital",
  description:
    "Lambda Capital provides growth capital and hands-on help to US software companies at roughly $2M-$10M revenue. Permanent capital. Concentrated partnership.",
  alternates: { canonical: "/growth-capital" },
  openGraph: {
    title:
      "Growth capital for software companies at $2M-$10M revenue | Lambda Capital",
    description:
      "Lambda Capital provides growth capital and hands-on help to US software companies at roughly $2M-$10M revenue. Permanent capital. Concentrated partnership.",
    url: "https://www.lambdavp.com/growth-capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Growth capital for software companies at $2M-$10M revenue | Lambda Capital",
    description:
      "Lambda Capital provides growth capital and hands-on help to US software companies at roughly $2M-$10M revenue. Permanent capital. Concentrated partnership.",
  },
};

export default function GrowthCapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
