import {
  BLOG_AUTHOR,
  BLOG_PUBLISH_DATE,
  BLOG_SITE_ORIGIN,
} from "@/config/blog";
import { slugifyHeading } from "./slugify";
import type { BlogHeading, BlogPostMeta, FaqItem } from "./types";

const SLUG = "government-contract-financing-for-software-companies";

const H2_TEXTS = [
  "Why government customers pay late even with a signed contract",
  "How big is your cash gap? A worked example",
  "Your financing options, compared",
  "Can you assign a government contract's payments to a lender?",
  "Factoring vs early payment vs contract-backed capital: which should a GovTech vendor choose?",
  "How to negotiate and structure contracts to shrink the gap",
  "What Lambda Capital offers GovTech software companies",
  "Frequently asked questions",
] as const;

export const POST_HEADINGS: BlogHeading[] = H2_TEXTS.map((text) => ({
  id: slugifyHeading(text),
  text,
}));

export const GOVTECH_POST: BlogPostMeta = {
  slug: SLUG,
  metaTitle: "Government Contract Financing for Software Companies",
  h1: "Government Contract Financing for Software Companies: How to Fund the Gap Between Award and Payment",
  description:
    "For GovTech and SLED software vendors with signed contracts and slow payments: compare early payment, factoring, credit lines, and contract-backed capital.",
  category: "Growth capital",
  readingTimeMinutes: 13,
  date: BLOG_PUBLISH_DATE,
  updated: BLOG_PUBLISH_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-govtech-hero.jpg",
  ogImage: `/og/blog-${SLUG}.jpg`,
  breadcrumbsTitle: "Government Contract Financing for Software Companies",
};

const PROMPT_PAYMENT_SLUG = "prompt-payment-laws-govtech-software-vendors";

const PROMPT_PAYMENT_H2_TEXTS = [
  "The federal rule in plain English",
  'The "proper invoice" trap',
  "When interest does not apply: disputes and withholdings",
  "Faster than 30 days: accelerated payment for small businesses",
  "State and local rules vary: five states compared",
  "What interest actually recovers",
  "A practical playbook when an agency or city pays late",
  "What the law does not fix: the cash gap",
  "Frequently asked questions",
] as const;

export const PROMPT_PAYMENT_HEADINGS: BlogHeading[] = PROMPT_PAYMENT_H2_TEXTS.map(
  (text) => ({
    id: slugifyHeading(text),
    text,
  }),
);

export const PROMPT_PAYMENT_POST: BlogPostMeta = {
  slug: PROMPT_PAYMENT_SLUG,
  metaTitle:
    "Prompt Payment Act: What GovTech Vendors Can Collect When Government Pays Late",
  h1: "When the Government Pays Late: Prompt Payment Laws Every GovTech Software Vendor Should Know",
  description:
    "How the federal Prompt Payment Act and state laws in Minnesota, Virginia, New Jersey, Florida and Texas treat late payment to software vendors, what interest you can claim, and how to bridge the gap.",
  category: "Growth capital",
  readingTimeMinutes: 12,
  date: BLOG_PUBLISH_DATE,
  updated: BLOG_PUBLISH_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-prompt-payment-hero.jpg",
  ogImage: `/og/blog-${PROMPT_PAYMENT_SLUG}.jpg`,
  breadcrumbsTitle: "Prompt Payment Laws for GovTech Vendors",
};

export const ALL_POSTS: BlogPostMeta[] = [PROMPT_PAYMENT_POST, GOVTECH_POST];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}

export function getHeadingsForSlug(slug: string): BlogHeading[] {
  if (slug === SLUG) return POST_HEADINGS;
  if (slug === PROMPT_PAYMENT_SLUG) return PROMPT_PAYMENT_HEADINGS;
  return [];
}

export function getFaqJsonLdForSlug(slug: string): object | null {
  if (slug === SLUG) return GOVTECH_FAQ_JSON_LD;
  if (slug === PROMPT_PAYMENT_SLUG) return PROMPT_PAYMENT_FAQ_JSON_LD;
  return null;
}

export function getNewestPost(): BlogPostMeta {
  return [...ALL_POSTS].sort((a, b) => b.date.localeCompare(a.date))[0];
}

export function formatShortDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatLongDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function postCanonical(slug: string): string {
  return `${BLOG_SITE_ORIGIN}/blog/${slug}`;
}

export function blogIndexCanonical(): string {
  return `${BLOG_SITE_ORIGIN}/blog`;
}

