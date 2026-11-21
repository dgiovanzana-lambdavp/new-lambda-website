import type { Metadata } from "next";
import TeamPage from "./TeamPage";
import { getTeamPageJsonLd } from "@/lib/team-jsonld";

const teamPageJsonLd = getTeamPageJsonLd();

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
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <TeamPage />
    </>
  );
}
