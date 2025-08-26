"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
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

  const featuredSkills = [
    { name: "TypeScript", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 95, color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
    { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
    { name: "Express.js", level: 90, color: "from-gray-500 to-gray-700" },
    { name: "Python", level: 85, color: "from-blue-500 to-yellow-500" },
    { name: "Tailwind CSS", level: 80, color: "from-teal-400 to-teal-600" },
  ];

  const allSkills = {
    Languages: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "SQL",
      "HTML (HTML5)",
      "CSS",
      "Sass/SCSS",
      "Java",
      "C",
      "C++",
      "Swift",
      "Ruby",
    ],
    Frontend: [
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn",
      "Radix UI",
      "GSAP",
      "Highcharts",
      "Recharts",
    ],
    Backend: [
      "Express.js",
      "Django",
      "Flask",
      "Node.js",
      "WebSocket",
      "REST APIs",
      "GraphQL",
    ],
    "AI / LLMS": [
      "OpenAI",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Prompt Engineering",
      "Agentic Workflows",
    ],
    Databases: [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "MongoDB",
      "Firebase (Firestore, Auth)",
    ],
    "Cloud & DevOps": [
      "AWS",
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Vercel",
      "GitHub Actions",
      "CI/CD Pipelines",
    ],
    "Testing & QA": ["Jest", "Cypress", "Test-Driven Development (TDD)"],
    "Developer Tools": [
      "Git",
      "GitHub",
      "NPM",
      "Yarn",
      "Webpack",
      "Vite",
      "VS Code",
      "Cursor",
      "Jira",
      "Linear",
      "Figma",
    ],
    "Content & CMS Platforms": ["WordPress ACF", "Storyblok", "Plasmic"],
    "Architecture & Practices": [
      "Agile",
      "Scrum",
      "Single Page Application (SPA) Architecture",
      "Design Tokens",
      "Multi-Tenant SaaS",
    ],
    "Optimization & Analytics": [
      "SEO",
      "A/B Testing",
      "Core Web Vitals",
      "Performance Auditing",
      "Google Tag Manager (GTM)",
      "Google Search Console",
      "Ahrefs",
    ],
    "Soft Skills": [
      "Communication",
      "Collaboration",
      "Problem-solving",
      "Adaptability",
      "Time Management",
      "Leadership",
      "Creativity",
      "Client Management",
      "Attention to Detail",
      "Conflict Resolution",
    ],
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 will-change-transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <Image
                    src="/images/profile.jpg"
                    alt="Faisal Hakimi - Profile Picture"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                I'm a passionate full stack engineer with over 7 years of coding
                experience and a B.S. in Computer Science from San Francisco
                State University, which I earned in 2022. I've worked at
                early-stage startups where I wore many hats, collaborated
                closely with founders and designers, and built products from the
                ground up. I thrive in fast-paced environments where building
                and shipping quickly drives real impact. From responsive UIs to
                scalable backend systems, I love turning complex problems into
                elegant solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me experimenting with new
                technologies, exploring nature, capturing moments through
                photography, trying new foods, lifting weights, watching sports,
                working on cars, and gaming (Call of Duty is my go-to). I'm also
                a huge animal lover—especially cats.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Skills
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group ${isVisible ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {skill.level / 10} / 10
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                All Skills
              </span>
            </h3>

            <div className="space-y-8">
              {Object.entries(allSkills).map(
                ([category, skills], categoryIndex) => (
                  <div
                    key={category}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 ${
                      isVisible ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: `${categoryIndex * 200 + 800}ms` }}
                  >
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mr-3"></div>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-purple-500/20 hover:border-purple-400/40 hover:bg-gray-600/50 transition-all duration-200"
                          style={{
                            animationDelay: `${
                              categoryIndex * 200 + skillIndex * 50 + 1000
                            }ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
