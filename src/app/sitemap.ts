import type { MetadataRoute } from "next";
import { ALL_POSTS } from "@/lib/blog/posts";
import { BLOG_SITE_ORIGIN } from "@/config/blog";

/**
 * Generated from the blog post list, so publishing a post updates the
 * sitemap automatically. Static pages carry no lastmod: we have no
 * reliable date for them, and a wrong one is worse than none.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const newestPostDate = ALL_POSTS.map((p) => p.updated)
    .sort()
    .at(-1);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BLOG_SITE_ORIGIN}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BLOG_SITE_ORIGIN}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BLOG_SITE_ORIGIN}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BLOG_SITE_ORIGIN}/team`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BLOG_SITE_ORIGIN}/contact`, changeFrequency: "yearly", priority: 0.6 },
    {
      url: `${BLOG_SITE_ORIGIN}/blog`,
      lastModified: newestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const posts: MetadataRoute.Sitemap = ALL_POSTS.map((post) => ({
    url: `${BLOG_SITE_ORIGIN}/blog/${post.slug}`,
    lastModified: post.updated,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
