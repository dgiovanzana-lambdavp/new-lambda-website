import type { Metadata } from "next";
import TeamPage from "./TeamPage";

export const metadata: Metadata = {
  title: "Team | Lambda Capital",
  description:
    "Meet the Lambda Capital team. Deep technical expertise with operational and strategic experience at a permanent capital holding company.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team | Lambda Capital",
    description:
      "Meet the Lambda Capital team. Deep technical expertise with operational and strategic experience at a permanent capital holding company.",
    url: "/team",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <TeamPage />;
}
