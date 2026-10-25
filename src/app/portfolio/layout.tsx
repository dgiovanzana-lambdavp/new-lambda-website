import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

const canonical = absoluteUrl("/portfolio");

export const metadata: Metadata = {
  alternates: { canonical },
  openGraph: { url: canonical },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
