import { EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_URL } from "@/lib/constants";

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="color-scheme" content="dark" />
      <link rel="canonical" href={SITE_URL} />
      <link rel="icon" href="/images/fizzledev-logo.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/images/fizzledev-logo.png" />
      <link rel="shortcut icon" href="/images/fizzledev-logo.png" />

      {/* Structured Data - Person */}
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

      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FizzleDev",
            url: SITE_URL,
            description:
              "Faisal Hakimi's personal portfolio showcasing full stack engineering work, projects, and AI-powered solutions.",
            image: `${SITE_URL}/images/fizzledev-logo.png`,
            publisher: {
              "@type": "Person",
              name: "Faisal Hakimi",
            },
          }),
        }}
      />
    </>
  );
}