/** Visible FAQ copy from the draft. JSON-LD answers match in meaning. */
export const GOVTECH_FAQ: FaqItem[] = [
  {
    question:
      "Can a software company get financing against a signed government contract?",
    answer:
      "Yes. Pre-invoice options include contract-backed loans, purchase order or work order financing, and existing working capital lines. Invoice factoring and early payment programs generally need a submitted or approved invoice. Lenders underwriting a signed contract typically look at funded scope, your ability to deliver, gross margin, and the source of repayment.",
  },
  {
    question:
      "How long do state and local governments actually take to pay software vendors?",
    answer:
      'It varies by agency. Lunch reports most municipalities set net 30 to net 60 terms, but actual payment "can take 60-90+ days once internal approvals and processing are factored in." Add implementation time before your first invoice. Plan with each agency\'s real payment history, not the contract\'s stated terms.',
  },
  {
    question:
      "What is the difference between early payment programs and invoice factoring?",
    answer:
      "Early payment programs buy invoices an agency has already approved, through a program the agency participates in, usually for a flat fee per invoice. Factoring is a facility the vendor sets up with a factor, often with fees that grow with time outstanding. Flexent quotes 1% to 4% of invoice value per 30 days (as of Oct 2026, a provider marketing figure).",
  },
  {
    question: "Can SaaS companies use invoice factoring on government contracts?",
    answer:
      "Yes, but it fits best on large one-time invoices such as implementation, integration, or license fees. LaunchAdvisor says factoring has limited use for core subscription revenue. Recurring revenue is usually better served by an ARR-based line of credit or a loan sized against contracted revenue. Check your contract's assignment clause first.",
  },
  {
    question: "Is government contract financing debt?",
    answer:
      "It depends on the structure. Early payment programs and factoring are usually described by providers as purchases of your receivables, not loans. Lines of credit, ARR lines, and contract-backed term loans are debt. Read the term sheet for recourse, personal guarantees, minimums, and warrants before you decide which you prefer.",
  },
  {
    question: "Can I assign my government contract payments to a lender?",
    answer:
      "On federal contracts, yes, if the Assignment of Claims Act conditions in FAR 32.802 are met, including assignment to a bank or other financing institution and written notice to the contracting officer, surety, and disbursing officer. On state and local contracts, it depends on the jurisdiction and your contract's assignment clause, so ask counsel.",
  },
  {
    question: "What happens if the government pays late?",
    answer:
      "Many states have prompt payment laws that require interest on late payments. New York, for example, requires state agencies to pay most vendors within 30 days, with interest possible after the due date. Minnesota sets 35 or 45 day standards for municipalities. Each law has its own deadlines and claim steps, so check yours.",
  },
  {
    question:
      "How do I avoid running out of cash on a Net 90 or Net 180 contract?",
    answer:
      "Build a weekly cash forecast using each agency's real payment history and find your lowest projected balance. Negotiate milestone or monthly billing, ask whether the agency runs an early payment program, price the cost of waiting into your bid, and put a financing facility in place before you sign, not after payroll is at risk.",
  },
];

/**
 * FAQPage JSON-LD from the draft, pasted as-is.
 * Answers match the visible FAQ in meaning (wording may differ slightly).
 */
