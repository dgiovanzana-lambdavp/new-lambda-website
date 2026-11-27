/**
 * Privacy Policy and Terms of Service copy.
 * Single source for HTML pages and agent markdown export.
 */

export const LEGAL_OPERATOR = "Lambda Capital Management LLC";
export const LEGAL_GOVERNING_LAW = "New Mexico";
export const LEGAL_EFFECTIVE_DATE = "November 26, 2026";
export const LEGAL_CONTACT_EMAIL = "info@lambdavp.com";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `${LEGAL_OPERATOR}, a New Mexico limited liability company ("Lambda Capital," "we," or "us"), operates the website at lambdavp.com. This Privacy Policy explains what information the site collects and how we use it.`,
      `Effective date: ${LEGAL_EFFECTIVE_DATE}.`,
    ],
  },
  {
    id: "analytics",
    title: "Site analytics (PostHog)",
    paragraphs: [
      "When configured in our hosting environment, the site loads PostHog analytics (posthog-js). PostHog may use cookies or similar browser storage and collect information such as pages viewed, referring URLs, device and browser characteristics, and general location inferred from IP address.",
      "We send custom pageview events on each navigation, including path, full page URL, and blog section tags where applicable. Automatic PostHog autocapture is disabled.",
      "On marketing pages, session replay stays off. When you start the contact funnel, the site identifies your funnel session in PostHog and may enable session replay for that funnel visit only.",
      "PostHog may also receive first-touch marketing attribution stored in your browser session (UTM parameters, referrer, and landing path) when events are sent.",
      "Server-side code may query PostHog feature flags when scoring founder contact submissions. That uses our PostHog project credentials on the server; it does not add new browser tracking beyond what PostHog already receives from the site.",
      "You may opt out of PostHog capture on this browser by visiting any page with ?internal=1 in the query string. That choice is stored in local storage and persists until you clear site data.",
    ],
  },
  {
    id: "contact-form",
    title: "Contact and application forms",
    paragraphs: [
      "If you use the contact flow at /contact, your answers are submitted to our server at POST /api/leads. Depending on the path you choose, fields may include:",
    ],
    bullets: [
      "Persona (founder, investor/LP, services, or general).",
      "Contact details: first name, last name, email, optional phone, optional company name, and optional company website URL.",
      "Funnel answers you provide (for example focus area, revenue band, profitability, investor type, free-text notes, and how you heard about us). The exact questions depend on your persona and progress through the flow.",
      "Marketing attribution: UTM fields, referrer, landing path, and your answer to how you heard about us.",
      "Technical metadata: submission timestamp, steps completed, whether the submission is partial, and a session UUID used to correlate analytics and database records.",
      "Anti-spam signals checked by the server (honeypot field and minimum time on the form) that are not stored.",
    ],
  },
  {
    id: "storage",
    title: "How we store and use form data",
    paragraphs: [
      "Complete and partial submissions are stored in our PostgreSQL database when DATABASE_URL is configured for the environment.",
      "We send internal notification emails about submissions through Resend when RESEND_API_KEY and notification recipients are configured.",
      "We use the information to respond to inquiries, evaluate opportunities described on the site, and understand how visitors find us. We do not use the contact flow for payments or user accounts.",
    ],
  },
  {
    id: "booking",
    title: "Scheduling",
    paragraphs: [
      "Qualified founder flows may show an embedded Google Appointment Schedule booking page or another scheduling link we provide. Those embeds are served by Google or the scheduling provider you interact with directly.",
      "Our server may receive Cal.com webhook notifications when CAL_WEBHOOK_SECRET is configured, including booking identifiers and session metadata we attached when generating the booking link.",
    ],
  },
  {
    id: "browser-storage",
    title: "Browser storage on your device",
    paragraphs: [
      "The contact funnel stores first-touch attribution in session storage for the duration of your browser session.",
      "PostHog is configured with in-memory persistence by default for general browsing.",
      "The internal traffic opt-out flag described above uses local storage.",
    ],
  },
  {
    id: "rate-limit",
    title: "Security and rate limiting",
    paragraphs: [
      "Our API routes derive a client IP address from request headers for rate limiting on /api/leads. We use that to throttle abusive traffic.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact us",
    paragraphs: [
      `Questions about this policy may be sent to ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    paragraphs: [
      `${LEGAL_OPERATOR} ("Lambda Capital," "we," or "us") provides lambdavp.com (the "Site"). By using the Site, you agree to these Terms of Service. Effective date: ${LEGAL_EFFECTIVE_DATE}.`,
    ],
  },
  {
    id: "about",
    title: "About Lambda Capital",
    paragraphs: [
      "Lambda Capital is a permanent capital holding company. Site content describes our business and portfolio in general terms. Nothing on the Site creates a client, advisory, or investor relationship by itself.",
    ],
  },
  {
    id: "no-offer",
    title: "Not an offer; not investment advice",
    paragraphs: [
      "Nothing on the Site is an offer to sell or a solicitation of an offer to buy any security or investment interest. Nothing here is investment, legal, tax, or accounting advice. You should consult your own advisors before making financial decisions.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: [
      "You may use the Site for lawful purposes only. You may not attempt to disrupt the Site, probe our systems without permission, or submit false or misleading information through our forms.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    paragraphs: [
      "The Site links to third-party websites and may embed third-party scheduling or analytics tools. Those services are governed by their own terms and privacy practices.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimers",
    paragraphs: [
      'The Site and its content are provided "as is." We disclaim warranties to the fullest extent permitted by law.',
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Lambda Capital is not liable for any indirect or consequential damages arising from your use of the Site.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      `These Terms are governed by the laws of the State of ${LEGAL_GOVERNING_LAW}, without regard to conflict-of-law rules.`,
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update these Terms by posting a revised version on the Site. Continued use after changes means you accept the updated Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      `Questions about these Terms may be sent to ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
];

function sectionsToMarkdown(title: string, sections: LegalSection[]): string {
  const lines = [`# ${title}`, "", `Effective date: ${LEGAL_EFFECTIVE_DATE}.`, ""];
  for (const section of sections) {
    lines.push(`## ${section.title}`, "");
    for (const p of section.paragraphs) {
      lines.push(p, "");
    }
    if (section.bullets?.length) {
      for (const b of section.bullets) {
        lines.push(`- ${b}`);
      }
      lines.push("");
    }
  }
  lines.push(
    "",
    `Operator: ${LEGAL_OPERATOR}, a New Mexico limited liability company.`,
  );
  return lines.join("\n").trim();
}

export function privacyMarkdown(): string {
  return sectionsToMarkdown("Privacy Policy", privacySections);
}

export function termsMarkdown(): string {
  return sectionsToMarkdown("Terms of Service", termsSections);
}

/** Reject em dash and en dash in legal copy (tests and CI guard). */
export function assertNoDashCharacters(text: string): void {
  if (/[\u2013\u2014]/.test(text)) {
    throw new Error("Legal copy must not contain em or en dashes");
  }
}