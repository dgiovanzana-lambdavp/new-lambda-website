import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

const canonical = absoluteUrl("/about");

export const metadata: Metadata = {
  alternates: { canonical },
  openGraph: { url: canonical },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
