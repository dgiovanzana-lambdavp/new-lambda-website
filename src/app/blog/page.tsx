import type { Metadata } from "next";
import PostCard from "@/components/blog/PostCard";
import CtaBand from "@/components/blog/CtaBand";
import {
  ALL_POSTS,
  blogIndexCanonical,
  getNewestPost,
} from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog | Lambda Capital",
  description:
    "Notes from Lambda Capital on growth capital, permanent capital and building vertical software companies.",
  alternates: { canonical: blogIndexCanonical() },
  openGraph: {
    type: "website",
    title: "Lambda Capital Blog",
    description:
      "Notes from Lambda Capital on growth capital, permanent capital and building vertical software companies.",
    url: blogIndexCanonical(),
    images: [{ url: "/og/blog-index.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lambda Capital Blog",
    description:
      "Notes from Lambda Capital on growth capital, permanent capital and building vertical software companies.",
    images: ["/og/blog-index.jpg"],
  },
};

export default function BlogIndexPage() {
  const featured = getNewestPost();
  const morePosts = ALL_POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <main className="blog-page">
      <section className="blog-title-block section-padding">
        <div className="container-custom">
          <h1>Lambda Capital Blog</h1>
          <p className="blog-lede">
            Notes on growth capital for vertical software companies.
          </p>
        </div>
      </section>

      <section className="blog-featured-section">
        <div className="blog-featured-section__inner">
          <PostCard post={featured} />
          {morePosts.length === 0 ? (
            <p className="blog-more-note">More notes are on the way.</p>
          ) : (
            <>
              <h2 className="sr-only">More posts</h2>
              {/* Grid reserved for 2+ posts; not shown with a single post. */}
            </>
          )}
        </div>
      </section>

      <CtaBand heading="Ready to Work with Us?" />
    </main>
  );
}
