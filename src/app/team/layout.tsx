import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

const canonical = absoluteUrl("/team");

export const metadata: Metadata = {
  alternates: { canonical },
  openGraph: { url: canonical },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
