import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JumpList from "@/components/blog/JumpList";
import CtaBand from "@/components/blog/CtaBand";
import AuthorBox from "@/components/blog/AuthorBox";
import ScrollDepthTracker from "@/components/blog/ScrollDepthTracker";
import GovTechPostContent from "@/components/blog/GovTechPostContent";
import PromptPaymentPostContent from "@/components/blog/PromptPaymentPostContent";
import UpfrontPaymentPostContent from "@/components/blog/UpfrontPaymentPostContent";
import ImplementationMilestonesPostContent from "@/components/blog/ImplementationMilestonesPostContent";
import VentureDebtPostContent from "@/components/blog/VentureDebtPostContent";
import AssignmentOfClaimsPostContent from "@/components/blog/AssignmentOfClaimsPostContent";
import FinancingStrategyPostContent from "@/components/blog/FinancingStrategyPostContent";
import VcWrongChoicePostContent from "@/components/blog/VcWrongChoicePostContent";
import RevolvingLinePostContent from "@/components/blog/RevolvingLinePostContent";
import TermLoanAmortizingPostContent from "@/components/blog/TermLoanAmortizingPostContent";
import RevenueBasedFinancingPostContent from "@/components/blog/RevenueBasedFinancingPostContent";
import CapitalStackSeniorityPostContent from "@/components/blog/CapitalStackSeniorityPostContent";
import CommonStockFinancingPostContent from "@/components/blog/CommonStockFinancingPostContent";
import { BLOG_AUTHOR, BLOG_SITE_ORIGIN } from "@/config/blog";
import {
  ALL_POSTS,
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  COMMON_STOCK_FINANCING_POST,
  FINANCING_STRATEGY_POST,
  GOVTECH_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVENUE_BASED_FINANCING_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
  VENTURE_DEBT_POST,
  getArticleFaqGraphJsonLdForSlug,
  getFaqJsonLdForSlug,
  getHeadingsForSlug,
  getPostBySlug,
  postCanonical,
} from "@/lib/blog/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Only live posts in ALL_POSTS are valid. Unknown /blog/<slug> URLs
 * (including unpublished drafts still on open PR branches) return a real
 * HTTP 404 instead of soft-404ing to the homepage shell.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = postCanonical(post.slug);

  return {
    title: `${post.metaTitle} | Lambda Capital`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

function PostBody({ slug }: { slug: string }) {
  if (slug === GOVTECH_POST.slug) return <GovTechPostContent />;
  if (slug === PROMPT_PAYMENT_POST.slug) return <PromptPaymentPostContent />;
  if (slug === UPFRONT_PAYMENT_POST.slug) return <UpfrontPaymentPostContent />;
  if (slug === IMPLEMENTATION_MILESTONES_POST.slug)
    return <ImplementationMilestonesPostContent />;
  if (slug === VENTURE_DEBT_POST.slug) return <VentureDebtPostContent />;
  if (slug === ASSIGNMENT_OF_CLAIMS_POST.slug)
    return <AssignmentOfClaimsPostContent />;
  if (slug === FINANCING_STRATEGY_POST.slug)
    return <FinancingStrategyPostContent />;
  if (slug === VC_WRONG_CHOICE_POST.slug) return <VcWrongChoicePostContent />;
  if (slug === REVENUE_BASED_FINANCING_POST.slug)
    return <RevenueBasedFinancingPostContent />;
  if (slug === CAPITAL_STACK_SENIORITY_POST.slug)
    return <CapitalStackSeniorityPostContent />;
  if (slug === COMMON_STOCK_FINANCING_POST.slug)
    return <CommonStockFinancingPostContent />;
  if (slug === REVOLVING_LINE_POST.slug) return <RevolvingLinePostContent />;
  if (slug === TERM_LOAN_AMORTIZING_POST.slug)
    return <TermLoanAmortizingPostContent />;
  return null;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const canonical = postCanonical(post.slug);
  const headings = getHeadingsForSlug(slug);
  const articleFaqGraphJsonLd = getArticleFaqGraphJsonLdForSlug(slug);
  const faqJsonLd = articleFaqGraphJsonLd
    ? null
    : getFaqJsonLdForSlug(slug);

  const articleJsonLd = articleFaqGraphJsonLd
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.h1,
        description: post.description,
        image: `${BLOG_SITE_ORIGIN}${post.ogImage}`,
        datePublished: post.date,
        dateModified: post.updated,
        author: {
          "@type": "Person",
          name: BLOG_AUTHOR.name,
          jobTitle: BLOG_AUTHOR.role,
        },
        publisher: {
          "@type": "Organization",
          name: "Lambda Capital",
          logo: {
            "@type": "ImageObject",
            url: `${BLOG_SITE_ORIGIN}/Capital - Black Long.png`,
          },
        },
        mainEntityOfPage: canonical,
      };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${BLOG_SITE_ORIGIN}/blog`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: post.breadcrumbsTitle,
        item: canonical,
      },
    ],
  };

  const ctaHeading =
    slug === PROMPT_PAYMENT_POST.slug ||
    slug === UPFRONT_PAYMENT_POST.slug ||
    slug === IMPLEMENTATION_MILESTONES_POST.slug ||
    slug === ASSIGNMENT_OF_CLAIMS_POST.slug
      ? "Signed contracts and long receivables?"
      : "Growing a GovTech software company?";

  return (
    <main className="blog-page">
      {articleJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      ) : null}
      {articleFaqGraphJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleFaqGraphJsonLd),
          }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      ) : null}

      <ScrollDepthTracker postSlug={slug} />

      <article>
        <header className="blog-post-header">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link href="/blog">Blog</Link>
            {" / "}
            <span>{post.breadcrumbsTitle}</span>
          </nav>
          <p className="blog-post-eyebrow">{post.category}</p>
          <h1 className="blog-post-h1">{post.h1}</h1>
          <p className="blog-post-dek">{post.description}</p>
          <div className="blog-byline">
            <img
              src={BLOG_AUTHOR.headshot}
              alt=""
              width={44}
              height={44}
              className="blog-byline__photo"
            />
            <div>
              <p className="blog-byline__name">By {BLOG_AUTHOR.byline}</p>
            </div>
          </div>
        </header>

        <JumpList headings={headings} postSlug={slug} />

        <PostBody slug={slug} />
      </article>

      <CtaBand heading={ctaHeading} postSlug={slug} />
      <AuthorBox />
    </main>
  );
}
