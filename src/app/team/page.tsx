import type { Metadata } from "next";
import TeamPage from "./TeamPage";
import { LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT } from "@/config/cta";

const TEAM_DESCRIPTION = `Meet the Lambda Capital team. Deep technical expertise with operational and strategic experience. ${LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT}`;

export const metadata: Metadata = {
  title: "Team | Lambda Capital",
  description: TEAM_DESCRIPTION,
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team | Lambda Capital",
    description: TEAM_DESCRIPTION,
    url: "/team",
  },
};

export default function Page() {
  return <TeamPage />;
}
