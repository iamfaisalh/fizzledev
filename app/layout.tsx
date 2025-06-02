import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faisal Hakimi - Full Stack Software Engineer | FizzleDev",
  description:
    "Full Stack Software Engineer with 4+ years of experience building scalable web applications. Specializing in React, Next.js, TypeScript, Node.js, and AI-powered solutions. Available for freelance projects.",
  keywords: [
    "Faisal Hakimi",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "FizzleDev",
    "Web Development",
    "AI Development",
    "Freelance Developer",
    "San Francisco",
    "Portfolio",
  ],
  authors: [{ name: "Faisal Hakimi", url: SITE_URL }],
  creator: "Faisal Hakimi",
  publisher: "FizzleDev",
  metadataBase: new URL(SITE_URL),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "FizzleDev - Faisal Hakimi Portfolio",
    title: "Faisal Hakimi - Full Stack Software Engineer | FizzleDev",
    description:
      "Full Stack Software Engineer with 4+ years of experience building scalable web applications. Specializing in React, Next.js, TypeScript, Node.js, and AI-powered solutions.",
    images: [
      {
        url: "/images/fizzledev-logo.png",
        width: 1200,
        height: 630,
        alt: "FizzleDev - Faisal Hakimi Portfolio",
        type: "image/png",
      },
      {
        url: "/images/fizzledev-logo.png",
        width: 800,
        height: 600,
        alt: "FizzleDev Logo",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Faisal Hakimi - Full Stack Software Engineer | FizzleDev",
    description:
      "Full Stack Software Engineer with 4+ years of experience building scalable web applications. Specializing in React, Next.js, TypeScript, Node.js, and AI-powered solutions.",
    images: ["/images/fizzledev-logo.png"],
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

  // Verification tags (add these when setting up Google Search Console, etc.)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  applicationName: "FizzleDev Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",

  icons: {
    icon: [
      { url: "/images/fizzledev-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/fizzledev-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/fizzledev-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/images/fizzledev-logo.png",
      },
    ],
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href={SITE_URL} />

        {/* Favicon and app icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/fizzledev-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/fizzledev-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/fizzledev-logo.png"
        />
        <link rel="shortcut icon" href="/images/fizzledev-logo.png" />

        {/* JSON-LD structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faisal Hakimi",
              jobTitle: "Full Stack Software Engineer",
              description:
                "Full Stack Software Engineer with 4+ years of experience building scalable web applications",
              url: SITE_URL,
              image: `${SITE_URL}/images/fizzledev-logo.png`,
              sameAs: [GITHUB_URL, LINKEDIN_URL],
              worksFor: {
                "@type": "Organization",
                name: "FizzleDev",
                url: SITE_URL,
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "Full Stack Development",
                "AI Development",
                "Web Development",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: EMAIL,
                contactType: "professional",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
