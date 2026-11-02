import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "./blog/blog.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import {
  LAMBDA_GROWTH_CAPITAL_DESCRIPTION,
  LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
  LAMBDA_ORGANIZATION_JSON_LD,
} from "@/config/cta";

/**
 * The site's two typefaces.
 *
 * Loaded through `next/font` so files are self-hosted at build time
 * (no render-blocking Google Fonts request, no flash of fallback text).
 * Inter stays on body copy; Roboto Condensed is the display/heading face.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lambdavp.com"),
  title: "Lambda Capital - Investing in Mission-Critical Technology",
  description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION,
  keywords:
    "growth capital, vertical SaaS, govtech, compliance technology, financial services technology, national security, software financing",
  authors: [{ name: "Lambda Capital" }],
  creator: "Lambda Capital",
  publisher: "Lambda Capital",
  formatDetection: { email: false, address: false, telephone: false },
  /*
    Icons declared here rather than as raw <link> tags in a <head>
    block. Next emits them into the document head itself, and keeping
    them in metadata means the app router can dedupe them against any
    per-page overrides.

    Canonical and openGraph.url are set per page (see page.tsx files).
    Leaving them here made every route declare the homepage as
    canonical, which Search Console flagged as alternate pages.
  */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Lambda Capital - Investing in Mission-Critical Technology",
    description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
    siteName: "Lambda Capital",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lambda Capital - Investing in Mission-Critical Technology",
    description: LAMBDA_GROWTH_CAPITAL_DESCRIPTION_SHORT,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Nav and footer live here, so every route gets the site chrome —
 * including the funnel.
 *
 * The brief is explicit that the thank-you screens keep the site nav
 * and offer a way back to /portfolio, which only holds if the shell is
 * above the contact route rather than inside it.
 *
 * `<main>` is deliberately not here. The marketing pages and the
 * contact layout each own their main element, because the funnel's
 * split-screen shell needs to control that box itself.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LAMBDA_ORGANIZATION_JSON_LD),
          }}
        />
        <Suspense fallback={null}>
          <AnalyticsProvider>
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>
            <Navigation />
            <div id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </div>
            <Footer />
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
