import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JumpList from "@/components/blog/JumpList";
import CtaBand from "@/components/blog/CtaBand";
import AuthorBox from "@/components/blog/AuthorBox";
import GovTechPostContent from "@/components/blog/GovTechPostContent";
import { BLOG_AUTHOR, BLOG_SITE_ORIGIN } from "@/config/blog";
import {
  ALL_POSTS,
  GOVTECH_FAQ_JSON_LD,
  POST_HEADINGS,
  formatLongDate,
  getPostBySlug,
  postCanonical,
} from "@/lib/blog/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const canonical = postCanonical(post.slug);

  const articleJsonLd = {
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

  return (
    <main className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(GOVTECH_FAQ_JSON_LD),
        }}
      />

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
              <p className="blog-byline__name">
                By Domenic Giovanzana, Founder and General Partner
              </p>
              <p className="blog-byline__meta">
                Last updated{" "}
                <time dateTime={post.updated}>
                  {formatLongDate(post.updated)}
                </time>{" "}
                · {post.readingTimeMinutes} min read
              </p>
            </div>
          </div>
        </header>

        <JumpList headings={POST_HEADINGS} />

        {slug === "government-contract-financing-for-software-companies" ? (
          <GovTechPostContent />
        ) : null}
      </article>

      <CtaBand heading="Growing a GovTech software company?" />
      <AuthorBox />
    </main>
  );
}
