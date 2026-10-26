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
  date: BLOG_PUBLISH_DATE,
  updated: BLOG_PUBLISH_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-prompt-payment-hero.jpg",
  ogImage: `/og/blog-${PROMPT_PAYMENT_SLUG}.jpg`,
  breadcrumbsTitle: "Prompt Payment Laws for GovTech Vendors",
};

const UPFRONT_PAYMENT_SLUG = "government-saas-upfront-payment";

const UPFRONT_PAYMENT_H2_TEXTS = [
  "Why billing in arrears hurts GovTech cash flow",
  "The federal rule: advance payments are restricted, but upfront SaaS is different",
  "The six GSA criteria: a checklist for your quote",
  "What GSA's ordering guidance adds",
  "Federal, state and local rules compared",
  "How to ask for upfront annual billing",
  "When upfront billing is not available: closing the cash gap",
  "Frequently asked questions",
] as const;

export const UPFRONT_PAYMENT_HEADINGS: BlogHeading[] =
  UPFRONT_PAYMENT_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const UPFRONT_PAYMENT_POST: BlogPostMeta = {
  slug: UPFRONT_PAYMENT_SLUG,
  metaTitle:
    "Can Government Customers Pay Your SaaS Subscription Upfront? A GovTech Vendor's Guide",
  h1: "Can Government Customers Pay Your SaaS Subscription Upfront? A GovTech Vendor's Guide",
  description:
    "Federal GSA guidance says upfront annual SaaS payment is not a prohibited advance payment. Here is what federal, state, and local rules allow and how to ask.",
  category: "Growth capital",
  date: BLOG_PUBLISH_DATE,
  updated: BLOG_PUBLISH_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-upfront-payment-hero.jpg",
  ogImage: `/og/blog-${UPFRONT_PAYMENT_SLUG}.jpg`,
  breadcrumbsTitle: "Government SaaS Upfront Payment",
};

const IMPLEMENTATION_MILESTONES_SLUG =
  "government-software-implementation-payment-milestones";

const IMPLEMENTATION_MILESTONES_DATE = "2026-10-13";

const IMPLEMENTATION_MILESTONES_H2_TEXTS = [
  "Why implementation is where the cash gap is widest",
  "How state and local agencies structure implementation payments",
  "What is negotiable: a vendor playbook",
  "Federal contracts: commercial interim and advance payments, and performance-based payments",
  "When the schedule still leaves a gap",
  "Frequently asked questions",
] as const;

export const IMPLEMENTATION_MILESTONES_HEADINGS: BlogHeading[] =
  IMPLEMENTATION_MILESTONES_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const IMPLEMENTATION_MILESTONES_POST: BlogPostMeta = {
  slug: IMPLEMENTATION_MILESTONES_SLUG,
  metaTitle:
    "Getting Paid During Implementation: Milestones and Holdbacks on Government Software Contracts",
  h1: "Getting Paid During Implementation: Milestones and Holdbacks on Government Software Contracts",
  description:
    "In the government software contracts we reviewed, implementation is paid by accepted milestone minus a holdback. See real contract examples and what you can negotiate.",
  category: "Growth capital",
  date: IMPLEMENTATION_MILESTONES_DATE,
  updated: IMPLEMENTATION_MILESTONES_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-implementation-milestones-hero.jpg",
  ogImage: `/og/blog-${IMPLEMENTATION_MILESTONES_SLUG}.jpg`,
  breadcrumbsTitle: "Implementation Payment Milestones",
};

const VENTURE_DEBT_SLUG = "venture-debt-vs-venture-capital-govtech";

const VENTURE_DEBT_DATE = "2026-10-14";

