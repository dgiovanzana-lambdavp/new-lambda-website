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
  "How warrant coverage works: the minimal equity middle ground",
  "Why venture debt may not be available to a bootstrapped GovTech company",
  "What lenders look at when your customers are governments",
  "When debt fits and when VC fits",
  "Venture capital, venture debt and term loans compared",
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
    "Venture Debt vs Venture Capital for GovTech: Term Loans, Warrants, and What You Give Up",
  h1: "Venture Debt vs Venture Capital for GovTech: Term Loans, Warrants, and What You Give Up",
  description:
    "Compare term loans, venture debt with warrant coverage, and VC funding for GovTech software companies: what each costs in equity, cash, and control.",
  category: "Growth capital",
  date: VENTURE_DEBT_DATE,
  updated: VENTURE_DEBT_DATE,
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

export const ALL_POSTS: BlogPostMeta[] = [
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
  return [];
}

export function getFaqJsonLdForSlug(slug: string): object | null {
  if (slug === SLUG) return GOVTECH_FAQ_JSON_LD;
  if (slug === PROMPT_PAYMENT_SLUG) return PROMPT_PAYMENT_FAQ_JSON_LD;
  if (slug === UPFRONT_PAYMENT_SLUG) return null;
  if (slug === IMPLEMENTATION_MILESTONES_SLUG) return null;
  if (slug === VENTURE_DEBT_SLUG) return null;
  if (slug === ASSIGNMENT_OF_CLAIMS_SLUG) return null;
  return null;
}

/** Combined Article + FAQPage @graph from the draft, pasted as-is. */
export function getArticleFaqGraphJsonLdForSlug(slug: string): object | null {
  if (slug === UPFRONT_PAYMENT_SLUG) return UPFRONT_PAYMENT_JSON_LD;
  if (slug === IMPLEMENTATION_MILESTONES_SLUG)
    return IMPLEMENTATION_MILESTONES_JSON_LD;
  if (slug === VENTURE_DEBT_SLUG) return VENTURE_DEBT_JSON_LD;
  if (slug === ASSIGNMENT_OF_CLAIMS_SLUG) return ASSIGNMENT_OF_CLAIMS_JSON_LD;
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
      "Venture capital buys shares, so your ownership is diluted, but there is no repayment obligation. Venture debt is a loan you repay with interest no matter how the business performs, and lenders usually add warrants. HubSpot for Startups describes venture debt as structured like a bank loan, with warrants or other small equity kickers.",
  },
  {
    question: "What is warrant coverage?",
    answer:
      "Warrant coverage is the size of the warrant the lender receives, expressed as a percentage of the loan amount, not of the company. In Venturemage's example, 10% coverage on a $2 million loan gives the lender warrants worth $200,000 at the agreed strike price.",
  },
  {
    question: "How much dilution do venture debt warrants usually cause?",
    answer:
      "Venturemage says the average venture debt deal results in roughly 1 to 2 percent total equity dilution if the lender exercises, and its own FAQ gives 1 to 3 percent. Treat that as the publisher's estimate, not independent data. Your real cost depends on your valuation and whether the warrants are ever exercised.",
  },
  {
    question: "Can a bootstrapped GovTech company get venture debt?",
    answer:
      "Often not in the classic form. HubSpot for Startups places venture debt after a Series A, and one warrant guide says the best terms come within 6 to 12 months of an equity round. A company without venture backing will usually look at loans or revenue based financing instead.",
  },
  {
    question: "What is revenue based financing?",
    answer:
      "HubSpot for Startups describes revenue based financing as a flexible loan repaid using a fixed percentage of future revenue, so payments scale with performance. It notes that it is still a loan and must be repaid. Lenders generally want proven revenue and cash flow.",
  },
  {
    question: "Do government contracts help or hurt when borrowing?",
    answer:
      "They can do both. In my experience government customers tend to renew, but lenders will look at termination for convenience rights, non appropriation risk, customer concentration, and how long collections take. Federal receivables can be assigned to a lender only under the Assignment of Claims Act. Bring your renewal history and contract terms to any lender conversation.",
  },
  {
    question: "What should I negotiate in a venture debt term sheet?",
    answer:
      "Push on the coverage percentage, whether coverage applies to the committed facility or only to what you draw, the strike price, and the expiration date. Startup Fortune also suggests having counsel walk through the actual share count the warrant produces, not just the stated percentage.",
  },
  {
    question: "When is VC the better choice than debt?",
    answer:
      "HubSpot for Startups says equity fits companies chasing fast growth, industry dominance, or large liquidity events. Debt fits predictable revenue, owners who want control, and sustainable growth. A steadily growing company with long term government customers often matches the debt profile, if cash flow can carry the payments.",
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
        "Venture Debt vs Venture Capital for GovTech: Term Loans, Warrants, and What You Give Up",
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
      dateModified: "2026-10-14",
      mainEntityOfPage:
        "https://www.lambdavp.com/blog/venture-debt-vs-venture-capital-govtech",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between venture debt and venture capital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Venture capital buys shares, so your ownership is diluted, but there is no repayment obligation. Venture debt is a loan you repay with interest no matter how the business performs, and lenders usually add warrants. HubSpot for Startups describes venture debt as structured like a bank loan, with warrants or other small equity kickers.",
          },
        },
        {
          "@type": "Question",
          name: "What is warrant coverage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warrant coverage is the size of the warrant the lender receives, expressed as a percentage of the loan amount, not of the company. In Venturemage's example, 10% coverage on a $2 million loan gives the lender warrants worth $200,000 at the agreed strike price.",
          },
        },
        {
          "@type": "Question",
          name: "How much dilution do venture debt warrants usually cause?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Venturemage says the average venture debt deal results in roughly 1 to 2 percent total equity dilution if the lender exercises, and its own FAQ gives 1 to 3 percent. Treat that as the publisher's estimate, not independent data. Your real cost depends on your valuation and whether the warrants are ever exercised.",
          },
        },
        {
          "@type": "Question",
          name: "Can a bootstrapped GovTech company get venture debt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often not in the classic form. HubSpot for Startups places venture debt after a Series A, and one warrant guide says the best terms come within 6 to 12 months of an equity round. A company without venture backing will usually look at loans or revenue based financing instead.",
          },
        },
        {
          "@type": "Question",
          name: "What is revenue based financing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HubSpot for Startups describes revenue based financing as a flexible loan repaid using a fixed percentage of future revenue, so payments scale with performance. It notes that it is still a loan and must be repaid. Lenders generally want proven revenue and cash flow.",
          },
        },
        {
          "@type": "Question",
          name: "Do government contracts help or hurt when borrowing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can do both. In my experience government customers tend to renew, but lenders will look at termination for convenience rights, non appropriation risk, customer concentration, and how long collections take. Federal receivables can be assigned to a lender only under the Assignment of Claims Act. Bring your renewal history and contract terms to any lender conversation.",
          },
        },
        {
          "@type": "Question",
          name: "What should I negotiate in a venture debt term sheet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Push on the coverage percentage, whether coverage applies to the committed facility or only to what you draw, the strike price, and the expiration date. Startup Fortune also suggests having counsel walk through the actual share count the warrant produces, not just the stated percentage.",
          },
        },
        {
          "@type": "Question",
          name: "When is VC the better choice than debt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HubSpot for Startups says equity fits companies chasing fast growth, industry dominance, or large liquidity events. Debt fits predictable revenue, owners who want control, and sustainable growth. A steadily growing company with long term government customers often matches the debt profile, if cash flow can carry the payments.",
          },
        },
      ],
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
