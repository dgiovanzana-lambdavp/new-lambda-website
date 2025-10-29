import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Lambda Capital - Investing in Next-Generation Defense Technology',
  description: 'Lambda Capital is a venture capital firm focused on investing in defense technology companies. We partner with mission-driven founders building the future of national security through AI, autonomy, cybersecurity, and aerospace innovation.',
  keywords: 'venture capital, defense technology, AI, autonomy, cybersecurity, aerospace, investment, national security',
  authors: [{ name: 'Lambda Capital' }],
  creator: 'Lambda Capital',
  publisher: 'Lambda Capital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lambdavp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lambdavp.com',
    title: 'Lambda Venture Partners - Investing in Next-Generation Defense Technology',
    description: 'We partner with mission-driven founders building the future of national security through AI, autonomy, cybersecurity, and aerospace innovation.',
    siteName: 'Lambda Capital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lambda Capital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lambda Venture Partners - Investing in Next-Generation Defense Technology',
    description: 'We partner with mission-driven founders building the future of national security through AI, autonomy, cybersecurity, and aerospace innovation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

