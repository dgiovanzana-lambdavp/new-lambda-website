import type { LeadSubmission } from "./types";

/**
 * Consumer inboxes whose domain is not a company website.
 *
 * `jane@acme.com` can reasonably become `https://acme.com`.
 * `jane@gmail.com` cannot: that would store Google as the company site.
 */
const PUBLIC_EMAIL_DOMAINS = new Set([
  "aol.com",
  "fastmail.com",
  "gmail.com",
  "gmx.com",
  "gmx.net",
  "googlemail.com",
  "hey.com",
  "hotmail.com",
  "icloud.com",
  "live.com",
  "mac.com",
  "mail.com",
  "me.com",
  "msn.com",
  "outlook.com",
  "pm.me",
  "proton.me",
  "protonmail.com",
  "tutanota.com",
  "yahoo.co.uk",
  "yahoo.com",
  "yandex.com",
  "yandex.ru",
  "zoho.com",
]);

const PLACEHOLDER_URLS = new Set(["", "http:", "https:", "http://", "https://"]);

function isBlankCompanyUrl(value: string | undefined): boolean {
  if (value == null) return true;
  return PLACEHOLDER_URLS.has(value.trim().toLowerCase());
}

/**
 * Derive `https://{domain}` from an email address, or undefined when
 * the domain is missing, malformed, or a public inbox.
 */
export function companyUrlFromEmail(email: string): string | undefined {
  const at = email.lastIndexOf("@");
  if (at <= 0 || at === email.length - 1) return undefined;

  let domain = email.slice(at + 1).trim().toLowerCase();
  if (domain.endsWith(".")) domain = domain.slice(0, -1);

  if (!domain.includes(".") || PUBLIC_EMAIL_DOMAINS.has(domain)) {
    return undefined;
  }

  // Hostnames only: letters, digits, dots, hyphens. Anything else is
  // not a site we should persist as the company URL.
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(domain)) {
    return undefined;
  }

  return `https://${domain}`;
}

/**
 * Fill `contact.companyUrl` from the email domain when the visitor
 * left the optional website field empty. Never overwrites a value they
 * actually typed.
 */
export function withInferredCompanyUrl(lead: LeadSubmission): LeadSubmission {
  if (!isBlankCompanyUrl(lead.contact.companyUrl)) return lead;

  const inferred = companyUrlFromEmail(lead.contact.email);
  if (!inferred) return lead;

  return {
    ...lead,
    contact: { ...lead.contact, companyUrl: inferred },
  };
}
