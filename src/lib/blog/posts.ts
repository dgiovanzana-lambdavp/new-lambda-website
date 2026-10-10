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

export const ALL_POSTS: BlogPostMeta[] = [GOVTECH_POST];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
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
