import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * The site's two typefaces.
 *
 * The old marketing site pulled these from a Google Fonts `@import` at
 * the top of its globals.css. Loading them through `next/font` instead
 * self-hosts the files at build time, which removes a render-blocking
 * request to a third-party origin and eliminates the flash of fallback
 * text. Same fonts, same weights — better delivery.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lambdavp.com"),
  title: "Lambda Capital - Investing in Mission-Critical Technology",
  description:
    "Lambda Capital is a permanent capital holding company investing in vertical market technology that strengthens national security and core sectors of the economy.",
  keywords:
    "permanent capital, vertical SaaS, govtech, compliance technology, financial services technology, national security, investment",
  authors: [{ name: "Lambda Capital" }],
  creator: "Lambda Capital",
  publisher: "Lambda Capital",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  /*
    Icons declared here rather than as raw <link> tags in a <head>
    block. Next emits them into the document head itself, and keeping
    them in metadata means the app router can dedupe them against any
    per-page overrides.
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
    url: "https://lambdavp.com",
    title: "Lambda Capital - Investing in Mission-Critical Technology",
    description:
      "A permanent capital holding company investing in vertical market technology that strengthens national security and core sectors of the economy.",
    siteName: "Lambda Capital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lambda Capital - Investing in Mission-Critical Technology",
    description:
      "A permanent capital holding company investing in vertical market technology that strengthens national security and core sectors of the economy.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