const VENTURE_DEBT_H2_TEXTS = [
  "The three options in one sentence each",
  "Why venture debt may not be available to a bootstrapped GovTech company",
  "What lenders look at when your customers are governments",
  "When debt fits and when VC fits",
  "Venture capital, venture debt and loans with bullet payments compared",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const VENTURE_DEBT_HEADINGS: BlogHeading[] = VENTURE_DEBT_H2_TEXTS.map(
  (text) => ({
    id: slugifyHeading(text),
    text,
  }),
);

export const VENTURE_DEBT_POST: BlogPostMeta = {
  slug: VENTURE_DEBT_SLUG,
  metaTitle:
    "Venture Debt vs Venture Capital for GovTech: What You Give Up",
  h1: "Venture Debt vs Venture Capital for GovTech: What You Give Up",
  description:
    "Venture debt or venture capital? See which fits your GovTech software company and what each one asks you to give up.",
  category: "Growth capital",
  date: VENTURE_DEBT_DATE,
  updated: "2026-10-25",
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-venture-debt-hero.jpg",
  ogImage: `/og/blog-${VENTURE_DEBT_SLUG}.jpg`,
  breadcrumbsTitle: "Venture Debt vs Venture Capital",
};

const ASSIGNMENT_OF_CLAIMS_SLUG = "assignment-of-claims-act-govtech-software";

const ASSIGNMENT_OF_CLAIMS_DATE = "2026-10-16";

const ASSIGNMENT_OF_CLAIMS_H2_TEXTS = [
  "What the Assignment of Claims Act is",
  "The conditions an assignment has to meet",
  "How the process works, step by step",
  "What changes for your company after an assignment",
  "State and local contracts work differently",
  "How assignment fits with the payment wait",
  "Federal vs state and local assignment of contract payments",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const ASSIGNMENT_OF_CLAIMS_HEADINGS: BlogHeading[] =
  ASSIGNMENT_OF_CLAIMS_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const ASSIGNMENT_OF_CLAIMS_POST: BlogPostMeta = {
  slug: ASSIGNMENT_OF_CLAIMS_SLUG,
  metaTitle:
    "The Assignment of Claims Act Explained for GovTech Software Companies",
  h1: "The Assignment of Claims Act Explained",
  description:
    "What the Assignment of Claims Act is, how assigning federal contract payments works step by step, and how state and local software contracts differ.",
  category: "Growth capital",
  date: ASSIGNMENT_OF_CLAIMS_DATE,
  updated: ASSIGNMENT_OF_CLAIMS_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-assignment-of-claims-hero.jpg",
  ogImage: `/og/blog-${ASSIGNMENT_OF_CLAIMS_SLUG}.jpg`,
  breadcrumbsTitle: "Assignment of Claims Act",
};

const FINANCING_STRATEGY_SLUG = "software-company-financing-strategy";

const FINANCING_STRATEGY_DATE = "2026-10-18";

const FINANCING_STRATEGY_H2_TEXTS = [
  "Why your exit comes before your financing",
  "When venture capital fits, and when it does not",
  "The financing toolbelt: what each tool is",
  "Match the tool to your cash flow shape",
  "Where government payment timing fits",
  "Who gets paid first: the capital stack in one paragraph",
  "The Financing Toolbelt series",
  "What each tool is and when it is commonly used",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const FINANCING_STRATEGY_HEADINGS: BlogHeading[] =
  FINANCING_STRATEGY_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const FINANCING_STRATEGY_POST: BlogPostMeta = {
  slug: FINANCING_STRATEGY_SLUG,
  metaTitle: "Software Company Financing Strategy: Start With Your Exit",
  h1: "Start With Your Exit",
  description:
    "A software company financing strategy starts with your exit. How VC, loans, revolvers, factoring, revenue based financing, and preferred stock fit.",
  category: "Growth capital",
  date: FINANCING_STRATEGY_DATE,
  updated: FINANCING_STRATEGY_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-financing-strategy-hero.jpg",
  ogImage: `/og/blog-${FINANCING_STRATEGY_SLUG}.jpg`,
  breadcrumbsTitle: "Software Company Financing Strategy",
};

const VC_WRONG_CHOICE_SLUG =
  "when-venture-capital-is-wrong-for-vertical-saas";

const VC_WRONG_CHOICE_DATE = "2026-10-19";

const VC_WRONG_CHOICE_H2_TEXTS = [
  "How venture capital works, in one paragraph",
  "Seven signals venture capital is the wrong tool",
  "The vertical SaaS debate: is the market too small?",
  "What fund timelines mean for founders",
  "What GovTech CEOs should weigh",
  "If not venture capital, then what?",
  "Venture capital fit check",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const VC_WRONG_CHOICE_HEADINGS: BlogHeading[] =
  VC_WRONG_CHOICE_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const VC_WRONG_CHOICE_POST: BlogPostMeta = {
  slug: VC_WRONG_CHOICE_SLUG,
  metaTitle:
    "Is Venture Capital Right for My Startup? Seven Signals for Vertical Software CEOs",
  h1: "When Venture Capital Is the Wrong Choice for Vertical SaaS",
  description:
    "Is venture capital right for your startup? Seven signals that VC may be the wrong fit for a vertical SaaS or GovTech company, and what to weigh instead.",
  category: "Growth capital",
  date: VC_WRONG_CHOICE_DATE,
  updated: VC_WRONG_CHOICE_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-vc-wrong-choice-hero.jpg",
  ogImage: `/og/blog-${VC_WRONG_CHOICE_SLUG}.jpg`,
  breadcrumbsTitle: "When Venture Capital Is Wrong for Vertical SaaS",
};

const REVENUE_BASED_FINANCING_SLUG =
  "revenue-based-financing-government-contractors";

const REVENUE_BASED_FINANCING_DATE = "2026-10-23";

const REVENUE_BASED_FINANCING_H2_TEXTS = [
  "What revenue based financing and royalty financing are",
  "Why government receipts are lumpy",
  "When a revenue share fits a GovTech software company",
  "Where a revenue share stops helping: slow government payments",
  "What you can ask an agency for instead",
  "When another tool fits better",
  "How it compares with other sources",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const REVENUE_BASED_FINANCING_HEADINGS: BlogHeading[] =
  REVENUE_BASED_FINANCING_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const REVENUE_BASED_FINANCING_POST: BlogPostMeta = {
  slug: REVENUE_BASED_FINANCING_SLUG,
  metaTitle: "Revenue Based Financing for Government Contractors",
  h1: "Revenue Based Financing for Government Contractors",
  description:
    "Revenue based financing repays from a share of revenue. When it fits a GovTech company with slow government payments, and when another tool fits better.",
  category: "Growth capital",
  date: REVENUE_BASED_FINANCING_DATE,
  updated: REVENUE_BASED_FINANCING_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-revenue-based-financing-hero.jpg",
  ogImage: `/og/blog-${REVENUE_BASED_FINANCING_SLUG}.jpg`,
  breadcrumbsTitle: "Revenue Based Financing for Government Contractors",
};

const CAPITAL_STACK_SENIORITY_SLUG =
  "capital-stack-seniority-govtech-software";

const CAPITAL_STACK_SENIORITY_DATE = "2026-10-24";

const CAPITAL_STACK_SENIORITY_H2_TEXTS = [
  "What the capital stack is",
  "The order of payment when a company is sold",
  "Seniority among lenders: liens on government receivables",
  "Which layer fits which problem",
  "How the layers compare",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const CAPITAL_STACK_SENIORITY_HEADINGS: BlogHeading[] =
  CAPITAL_STACK_SENIORITY_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const CAPITAL_STACK_SENIORITY_POST: BlogPostMeta = {
  slug: CAPITAL_STACK_SENIORITY_SLUG,
  metaTitle: "Capital Stack Seniority Explained for GovTech Software Companies",
  h1: "Capital Stack Seniority Explained for GovTech Software Companies",
  description:
    "Capital stack seniority sets who is repaid first at a sale and whose lien comes first on government receivables. Which layer fits which GovTech problem.",
  category: "Growth capital",
  date: CAPITAL_STACK_SENIORITY_DATE,
  updated: CAPITAL_STACK_SENIORITY_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-capital-stack-seniority-hero.jpg",
  ogImage: `/og/blog-${CAPITAL_STACK_SENIORITY_SLUG}.jpg`,
  breadcrumbsTitle:
    "Capital Stack Seniority Explained for GovTech Software Companies",
};

const COMMON_STOCK_FINANCING_SLUG =
  "common-stock-financing-govtech-software";

const COMMON_STOCK_FINANCING_DATE = "2026-10-25";

const COMMON_STOCK_FINANCING_H2_TEXTS = [
  "What common stock financing is",
  "Which financing fits which problem",
  "Every stock sale is a securities offering",
  "Outside owners and your small business size status",
  "Foreign investors and facility clearances",
  "How the options compare",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const COMMON_STOCK_FINANCING_HEADINGS: BlogHeading[] =
  COMMON_STOCK_FINANCING_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const COMMON_STOCK_FINANCING_POST: BlogPostMeta = {
  slug: COMMON_STOCK_FINANCING_SLUG,
  metaTitle:
    "Common Stock Financing for GovTech Software Companies: When It Fits and What Rules Apply",
  h1: "Common Stock Financing for GovTech Software Companies: When It Fits and What Rules Apply",
  description:
    "Common stock financing means selling ownership for cash with no loan to repay. When it fits a GovTech software company, and the SEC, SBA and FOCI checks.",
  category: "Growth capital",
  date: COMMON_STOCK_FINANCING_DATE,
  updated: COMMON_STOCK_FINANCING_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-common-stock-financing-hero.jpg",
  ogImage: `/og/blog-${COMMON_STOCK_FINANCING_SLUG}.jpg`,
  breadcrumbsTitle:
    "Common Stock Financing for GovTech Software Companies",
};

const META_HYPERION_SLUG = "meta-hyperion-data-center-spv-financing";

const META_HYPERION_DATE = "2026-10-26";

const META_HYPERION_H2_TEXTS = [
  "The deal at a glance",
  "Who is who in the deal",
  "How the money and the lease flow",
  "Who holds the debt",
  "The lease back",
  "The residual value guarantee",
  "Construction sits with Meta",
  "Why the debt sits off Meta's balance sheet",
  "What Meta still carries",
  "Meta used the same model again in Texas",
  "Where the sources differ",
  "What this means for software and infrastructure founders",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const META_HYPERION_HEADINGS: BlogHeading[] =
  META_HYPERION_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const META_HYPERION_POST: BlogPostMeta = {
  slug: META_HYPERION_SLUG,
  metaTitle:
    "Meta Hyperion Data Center Financing: How the Blue Owl Joint Venture, the $27.3 Billion Bond and the Lease Back Work",
  h1: "Meta Hyperion Data Center Financing: How the Blue Owl Joint Venture, the $27.3 Billion Bond and the Lease Back Work",
  description:
    "How Meta financed Hyperion: a Blue Owl joint venture, a $27.3 billion bond, a lease back and a value guarantee, and why it sits off Meta's balance sheet.",
  category: "Growth capital",
  date: META_HYPERION_DATE,
  updated: META_HYPERION_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-meta-hyperion-hero.jpg",
  ogImage: `/og/blog-${META_HYPERION_SLUG}.jpg`,
  breadcrumbsTitle: "Meta Hyperion Data Center Financing",
};

const REVOLVING_LINE_SLUG = "revolving-line-of-credit-saas";

const REVOLVING_LINE_DATE = "2026-10-21";

const REVOLVING_LINE_H2_TEXTS = [
  "How a revolving line of credit works",
  "What a revolver is for, and what it is not for",
  "Planning for renewal",
  "When you are waiting months on a government payment",
  "Why growth makes the gap wider",
  "Lines tied to receivables",
  "Revolving line of credit vs installment loan",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const REVOLVING_LINE_HEADINGS: BlogHeading[] =
  REVOLVING_LINE_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const REVOLVING_LINE_POST: BlogPostMeta = {
  slug: REVOLVING_LINE_SLUG,
  metaTitle: "Revolving Line of Credit for SaaS: How It Works",
  h1: "Revolving Line of Credit for SaaS",
  description:
    "How a revolving line of credit works for SaaS companies, how it fits uneven cash flow and slow government payments, and how to plan for renewal.",
  category: "Growth capital",
  date: REVOLVING_LINE_DATE,
  updated: REVOLVING_LINE_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-revolving-line-hero.jpg",
  ogImage: `/og/blog-${REVOLVING_LINE_SLUG}.jpg`,
  breadcrumbsTitle: "Revolving Line of Credit for SaaS",
};

const TERM_LOAN_AMORTIZING_SLUG =
  "bullet-loan-vs-amortizing-loan-software-companies";

const TERM_LOAN_AMORTIZING_DATE = "2026-10-20";

const TERM_LOAN_AMORTIZING_H2_TEXTS = [
  "Two ways to repay the same loan",
  "When to use a bullet loan and when to use an amortizing loan",
  "How an amortizing loan works",
  "How a bullet loan works",
  "How a balloon loan works",
  "Planning for repayment at maturity",
  "What slow government payment means for repayment",
  "Bullet loan vs amortizing loan at a glance",
  "Frequently asked questions",
  "Related reading",
  "About Lambda Capital",
] as const;

export const TERM_LOAN_AMORTIZING_HEADINGS: BlogHeading[] =
  TERM_LOAN_AMORTIZING_H2_TEXTS.map((text) => ({
    id: slugifyHeading(text),
    text,
  }));

export const TERM_LOAN_AMORTIZING_POST: BlogPostMeta = {
  slug: TERM_LOAN_AMORTIZING_SLUG,
  metaTitle: "Bullet Loan vs Amortizing Loan for Software Companies",
  h1: "Bullet Loans vs Amortizing Loans for Software Companies",
  description:
    "Bullet loan vs amortizing loan: when each one fits a software company, based on the shape of your cash flow and when you expect cash to arrive.",
  category: "Growth capital",
  date: TERM_LOAN_AMORTIZING_DATE,
  updated: TERM_LOAN_AMORTIZING_DATE,
  author: BLOG_AUTHOR.name,
  authorRole: BLOG_AUTHOR.role,
  featuredImage: "/blog/featured-term-loan-amortizing-hero.jpg",
  ogImage: `/og/blog-${TERM_LOAN_AMORTIZING_SLUG}.jpg`,
  breadcrumbsTitle: "Bullet Loan vs Amortizing Loan",
};

export const ALL_POSTS: BlogPostMeta[] = [
  META_HYPERION_POST,
  COMMON_STOCK_FINANCING_POST,
  CAPITAL_STACK_SENIORITY_POST,
  REVENUE_BASED_FINANCING_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  VC_WRONG_CHOICE_POST,
  FINANCING_STRATEGY_POST,
  ASSIGNMENT_OF_CLAIMS_POST,
  VENTURE_DEBT_POST,
  IMPLEMENTATION_MILESTONES_POST,
  UPFRONT_PAYMENT_POST,
  PROMPT_PAYMENT_POST,
  GOVTECH_POST,
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}

export function getHeadingsForSlug(slug: string): BlogHeading[] {
  if (slug === SLUG) return POST_HEADINGS;
  if (slug === PROMPT_PAYMENT_SLUG) return PROMPT_PAYMENT_HEADINGS;
  if (slug === UPFRONT_PAYMENT_SLUG) return UPFRONT_PAYMENT_HEADINGS;
  if (slug === IMPLEMENTATION_MILESTONES_SLUG)
    return IMPLEMENTATION_MILESTONES_HEADINGS;
  if (slug === VENTURE_DEBT_SLUG) return VENTURE_DEBT_HEADINGS;
  if (slug === ASSIGNMENT_OF_CLAIMS_SLUG) return ASSIGNMENT_OF_CLAIMS_HEADINGS;
  if (slug === FINANCING_STRATEGY_SLUG) return FINANCING_STRATEGY_HEADINGS;
  if (slug === VC_WRONG_CHOICE_SLUG) return VC_WRONG_CHOICE_HEADINGS;
  if (slug === REVENUE_BASED_FINANCING_SLUG)
    return REVENUE_BASED_FINANCING_HEADINGS;
  if (slug === CAPITAL_STACK_SENIORITY_SLUG)
    return CAPITAL_STACK_SENIORITY_HEADINGS;
  if (slug === COMMON_STOCK_FINANCING_SLUG)
    return COMMON_STOCK_FINANCING_HEADINGS;
  if (slug === META_HYPERION_SLUG) return META_HYPERION_HEADINGS;
  if (slug === REVOLVING_LINE_SLUG) return REVOLVING_LINE_HEADINGS;
  if (slug === TERM_LOAN_AMORTIZING_SLUG) return TERM_LOAN_AMORTIZING_HEADINGS;
  return [];
}

export function getFaqJsonLdForSlug(slug: string): object | null {
  if (slug === SLUG) return GOVTECH_FAQ_JSON_LD;
  if (slug === PROMPT_PAYMENT_SLUG) return PROMPT_PAYMENT_FAQ_JSON_LD;
  if (slug === UPFRONT_PAYMENT_SLUG) return null;
  if (slug === IMPLEMENTATION_MILESTONES_SLUG) return null;
  if (slug === VENTURE_DEBT_SLUG) return null;
  if (slug === ASSIGNMENT_OF_CLAIMS_SLUG) return null;
  if (slug === FINANCING_STRATEGY_SLUG) return null;
  if (slug === VC_WRONG_CHOICE_SLUG) return null;
  return null;
}

/** Combined Article + FAQPage @graph from the draft, pasted as-is. */
export function getArticleFaqGraphJsonLdForSlug(slug: string): object | null {
  if (slug === UPFRONT_PAYMENT_SLUG) return UPFRONT_PAYMENT_JSON_LD;
  if (slug === IMPLEMENTATION_MILESTONES_SLUG)
    return IMPLEMENTATION_MILESTONES_JSON_LD;
  if (slug === VENTURE_DEBT_SLUG) return VENTURE_DEBT_JSON_LD;
  if (slug === ASSIGNMENT_OF_CLAIMS_SLUG) return ASSIGNMENT_OF_CLAIMS_JSON_LD;
  if (slug === FINANCING_STRATEGY_SLUG) return FINANCING_STRATEGY_JSON_LD;
  if (slug === VC_WRONG_CHOICE_SLUG) return VC_WRONG_CHOICE_JSON_LD;
  if (slug === REVENUE_BASED_FINANCING_SLUG)
    return REVENUE_BASED_FINANCING_JSON_LD;
  if (slug === CAPITAL_STACK_SENIORITY_SLUG)
    return CAPITAL_STACK_SENIORITY_JSON_LD;
  if (slug === COMMON_STOCK_FINANCING_SLUG)
    return COMMON_STOCK_FINANCING_JSON_LD;
  if (slug === META_HYPERION_SLUG) return META_HYPERION_JSON_LD;
  if (slug === REVOLVING_LINE_SLUG) return REVOLVING_LINE_JSON_LD;
  if (slug === TERM_LOAN_AMORTIZING_SLUG) return TERM_LOAN_AMORTIZING_JSON_LD;
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

export const UPFRONT_PAYMENT_FAQ: FaqItem[] = [
  {
    question: "Can a federal agency pay for a SaaS subscription upfront?",
    answer:
      "Under GSA guidance, yes when conditions are met. GSA's March 2024 acquisition letter says upfront payment for a SaaS license is not an advance payment when access is granted at the same time as payment, the price is fixed, and the term is fixed and continuous.",
  },
  {
    question: "Why are advance payments restricted for federal contracts?",
    answer:
      "Federal law says a contract payment may not be more than the value of the service already provided or article delivered, unless an advance is authorized by a specific appropriation or other law. GSA notes advance payments to contractors are generally prohibited unless specifically authorized.",
  },
  {
    question: "What are GSA's criteria for upfront SaaS payment?",
    answer:
      "Contemporaneous access with payment; fixed price or fixed price with economic price adjustment; seat, unit, or subscription price for a fixed term; no consumption metric other than quantity; no extra upfront fee for access or discount; and continuous, uninterrupted service for the term.",
  },
  {
    question:
      "Can implementation and training be billed upfront with the subscription?",
    answer:
      "Not under GSA's MAS cloud guidance. It states that all other cloud computing services and professional services must be paid in arrears under 31 U.S.C. 3324 and 41 U.S.C. 4505. Put services on separate lines from the fixed term license.",
  },
  {
    question: "Can an agency prepay a multi-year SaaS deal?",
    answer:
      "Be careful. GSA's ordering guidance says multi-year cloud commitments must comply with the Bona Fide Needs rule and agencies cannot obligate funds for future years without multi-year contracting authority. Annual upfront billing per year is the safer request.",
  },
  {
    question: "Can state and local governments prepay software subscriptions?",
    answer:
      "Some can, by statute. Minnesota lets counties prepay software development and maintenance services for county data processing equipment, and lets the commissioner allow state agencies to prepay software and IT hosting. Florida lets circuit court clerks prepay county maintenance agreements and subscriptions. Rules vary by state.",
  },
  {
    question: "Are there states that prohibit prepayment on software contracts?",
    answer:
      "Some contracts do. Massachusetts statewide IT contract guides ITS64 and ITS86 say no prepayment should be made for products not yet delivered or services not yet rendered, and require payment within 45 days under the state Bill Payment Policy. Check your contract vehicle.",
  },
  {
    question:
      "What should I do if my government customer still insists on paying in arrears?",
    answer:
      "Make sure each invoice is proper so payment clocks start, know your prompt payment rights, and plan for the gap with early payment options or financing. See our guides on prompt payment laws and government contract financing.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 * Publisher and mainEntityOfPage use the www canonical origin.
 */
export const UPFRONT_PAYMENT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Can Government Customers Pay Your SaaS Subscription Upfront? A GovTech Vendor's Guide",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      dateModified: "2026-10-12",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/government-saas-upfront-payment",
    },
    {
      "@type": "FAQPage",
      mainEntity: UPFRONT_PAYMENT_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const IMPLEMENTATION_MILESTONES_FAQ: FaqItem[] = [
  {
    question: "How are government software implementations usually paid?",
    answer:
      "In the contracts we reviewed, by milestone. The vendor invoices after the agency accepts a defined deliverable or phase, and the agency withholds a holdback from each payment. Connecticut, New York, CCCERA, and Tampa's expressway authority all tie payment to acceptance.",
  },
  {
    question: "What is a holdback on a government IT contract?",
    answer:
      "A percentage of each milestone payment the agency keeps until a later event, such as final system acceptance or the end of warranty. Published examples include 10 percent in Connecticut, 15 percent at CCCERA and New York, and 20 percent in a 2006 Colorado contract. These are examples, not a standard.",
  },
  {
    question: "When is the holdback released?",
    answer:
      "It depends on the contract. Connecticut releases half after the acceptance period and half after warranty. CCCERA pays 7.5 percent of total project cost at final acceptance and 7.5 percent six months later. New York releases the withheld amount in stages up to 18 months after go-live.",
  },
  {
    question: "Can I propose my own payment schedule in an RFP?",
    answer:
      "Often yes. Mississippi's Medicaid cost form says the vendor may propose an alternative payment schedule to be finalized in negotiations, and asks that payment amounts match the effort and criticality of each milestone. Read the RFP's cost and payment sections for similar language.",
  },
  {
    question: "Can I get paid at the start of a government software project?",
    answer:
      "Sometimes. Tampa's expressway authority lists a 5 percent mobilization payment, 30 days after notice to proceed. On federal commercial contracts, advance payments are allowed under conditions, but their total cannot exceed 15 percent of the contract price before work starts.",
  },
  {
    question: "Can I negotiate a lower holdback?",
    answer:
      "You can ask. In Jefferson Parish, Louisiana, a software vendor responded to a proposed 20 percent holdback by suggesting 5 percent of each implementation invoice, released at the completion of each phase. The document does not show the final term. If the gap remains, see our guide on government contract financing for software companies.",
  },
  {
    question: "Do federal agencies offer milestone payments?",
    answer:
      "Yes, through contract financing terms. For noncommercial work, FAR calls performance-based payments the preferred financing method when practical and the contractor agrees. For commercial products and services, contracting officers may include commercial interim and advance payments when in the government's best interest.",
  },
  {
    question: "What if the agency never formally accepts a deliverable?",
    answer:
      "Negotiate acceptance periods in writing. Pennsylvania's IT terms set 10 business days for interim items and 30 business days for final items unless agreed otherwise. Once a deliverable is accepted and invoiced, know your rights under prompt payment laws for GovTech vendors if payment is late.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 */
export const IMPLEMENTATION_MILESTONES_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Getting Paid During Implementation: Milestones and Holdbacks on Government Software Contracts",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      dateModified: "2026-10-13",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/government-software-implementation-payment-milestones",
    },
    {
      "@type": "FAQPage",
      mainEntity: IMPLEMENTATION_MILESTONES_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const VENTURE_DEBT_FAQ: FaqItem[] = [
  {
    question:
      "What is the difference between venture debt and venture capital?",
    answer:
      "Venture capital buys shares, so your ownership is diluted, but there is no repayment obligation. Venture debt is a loan you repay with interest no matter how the business performs. One startup financing guide describes venture debt as structured like a bank loan, often with a small equity component for the lender.",
  },
  {
    question: "Can a bootstrapped GovTech company get venture debt?",
    answer:
      "Often not in the classic form. One startup financing guide places venture debt after a Series A. A company without venture backing will usually look at loans or revenue based financing instead.",
  },
  {
    question: "What is revenue based financing?",
    answer:
      "One startup financing guide describes revenue based financing as a flexible loan repaid using a fixed percentage of future revenue, so payments scale with performance. It notes that it is still a loan and must be repaid. Lenders generally want proven revenue and cash flow.",
  },
  {
    question: "Do government contracts help or hurt when borrowing?",
    answer:
      "They can do both. In my experience government customers tend to renew, but lenders will look at termination for convenience rights, non appropriation risk, customer concentration, and how long collections take. Federal receivables can be assigned to a lender only under the Assignment of Claims Act. Bring your renewal history and contract terms to any lender conversation.",
  },
  {
    question: "When is VC the better choice than debt?",
    answer:
      "One startup financing guide says equity fits companies chasing fast growth, industry dominance, or large liquidity events. Debt fits predictable revenue, owners who want control, and sustainable growth. A steadily growing company with long term government customers often matches the debt profile, if cash flow can carry the payments.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 */
export const VENTURE_DEBT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Venture Debt vs Venture Capital for GovTech: What You Give Up",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      dateModified: "2026-10-25",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/venture-debt-vs-venture-capital-govtech",
    },
    {
      "@type": "FAQPage",
      mainEntity: VENTURE_DEBT_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const ASSIGNMENT_OF_CLAIMS_FAQ: FaqItem[] = [
  {
    question: "What is the Assignment of Claims Act?",
    answer:
      "It is the federal law that lets a contractor assign money due or to become due under a federal contract to a bank, trust company, or other financing institution. It dates to 1940, is codified at 31 U.S.C. 3727 and 41 U.S.C. 6305, and is implemented in FAR subpart 32.8.",
  },
  {
    question: "Is the contract itself assigned?",
    answer:
      "No. What moves is the right to receive payment. The contractor still performs the work, and the assignment changes where the government sends the money.",
  },
  {
    question: "What conditions must an assignment meet?",
    answer:
      "The contract must specify payments aggregating $1,000 or more and must not prohibit assignment. The assignee must be a bank, trust company, or other financing institution. Unless the contract expressly permits otherwise, the assignment covers all unpaid amounts, goes to one party (or one agent for several), and cannot be assigned again.",
  },
  {
    question: "Who receives notice of an assignment?",
    answer:
      "The assignee sends a written notice of assignment, with a true copy of the assignment instrument, to the contracting officer or agency head, any surety on a bond for the contract, and the disbursing officer designated in the contract.",
  },
  {
    question: "How does an assignment end?",
    answer:
      "When the financing institution releases the contractor, the contractor files a written notice of release and a copy of the release instrument with the same offices that received the original notice. Payments then return to the contractor.",
  },
  {
    question: "What is a no setoff commitment?",
    answer:
      "It is a contract term under which payments to the assignee will not be reduced to collect debts the contractor owes the government. An agency may include one only after a determination of need, so many contracts do not have one.",
  },
  {
    question:
      "Does the Assignment of Claims Act apply to state and local contracts?",
    answer:
      "No. It covers federal contracts. State and local contracts follow state law and the contract's own assignment clause.",
  },
  {
    question: "How long do federal agencies have to pay an invoice?",
    answer:
      "Under FAR 32.904, the due date for many invoice payments is the later of the 30th day after the designated billing office receives a proper invoice or the 30th day after government acceptance. An assignment does not change that clock; it changes who is paid.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 */
export const ASSIGNMENT_OF_CLAIMS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "The Assignment of Claims Act Explained",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/assignment-of-claims-act-govtech-software",
    },
    {
      "@type": "FAQPage",
      mainEntity: ASSIGNMENT_OF_CLAIMS_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const FINANCING_STRATEGY_FAQ: FaqItem[] = [
  {
    question: "What is a software company financing strategy?",
    answer:
      "It is the plan for which kinds of capital a company uses, in what order, to reach the outcome its founders want. It starts with the exit, then matches each tool to the company's cash flow.",
  },
  {
    question: "Is venture capital right for a vertical software company?",
    answer:
      "Sometimes. Venture funds need exits large enough to reach their target returns, and big funding raises the bar for exit. A company that plans a modest sale or no sale may fit other tools better.",
  },
  {
    question:
      "What is the difference between a loan and a revolving line of credit?",
    answer:
      "A loan provides a lump sum, repaid either in one bullet payment at maturity or over time on an amortizing schedule. A revolving line of credit can be drawn, repaid, and drawn again, which suits uneven cash flow.",
  },
  {
    question: "What is receivables factoring?",
    answer:
      "Factoring is selling unpaid customer invoices to a factoring provider, which then collects from the customer. Receivables financing instead uses the invoices as collateral for a loan, and the company keeps control over collection.",
  },
  {
    question: "What is revenue based financing?",
    answer:
      "It is capital repaid as a share of revenue until an agreed multiple or cap is reached. It can be structured as a loan or as equity the company buys back, and payments move with revenue.",
  },
  {
    question: "What is nonconvertible preferred stock?",
    answer:
      "It is a class of ownership that ranks senior to common stock and below debt, and it does not convert into common stock.",
  },
  {
    question: "How do slow government payments affect financing strategy?",
    answer:
      "On complex federal contracts, payment delays of 90 days or more are common, and growth widens the gap between paying for work and collecting. That gap is a cash flow question separate from growth capital.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 */
export const FINANCING_STRATEGY_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Start With Your Exit",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-18",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/software-company-financing-strategy",
    },
    {
      "@type": "FAQPage",
      mainEntity: FINANCING_STRATEGY_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const VC_WRONG_CHOICE_FAQ: FaqItem[] = [
  {
    question: "Is venture capital right for my startup?",
    answer:
      "It fits if a company can grow very large, very fast, and return a venture fund's worth of value within the fund's life. If the realistic ceiling is a healthy, profitable company, other capital may fit better.",
  },
  {
    question:
      "Why do venture capitalists look for companies that could get very big?",
    answer:
      "Venture returns depend on outliers, a small number of companies that return many times the investment. Investors look for companies that could return their whole fund.",
  },
  {
    question: "Is vertical SaaS too small for venture capital?",
    answer:
      "Venture firms disagree. Some argue the market size objection is not supported by the facts, while others describe why many founders have avoided small markets.",
  },
  {
    question: "Do venture investors expect dividends?",
    answer:
      "Usually not. Venture investors generally prefer that companies use their cash to grow and scale. A company that wants to distribute profits to owners may fit other capital better.",
  },
  {
    question: "How long do venture capital funds last?",
    answer:
      "Most venture funds have a stated lifespan of about ten years, and some extend a few additional years.",
  },
  {
    question:
      "Does exit pressure from venture investors affect how companies are sold?",
    answer:
      "Research in the Strategic Management Journal found that exit pressure from venture investors did not change the odds of an IPO but significantly raised the odds of a sale or a shutdown. Independent directors moderated the effect.",
  },
  {
    question: "Is venture capital a good fit for GovTech companies?",
    answer:
      "It can be, but government payment timing matters. On complex federal contracts, delays of 90 days or more are common, and that wait is a cash flow question separate from growth capital.",
  },
  {
    question: "What are the alternatives to venture capital?",
    answer:
      "Alternatives include bootstrapping, revenue based financing, grants, and competitions. Some investors also offer models built around profitable growth.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 */
export const VC_WRONG_CHOICE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "When Venture Capital Is the Wrong Choice for Vertical SaaS",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-19",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/when-venture-capital-is-wrong-for-vertical-saas",
    },
    {
      "@type": "FAQPage",
      mainEntity: VC_WRONG_CHOICE_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const REVENUE_BASED_FINANCING_FAQ: FaqItem[] = [
  {
    question: "Can a government contractor use revenue based financing?",
    answer:
      "Yes, if it has collected revenue to share. Repayment is a share of revenue rather than a fixed payment.",
  },
  {
    question: "Is revenue based financing the same as royalty financing?",
    answer:
      "The names often travel together, and public programs described as royalty funds have been counted among early revenue based financing programs. Read each agreement to see how it is structured.",
  },
  {
    question: "Is revenue based financing the same as a merchant cash advance?",
    answer:
      "Not usually. Merchant cash advances draw repayments daily or weekly over less than a year, while revenue based financing is typically repaid monthly.",
  },
  {
    question: "Does revenue based financing help when an agency pays late?",
    answer:
      "Not directly. A revenue share is not tied to any single invoice, so it does not speed up an agency payment. Invoice factoring, by contrast, involves selling unpaid invoices.",
  },
  {
    question: "What happens in a quarter with no government payments?",
    answer:
      "Payments are a share of revenue, so they usually fall when collections fall.",
  },
  {
    question: "Can I ask an agency for upfront or milestone payments instead?",
    answer:
      "You can raise it before award. Advance payment is something you negotiate with the agency, not a default, and many contracting officers will not offer it on a first award.",
  },
  {
    question: "How is revenue based financing different from a bullet loan?",
    answer:
      "Revenue based financing repays from revenue as it comes in. A bullet loan repays the principal at the end of the term, usually with interest only payments until then.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 * FAQ answers match the visible FAQ word for word.
 */
export const REVENUE_BASED_FINANCING_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Revenue Based Financing for Government Contractors",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-23",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/revenue-based-financing-government-contractors",
    },
    {
      "@type": "FAQPage",
      mainEntity: REVENUE_BASED_FINANCING_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const REVOLVING_LINE_FAQ: FaqItem[] = [
  {
    question: "What is a revolving line of credit?",
    answer:
      "It is a line of credit with an established maximum that a business can draw from, repay, and draw from again until the arrangement expires. Interest is charged only on the amount drawn.",
  },
  {
    question:
      "How is a revolving line of credit different from an installment loan?",
    answer:
      "An installment loan is repaid in fixed payments over a set period, and once it is paid off it cannot be drawn again. A revolving line can be drawn, repaid, and drawn again any number of times until it expires.",
  },
  {
    question: "What is a revolving line of credit commonly used for?",
    answer:
      "It is generally described as short term financing for operating purposes, especially for businesses with sharp swings in cash flow, such as a seasonal business covering payroll while it waits to collect receivables.",
  },
  {
    question: "What should I plan for with a revolving line of credit?",
    answer:
      "Renewal. A federal bank regulator notes that revolving working capital lines can face refinancing at renewal, so a revolver fits best when you know how the balance will be paid down or renewed.",
  },
  {
    question: "How long do government payments usually take?",
    answer:
      "Government contractors often deliver work first and wait 30, 60, or 90 days to be paid, and a rejected invoice, a government shutdown, or a continuing resolution can stretch a 45 day cycle to 90.",
  },
  {
    question: "Why does growth increase the need for working capital?",
    answer:
      "Growing contractors hire staff and incur costs before invoices are submitted, then wait weeks or months for payment, so revenue can grow while cash lags behind.",
  },
];

export const TERM_LOAN_AMORTIZING_FAQ: FaqItem[] = [
  {
    question:
      "What is the difference between a bullet loan and an amortizing loan?",
    answer:
      "A bullet loan repays the principal at the end of the term, usually with interest only payments until then, so it fits a company that expects to sell the business or has a big cash flow event coming. An amortizing loan repays principal in installments over its life, so the balance falls with each payment, and it fits a company with recurring, predictable cash flow.",
  },
  {
    question:
      "When should a software company use a bullet loan instead of an amortizing loan?",
    answer:
      "Use a bullet loan when you expect to sell the business or have a big cash flow event coming, or plan to refinance when the principal comes due. Use an amortizing loan when you have recurring, predictable cash flow that can carry principal and interest in every scheduled payment.",
  },
  {
    question: "What is an amortizing loan?",
    answer:
      "It is a loan repaid in installments, sometimes called a reducing loan, because each payment includes principal and the balance falls. With equal payments, the interest share of each payment is higher early on and lower later.",
  },
  {
    question: "What is a bullet loan?",
    answer:
      "It is a loan whose principal is paid back at the end of the loan term. Scheduled payments before then usually cover only interest, and in some cases the interest is also added to the balance and paid at the end.",
  },
  {
    question: "What is a balloon payment?",
    answer:
      "It is a large last payment at the end of a loan term. In mortgage lending, a balloon loan has lower monthly payments that do not fully pay off the loan over the term, followed by a large last payment.",
  },
  {
    question: "What is an interest only period?",
    answer:
      "It is a stretch when scheduled payments cover only interest, so the amount owed does not go down. For interest only mortgages, when the period ends the borrower may pay off the balance all at once, refinance if available, or begin higher monthly payments.",
  },
  {
    question: "What is refinance risk?",
    answer:
      "It is the risk that a borrower cannot replace existing debt at a future date under reasonable terms and prevailing market conditions. It applies mainly to loans with principal remaining at maturity, so with a bullet loan the plan for repaying the principal is part of choosing the structure.",
  },
  {
    question: "How do slow government payments affect loan repayment?",
    answer:
      "Government contractors often deliver work first and wait 30, 60, or 90 days to be paid, and growth can widen the gap between costs and cash. Scheduled loan payments come due regardless of when an agency pays.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 */
export const REVOLVING_LINE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Revolving Line of Credit for SaaS",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-21",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/revolving-line-of-credit-saas",
    },
    {
      "@type": "FAQPage",
      mainEntity: REVOLVING_LINE_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const TERM_LOAN_AMORTIZING_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bullet Loans vs Amortizing Loans for Software Companies",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-20",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/bullet-loan-vs-amortizing-loan-software-companies",
    },
    {
      "@type": "FAQPage",
      mainEntity: TERM_LOAN_AMORTIZING_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const CAPITAL_STACK_SENIORITY_FAQ: FaqItem[] = [
  {
    question: "What is capital stack seniority?",
    answer:
      "It is the order in which each source of capital is repaid: lenders first, then preferred shareholders, then common shareholders.",
  },
  {
    question: "In what order are people paid when a software company is sold?",
    answer:
      "Debts and transaction costs are paid first. Preferred shareholders are then paid according to their place in the stack, and common shareholders are paid last.",
  },
  {
    question: "Where does preferred stock sit in the capital stack?",
    answer:
      "Between debt and common equity. Lenders are paid before preferred shareholders, and preferred shareholders are paid before common shareholders.",
  },
  {
    question: "Do preferred holders always take their preference?",
    answer:
      "Not always. In a non participating structure, preferred shareholders typically receive the greater of their liquidation preference or what they would have received by converting to common stock.",
  },
  {
    question: "Can two lenders both have a claim on my government receivables?",
    answer:
      "Yes. The Uniform Commercial Code sets the starting order between secured lenders, and a contract between the lenders can change that order. On a federal contract, an assignment of payments generally goes to a single party, which can act as agent for several lenders.",
  },
  {
    question: "What is lien subordination?",
    answer:
      "It is a contract between two or more secured lenders that sets whose lien comes first on which assets. It can override the order the Uniform Commercial Code would otherwise set.",
  },
  {
    question: "How does the Assignment of Claims Act fit in?",
    answer:
      "On a federal contract, a contractor can assign its payments to a bank, trust company, or other financing institution when all of the conditions in the Federal Acquisition Regulation are met. That is how a financing institution gets paid directly from a federal receivable.",
  },
  {
    question: "Which layer of the capital stack should I use?",
    answer:
      "It depends on the problem. Receivables or contract financing fits a slow government receivable, a bullet loan fits a cash need with a sale or big cash flow event ahead, an amortizing loan fits steady collections, preferred stock fits capital without fixed loan payments, and venture equity fits a bet on a very large exit.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 * FAQ answers match the visible FAQ word for word.
 */
export const CAPITAL_STACK_SENIORITY_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Capital Stack Seniority Explained for GovTech Software Companies",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-24",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/capital-stack-seniority-govtech-software",
    },
    {
      "@type": "FAQPage",
      mainEntity: CAPITAL_STACK_SENIORITY_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const COMMON_STOCK_FINANCING_FAQ: FaqItem[] = [
  {
    question: "What is common stock financing?",
    answer:
      "It is selling ordinary ownership shares in your company for cash. Investors become owners, usually with voting rights, and there is no loan to repay.",
  },
  {
    question: "Do I have to pay common stock investors back?",
    answer:
      "No. Equity has no maturity date, and the company is not required to repay the investment or pay dividends. Investors share in the company's future value through their ownership.",
  },
  {
    question: "When does common stock fit a GovTech software company?",
    answer:
      "It fits when you need capital and do not have the cash flow to make payments to an investor. If the need is a slow government payment on a signed contract, contract financing or the contract's billing terms fit that problem.",
  },
  {
    question: "Do I need to register a stock sale with the SEC?",
    answer:
      "Every offer and sale of securities, even to one person, must be registered with the Securities and Exchange Commission or made under an exemption. Exemptions include Rule 506(b) private placements, Rule 506(c) offerings, Rule 504 offerings, Regulation Crowdfunding, intrastate offerings and Regulation A. Talk to securities counsel before you offer shares.",
  },
  {
    question: "Can I talk about my raise on social media?",
    answer:
      "Depending on context, a social media post about the company and specific investment opportunities could be considered an offer of securities, and a company cannot use general solicitation in a Rule 506(b) private placement. Regular, ordinary factual business communications are generally not considered an offer.",
  },
  {
    question: "Can selling stock affect my small business set aside eligibility?",
    answer:
      "It can. The Small Business Administration adds the employees or receipts of all affiliates when it measures size, and an investor that controls or has the power to control your company can be an affiliate. A merger, acquisition or sale that changes the controlling interest requires recertification within 30 calendar days.",
  },
  {
    question: "Do I need to tell DCSA if a foreign investor buys shares?",
    answer:
      "If your company holds a facility security clearance, it has a duty to inform the Defense Counterintelligence and Security Agency when its ownership and control change. The SF 328 asks about foreign persons who own five percent or more of the company on a fully diluted basis.",
  },
  {
    question: "Which option should I use?",
    answer:
      "It depends on the problem. Common stock fits capital without the cash flow to pay an investor back, contract financing fits a signed contract that pays in 90 to 180 days, the contract's payment terms fit a billing schedule problem, a bullet loan fits a cash need with a sale or big cash flow event ahead, an amortizing loan fits steady collections, preferred stock fits capital without fixed loan payments, and venture equity fits a bet on a very large exit.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 * FAQ answers match the visible FAQ word for word.
 */
export const COMMON_STOCK_FINANCING_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Common Stock Financing for GovTech Software Companies: When It Fits and What Rules Apply",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-25",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/common-stock-financing-govtech-software",
    },
    {
      "@type": "FAQPage",
      mainEntity: COMMON_STOCK_FINANCING_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;

export const META_HYPERION_FAQ: FaqItem[] = [
  {
    question: "How did Meta finance the Hyperion data center?",
    answer:
      "Through a joint venture with funds managed by Blue Owl Capital, which own 80%, while Meta owns 20%. A bond issuer on the Blue Owl side, Beignet Investor, sold $27.3 billion of bonds, and Meta will lease the finished campus.",
  },
  {
    question: "Who bought the Hyperion bonds?",
    answer:
      "Meta's announcement named PIMCO and select other bond investors, and PIMCO was reported to be the main anchor investor. The Wall Street Journal reported, citing people familiar with the matter, that BlackRock bought more than $3 billion.",
  },
  {
    question: "What are the bond terms?",
    answer:
      "They are 6.581% senior secured bonds due May 2049, rated A+, and they amortize, which means principal is repaid over the life of the bonds.",
  },
  {
    question: "Does Meta own the data center?",
    answer:
      "The joint venture owns it, and Meta owns 20% of the joint venture. Meta will lease the campus once it is built, with leases starting in 2029.",
  },
  {
    question: "What is the residual value guarantee?",
    answer:
      "If Meta ends or does not renew a lease and certain other conditions are met, Meta pays any shortfall between the property's fair value and an agreed threshold. The aggregate threshold is approximately $28 billion and decreases over time.",
  },
  {
    question: "Why is the debt not on Meta's balance sheet?",
    answer:
      "Meta concluded that it does not have the power to direct the activities that most significantly affect the venture's economic performance, so it is not the primary beneficiary and does not consolidate the venture.",
  },
  {
    question: "How much could Meta owe?",
    answer:
      "Meta reports a maximum exposure to loss of $45.95 billion as of December 31, 2025, and $46.03 billion as of June 30, 2026. The figure combines its equity investment, lease commitments, future funding commitments and the maximum guarantee threshold.",
  },
  {
    question: "Has Meta done another deal like this?",
    answer:
      "Yes. Meta formed a second venture in Texas in July 2026, holds 20% of it, and describes the two ventures as similar in purpose, design, and risk and reward characteristics.",
  },
];

/**
 * Article + FAQPage JSON-LD from the draft @graph, pasted as-is.
 * FAQ answers match the visible FAQ word for word.
 */
export const META_HYPERION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Meta Hyperion Data Center Financing: How the Blue Owl Joint Venture, the $27.3 Billion Bond and the Lease Back Work",
      description:
        "How Meta financed Hyperion: a Blue Owl joint venture, a $27.3 billion bond, a lease back and a value guarantee, and why it sits off Meta's balance sheet.",
      author: {
        "@type": "Person",
        name: "Domenic Giovanzana",
        jobTitle: "Founder and General Partner",
      },
      publisher: {
        "@type": "Organization",
        name: "Lambda Capital",
        url: "https://www.lambdavp.com",
      },
      datePublished: "2026-10-26",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/meta-hyperion-data-center-spv-financing",
      keywords: "Meta Hyperion data center financing",
    },
    {
      "@type": "FAQPage",
      mainEntity: META_HYPERION_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;
