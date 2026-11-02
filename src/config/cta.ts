/**
 * Cleared growth-capital CTA copy (Critiquito CLEAR, Nov 1 2026).
 *
 * Growth capital only. No buying, selling, succession, exit, or
 * "permanent home" wording.
 */

export const FOUNDER_CONTACT_HREF = "/contact/founder" as const;

/** Site-wide Lambda voice (growth capital only). */
export const LAMBDA_GROWTH_CAPITAL_DESCRIPTION =
  "Lambda Capital provides growth capital to profitable, bootstrapped vertical software companies, so founders can fund their next hires, contracts or products without raising venture capital." as const;

export const LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT =
  "Lambda Capital provides growth capital to profitable software companies in vertical markets." as const;

export const LAMBDA_ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lambda Capital",
  url: "https://www.lambdavp.com",
  description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
  logo: "https://www.lambdavp.com/Capital%20-%20Black%20Long.png",
} as const;

export const HOME_HERO_COPY = {
  brand: "Lambda Capital",
  headline: "Growth capital for profitable software companies.",
  subhead:
    "Fund your next hires, contract or product without raising venture capital.",
  buttonLabel: "Talk to Domenic (20 min)",
  href: FOUNDER_CONTACT_HREF,
} as const;

export const OWNER_CTA_COPY = {
  heading: "Run a profitable software company?",
  text: "Talk to Domenic for 20 minutes about funding your next stage.",
  buttonLabel: "Talk to Domenic (20 min)",
  href: FOUNDER_CONTACT_HREF,
} as const;
