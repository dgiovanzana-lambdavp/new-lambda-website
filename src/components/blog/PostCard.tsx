import Link from "next/link";
import { formatShortDate } from "@/lib/blog/posts";
import type { BlogPostMeta } from "@/lib/blog/types";
import { BLOG_AUTHOR } from "@/config/blog";

type PostCardProps = {
  post: BlogPostMeta;
  featured?: boolean;
};

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className="blog-featured-card">
      <div className="blog-featured-card__media" aria-hidden="true">
        <img
          src={post.featuredImage}
          alt=""
          className="blog-featured-card__img"
        />
        <div className="blog-featured-card__overlay" />
        <img
          src="/blog/lambda-square.png"
          alt=""
          width={72}
          height={72}
          className="blog-featured-card__mark"
        />
      </div>
      <div className="blog-featured-card__body">
        <p className="blog-featured-card__eyebrow">
          {featured ? `Featured · ${post.category}` : post.category}
        </p>
        <h2 className="blog-featured-card__title">
          <Link href={`/blog/${post.slug}`} className="blog-featured-card__link">
            {post.metaTitle}
          </Link>
        </h2>
        <p className="blog-featured-card__dek">{post.description}</p>
        <p className="blog-featured-card__meta">
          {BLOG_AUTHOR.name} · {formatShortDate(post.date)}
        </p>
        <Link href={`/blog/${post.slug}`} className="blog-featured-card__btn">
          Read the post
        </Link>
      </div>
    </article>
  );
}