export const GOVTECH_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a software company get financing against a signed government contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pre-invoice options include contract-backed loans, purchase order or work order financing, and existing working capital lines. Invoice factoring and early payment programs generally need a submitted or approved invoice. Lenders underwriting a signed contract typically look at funded scope, your ability to deliver, gross margin, and the source of repayment.",
      },
    },
    {
      "@type": "Question",
      name: "How long do state and local governments actually take to pay software vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by agency. Lunch reports most municipalities set net 30 to net 60 terms, but actual payment can take 60 to 90 or more days once internal approvals and processing are factored in. Add implementation time before your first invoice. Plan with each agency's real payment history, not the contract's stated terms.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between early payment programs and invoice factoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early payment programs buy invoices an agency has already approved, through a program the agency participates in, usually for a flat fee per invoice. Factoring is a facility the vendor sets up with a factor, often with fees that grow with time outstanding. Flexent quotes 1% to 4% of invoice value per 30 days (as of Oct 2026, a provider marketing figure).",
      },
    },
    {
      "@type": "Question",
      name: "Can SaaS companies use invoice factoring on government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but it fits best on large one-time invoices such as implementation, integration, or license fees. LaunchAdvisor says factoring has limited use for core subscription revenue. Recurring revenue is usually better served by an ARR-based line of credit or a loan sized against contracted revenue. Check your contract's assignment clause first.",
      },
    },
    {
      "@type": "Question",
      name: "Is government contract financing debt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the structure. Early payment programs and factoring are usually described by providers as purchases of your receivables, not loans. Lines of credit, ARR lines, and contract-backed term loans are debt. Read the term sheet for recourse, personal guarantees, minimums, and warrants before you decide which you prefer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I assign my government contract payments to a lender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On federal contracts, yes, if the Assignment of Claims Act conditions in FAR 32.802 are met, including assignment to a bank or other financing institution and written notice to the contracting officer, surety, and disbursing officer. On state and local contracts, it depends on the jurisdiction and your contract's assignment clause, so ask counsel.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the government pays late?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many states have prompt payment laws that require interest on late payments. New York, for example, requires state agencies to pay most vendors within 30 days, with interest possible after the due date. Minnesota sets 35 or 45 day standards for municipalities. Each law has its own deadlines and claim steps, so check yours.",
      },
    },
    {
      "@type": "Question",
      name: "How do I avoid running out of cash on a Net 90 or Net 180 contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build a weekly cash forecast using each agency's real payment history and find your lowest projected balance. Negotiate milestone or monthly billing, ask whether the agency runs an early payment program, price the cost of waiting into your bid, and put a financing facility in place before you sign, not after payroll is at risk.",
      },
    },
  ],
} as const;

export const PROMPT_PAYMENT_FAQ: FaqItem[] = [
  {
    question:
      "How long does the federal government have to pay a vendor under the Prompt Payment Act?",
    answer:
      "Generally the later of 30 days after the billing office receives a proper invoice or 30 days after the government accepts the goods or services. If the contract specifies a payment date, that date governs. The clock only starts once the agency has a proper invoice with all required information.",
  },
  {
    question:
      "Do I have to ask the federal government for late payment interest?",
    answer:
      "No. Under FAR 52.232-25 the payment office pays the interest penalty automatically if payment is late and the clause's conditions are met. If you believe an additional penalty is owed, you must make a written demand postmarked no later than 40 days after the invoice amount is paid.",
  },
  {
    question: "What is the Prompt Payment Act interest rate in 2026?",
    answer:
      "The Bureau of the Fiscal Service lists 4.75% for July 1 through December 31, 2026. Treasury publishes the rate by period, so check the rate in effect when your invoice became late, and use Treasury's prompt payment calculator for the exact figure.",
  },
  {
    question: 'What makes an invoice "improper" under the federal rules?',
    answer:
      "An invoice missing information the agency requires is improper. The agency must return it no later than 7 days after receipt, explain the defects and request a corrected invoice. Interest only becomes due after the payment period runs on the corrected invoice. Incorrect EFT information can also make an invoice improper.",
  },
  {
    question: "Does a dispute stop late payment interest?",
    answer:
      "Usually, yes. Federal rules do not require interest when the delay comes from disagreement over the payment amount or contract compliance, or from amounts withheld under the contract. Minnesota also limits interest during disputes, and other states have their own rules. Check your statute and contract for how disputes are handled.",
  },
  {
    question:
      "Do state and local governments have prompt payment laws for software vendors?",
    answer:
      "Many do, and they vary. Minnesota, Virginia, New Jersey, Texas and Florida all have statutes covering vendor payments, with different deadlines, interest rates and claim steps. Some apply to state agencies and some to localities. Always read your state's statute and your contract's payment terms.",
  },
  {
    question: "Can I stop work if a government customer does not pay?",
    answer:
      "It depends on state law and your contract. Texas, for example, lets a vendor suspend performance when an undisputed amount goes unpaid, after written notice and no earlier than the 10th day after that notice. Many states have no such right. Talk to counsel before suspending any service.",
  },
  {
    question:
      "Is late payment interest enough to cover the cost of waiting for government payment?",
    answer:
      "In my view, rarely. Interest accrues only after the due date, is paid with the late payment rather than during the wait, and usually stops during disputes. It does not fund payroll or hosting while you wait, which is why many vendors pair it with early payment programs or contract-backed financing.",
  },
];

/** FAQPage JSON-LD from the draft; answers match the visible FAQ. */
export const PROMPT_PAYMENT_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PROMPT_PAYMENT_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
} as const;
