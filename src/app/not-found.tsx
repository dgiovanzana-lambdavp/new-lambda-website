import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Lambda Capital",
  description:
    "This page does not exist. Browse the Lambda Capital blog or return home.",
  robots: { index: false, follow: true },
};

/**
 * Publish-ready 404 for unknown routes and unknown /blog/[slug] paths.
 * Rendered inside the root layout (nav, footer, Roboto Condensed headings).
 */
export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center section-padding bg-background">
      <div className="container-custom text-center max-w-2xl mx-auto">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          Page not found
        </h1>
        <p className="mb-10 text-lg text-muted">
          This page does not exist or is no longer published.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Browse the blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-foreground px-6 py-3 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
