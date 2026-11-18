const SITE_ORIGIN = "https://www.lambdavp.com";

const DOMENIC_PERSON_ID = `${SITE_ORIGIN}/team#domenic-giovanzana`;
const LAMBDA_ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

/** LinkedIn is linked from team data; no other personal profile URLs appear on the site. */
const DOMENIC_SAME_AS = ["https://www.linkedin.com/in/dgiovanzana"] as const;

const DOMENIC_HEADSHOT_PATH = "/headshots/domenic-giovanzana.webp";

export const domenicHeadshotUrl = `${SITE_ORIGIN}${DOMENIC_HEADSHOT_PATH}`;

export function getTeamPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": DOMENIC_PERSON_ID,
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
        url: `${SITE_ORIGIN}/team`,
        image: domenicHeadshotUrl,
        sameAs: [...DOMENIC_SAME_AS],
        worksFor: {
          "@type": "Organization",
          "@id": LAMBDA_ORGANIZATION_ID,
          name: "Lambda Capital",
        },
      },
      {
        "@type": "Organization",
        "@id": LAMBDA_ORGANIZATION_ID,
        name: "Lambda Capital",
        url: SITE_ORIGIN,
        founder: {
          "@id": DOMENIC_PERSON_ID,
        },
      },
    ],
  };
}