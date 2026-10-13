export type BlogPostMeta = {
  slug: string;
  /** Short title used on the index card and in <title> */
  metaTitle: string;
  /** Full H1 on the post page */
  h1: string;
  description: string;
  category: string;
  date: string;
  updated: string;
  author: string;
  authorRole: string;
  featuredImage: string;
  ogImage: string;
  breadcrumbsTitle: string;
};

export type BlogHeading = {
  id: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
