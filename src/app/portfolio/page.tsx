import type { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio | Lambda Capital",
  description:
    "Lambda Capital takes a concentrated approach to its portfolio, investing in a small number of vertical software companies each year and partnering closely on growth.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Lambda Capital",
    description:
      "Lambda Capital takes a concentrated approach to its portfolio, investing in a small number of vertical software companies each year and partnering closely on growth.",
    url: "/portfolio",
  },
};

export default function Page() {
  return <PortfolioPage />;
}
