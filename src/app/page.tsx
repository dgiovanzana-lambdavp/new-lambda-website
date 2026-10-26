import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
