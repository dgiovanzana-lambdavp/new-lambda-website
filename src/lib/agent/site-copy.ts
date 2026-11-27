import { focusAreas, portfolioCompanies, teamMembers } from "@/lib/data";

/** Shared prose for HTML and agent markdown (single source). */

export const homeTagline = "Growth capital investments in vertical software";

export const homeMissionTitle = "Permanent, Patient Capital";

export const homeMissionBody =
  "Lambda Capital is a permanent capital holding company. We take a patient approach and invest for the long term.";

export const homeFocusIntro =
  "Lambda Capital invests in vertical market technology. Our portfolio is purposefully concentrated, enabling us to provide deep expertise and strategic value to our portfolio companies.";

export const homeCta =
  "If you're building vertical software in our focus areas, Lambda Capital would love to hear from you.";

export const aboutTaglines = [
  "We buy and build profitable niche software businesses.",
  "We provide flexible capital and operator-first execution.",
  "We move quickly. We prefer clarity over noise.",
] as const;

export const aboutWhatWeDo = [
  "We deploy patient, pragmatic capital across companies and situations where others overcomplicate the deal.",
  "We work with companies that want an honest buyer and with teams who need a partner that can operate and scale revenue.",
  "We invest across structures and stages. The details depend on the opportunity.",
] as const;

export const aboutWhatWeLookFor = [
  "Vertical software and recurring-revenue businesses.",
  "Clear product-market fit in a definable niche.",
  "Predictable cash flow or a visible path to it.",
  "Teams willing to hand off day-to-day or partner on growth.",
] as const;

export const whatWeFundSummary = `Lambda Capital is a permanent capital holding company that invests in and acquires profitable software companies serving niche industries. Lines of business include growth capital for profitable bootstrapped B2B software companies, and GovTech/SLED contract funding as one line among others.`;

export function teamMarkdown(): string {
  const lines = [
    "# Meet Our Team",
    "",
    "The Lambda Capital team combines deep technical expertise with operational and strategic experience.",
    "",
  ];
  for (const member of teamMembers) {
    lines.push(`## ${member.name}`);
    lines.push(`**${member.title}**${member.subtitle ? ` (${member.subtitle})` : ""}`);
    lines.push("");
    lines.push(member.bio.replace(/\n/g, "\n\n"));
    if (member.email) lines.push("", `Email: ${member.email}`);
    if (member.linkedin) lines.push(`LinkedIn: ${member.linkedin}`);
    lines.push("");
  }
  return lines.join("\n").trim();
}

export function homeMarkdown(): string {
  const lines = [
    `# Lambda Capital`,
    "",
    homeTagline,
    "",
    `## ${homeMissionTitle}`,
    "",
    homeMissionBody,
    "",
    "## Focus areas",
    "",
    homeFocusIntro,
    "",
    ...focusAreas.flatMap((area) => [
      `### ${area.title}`,
      "",
      area.description,
      "",
    ]),
    "## Portfolio preview",
    "",
    ...portfolioCompanies.map(
      (c) =>
        `- **${c.name}** (${c.category}): ${c.description} [${c.website}](${c.website})`,
    ),
    "",
    "## Contact",
    "",
    homeCta,
    "",
    "[Apply for funding](https://www.lambdavp.com/contact)",
  ];
  return lines.join("\n").trim();
}

export function aboutMarkdown(): string {
  const lines = [
    "# We Buy and Build Profitable Businesses",
    "",
    ...aboutTaglines.map((t) => `- ${t}`),
    "",
    "## What we do",
    "",
    ...aboutWhatWeDo.map((t) => `- ${t}`),
    "",
    "## What we look for",
    "",
    ...aboutWhatWeLookFor.map((t) => `- ${t}`),
    "",
    `[Apply for funding](https://www.lambdavp.com/contact)`,
  ];
  return lines.join("\n").trim();
}

export function whatWeFundMarkdown(): string {
  return [
    "# What we fund and how it works",
    "",
    whatWeFundSummary,
    "",
    "## Growth capital",
    "",
    "We back profitable bootstrapped B2B software companies in vertical niches where the product is mission-critical and cash flows are real.",
    "",
    "## Acquisitions and buy-and-build",
    "",
    ...aboutTaglines.map((t) => `- ${t}`),
    "",
    "## GovTech and SLED contract funding",
    "",
    "Government and public-sector software is one focus area among several. We help vendors bridge the cash gap between contract award and payment with contract-backed capital, not as a standalone GovTech-only mandate.",
    "",
    "## What we look for",
    "",
    ...aboutWhatWeLookFor.map((t) => `- ${t}`),
    "",
    "[Start an application](https://www.lambdavp.com/contact)",
  ]
    .join("\n")
    .trim();
}

export function contactMarkdown(): string {
  return [
    "# Contact Lambda Capital",
    "",
    "Tell us who you are and we will route you to the right conversation.",
    "",
    "## Founders",
    "",
    "If you are raising growth capital for a profitable vertical software company, start at [https://www.lambdavp.com/contact](https://www.lambdavp.com/contact).",
    "",
    "## General",
    "",
    "Reach the team via the contact form on the site or email addresses listed on the [team page](https://www.lambdavp.com/team).",
  ]
    .join("\n")
    .trim();
}