"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const experiences = [
    {
      company: "Aletha Health",
      location: "Walnut Creek, CA",
      totalPeriod: "Jan 2025 – Present",
      color: "from-purple-400 to-pink-400",
      positions: [
        {
          title: "Software Engineer",
          period: "Jan 2025 – Present",
          highlights: [
            "Solely led performance optimizations that, for the first time in company history, passed Core Web Vitals on both mobile and desktop, raising scores from 33 to 88 (mobile) and 70 to 100 (desktop).",
            "Boosted search visibility with a dynamic XML sitemap and region-aware hreflang tags. Audited crawl issues and tracked indexing with Google Search Console, Ahrefs, and GTM.",
            "Transitioned CMS platforms from WordPress ACF to Storyblok and Plasmic, integrating with Shopify's GraphQL API and Next.js to streamline regional content delivery.",
            "Designed a scalable UI system by mapping Figma Tokens (via Tokens Studio) into Tailwind CSS configuration, reducing UI drift and speeding up development.",
            "Set up GitHub-based CI/CD pipelines for dev, UAT, and production environments using AWS, ensuring consistent and reliable deployments.",
          ],
        },
      ],
    },
    {
      company: "FizzleDev",
      location: "Concord, CA",
      totalPeriod: "Feb 2024 – Present",
      color: "from-pink-400 to-purple-600",
      positions: [
        {
          title: "Founder & Full Stack Engineer",
          period: "Feb 2024 – Present",
          highlights: [
            "Built a financial workflow tool for a nonprofit, automating donation and membership tracking.",
            "Delivered critical product features for stealth startup clients under aggressive timelines, including secure auth, RBAC, and CMS-driven pages, helping accelerate MVP launches and investor demos.",
          ],
        },
      ],
      description:
        "FizzleDev is my freelance dev practice focused on improving and building performant web apps and tools for clients, using modern technologies and frameworks.",
    },
    {
      company: "Stealth Startup",
      location: "Remote",
      totalPeriod: "Dec 2024 – May 2025",
      color: "from-purple-600 to-blue-400",
      positions: [
        {
          title: "Founding Engineer",
          period: "Feb 2024 – Present",
          highlights: [
            "Sole engineer responsible for delivering a fully functional MVP in 3 weeks, enabling the founders to secure investor funding and pilot users (university partners).",
            "Built a Retrieval-Augmented Generation (RAG) system using OpenAI, LangChain, and Supabase to help financial aid officers query complex policy PDF documents using natural language.",
            "Developed an AI agent with chain-of-thought reasoning to triage student emails, perform actions, and integrate with third-party systems like Banner (SIS) and PeopleSoft.",
            "Built the entire stack in Next.js (TypeScript, React, Node.js, Tailwind CSS) with Supabase Auth for SSO and RBAC, secured via Row-Level Security (RLS).",
            "Tuned prompts, refined chunking, and debugged hallucinations to improve answer grounding and reliability.",
            "Leveraged GitHub and Vercel for automated deployments, preview builds, and streamlined staging-to-production flow with Next.js.",
          ],
        },
      ],
    },
    {
      company: "Dart Health",
      location: "San Francisco, CA",
      totalPeriod: "Jan 2021 – Feb 2024",
      color: "from-purple-400 to-pink-400",
      positions: [
        {
          title: "Founding Engineer",
          period: "Sep 2021 – Feb 2024",
          highlights: [
            "Built a HIPAA-aware chatbot using OpenAI Assistants API, reducing founder support workload by 40%.",
            "Integrated Stripe Connect for B2B and B2C payments, and implemented PDF invoicing with Merge API and Adobe PDF Services.",
            "Implemented full-stack testing with Jest and Cypress, saving 15–20 hours/week in manual QA.",
            "Led development of a project portal and real-time messaging system combining Linear-style task flows with Slack-style chat (React, TypeScript, Tailwind CSS).",
          ],
        },
        {
          title: "Software Engineer Intern",
          period: "Jan 2021 – Sep 2021",
          highlights: [
            "Built a social media automation system with scheduling for Facebook, Instagram, and Twitter, powered by Bannerbear and platform APIs.",
            "Translated Figma wireframes into modular, reusable React components, speeding up dev handoff by 20%.",
            "Designed and optimized database schemas in MongoDB for scalability.",
          ],
        },
      ],
      description:
        "Promoted from intern to lead engineer as the company evolved from CRM to fintech to healthcare compliance. The company, MarketFly, was acquired and rebranded to Puzzl, then to Dart Health.",
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            {/* <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              4+ years of professional experience building scalable applications
              and leading development teams
            </p> */}
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] will-change-transform ${
                  isVisible
                    ? "animate-fade-in-up opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{
                  animationDelay: `${index * 300}ms`,
                  transitionDelay: `${index * 300}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}
                    >
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.totalPeriod}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-300 mb-6 border-l-2 border-purple-500/30 pl-4 italic">
                    {exp.description}
                  </p>
                )}

                <div className="space-y-8 relative">
                  {exp.positions.length > 1 && (
                    <div className="absolute left-[7px] top-[24px] bottom-[24px] w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-400/50"></div>
                  )}

                  {exp.positions.map((position, posIndex) => (
                    <div key={position.title} className="relative">
                      {exp.positions.length > 1 && (
                        <div
                          className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r ${exp.color} z-10`}
                        ></div>
                      )}

                      <div
                        className={`${exp.positions.length > 1 ? "pl-8" : ""}`}
                      >
                        <h4
                          className={`text-xl font-semibold text-white ${
                            exp.positions.length > 1 ? "mb-1" : "mb-3"
                          }`}
                        >
                          {position.title}
                        </h4>
                        {exp.positions.length > 1 && (
                          <div className="flex items-center space-x-1 text-gray-500 mb-3">
                            <Calendar size={14} />
                            <span>{position.period}</span>
                          </div>
                        )}

                        <ul className="space-y-3">
                          {position.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 text-gray-300"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                              ></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
