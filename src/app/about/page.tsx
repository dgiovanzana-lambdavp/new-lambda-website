import type { Metadata } from "next";
import AboutPage from "./AboutPage";
import {
  LAMBDA_GROWTH_CAPITAL_DESCRIPTION,
  LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
} from "@/config/cta";

export const metadata: Metadata = {
  title: "About | Lambda Capital",
  description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Lambda Capital",
    description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
    url: "/about",
  },
  twitter: {
    description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
  },
};

export default function Page() {
  return <AboutPage />;
}
