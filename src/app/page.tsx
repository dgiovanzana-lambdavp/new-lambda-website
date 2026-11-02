import type { Metadata } from "next";
import HomePage from "./HomePage";
import { LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT } from "@/config/cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
  },
  twitter: {
    description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
  },
};

export default function Page() {
  return <HomePage />;
}
