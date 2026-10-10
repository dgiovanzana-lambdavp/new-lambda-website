/**
 * Blog publish configuration.
 *
 * PUBLISH_DATE_PLACEHOLDER: set `BLOG_PUBLISH_DATE` to the go-live day
 * before publishing. The draft used 2026-10-10 as a working date only.
 * Do not treat that value as final until Domenic confirms go-live.
 */
export const BLOG_PUBLISH_DATE = "2026-10-10"; // PLACEHOLDER: replace with go-live date

export const BLOG_SITE_ORIGIN = "https://lambdavp.com";

export const BLOG_AUTHOR = {
  name: "Domenic Giovanzana",
  role: "Founder and General Partner",
  /** Locked byline: "Domenic Giovanzana, Founder and General Partner" */
  byline: "Domenic Giovanzana, Founder and General Partner",
  bio: "Domenic is the founder and general partner of Lambda Capital, where he invests in technology companies building for the long term.",
  headshot: "/blog/domenic-giovanzana.jpg",
  teamHref: "/team",
} as const;

export const BLOG_CTA_REPLY_LINE =
  "We read every note and reply to founders directly.";
