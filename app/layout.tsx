import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faisal Hakimi - Full Stack Software Engineer | FizzleDev",
  description:
    "Full Stack Software Engineer with 4+ years of experience building scalable web applications. Specializing in React, Next.js, TypeScript, Node.js, and AI-powered solutions.",
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
        url: `${SITE_URL}/images/fizzledev-logo.png`,
        width: 1200,
        height: 630,
        alt: "FizzleDev - Faisal Hakimi Portfolio",
        type: "image/png",
      },
      {
        url: `${SITE_URL}/images/fizzledev-logo.png`,
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
    images: [`${SITE_URL}/images/fizzledev-logo.png`],
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
  //   // Verification tags (add these when setting up Google Search Console, etc.)
  //   verification: {
  //     // google: "your-google-verification-code",
  //     // yandex: "your-yandex-verification-code",
  //     // yahoo: "your-yahoo-verification-code",
  //   },
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
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
