import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About | Lambda Capital",
  description:
    "Lambda Capital is a permanent capital holding company. We buy and build profitable niche software businesses with patient capital and operator-first execution.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Lambda Capital",
    description:
      "Lambda Capital is a permanent capital holding company. We buy and build profitable niche software businesses with patient capital and operator-first execution.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
