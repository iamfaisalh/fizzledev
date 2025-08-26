"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import GitHubIcon from "@/components/icons/github-icon";
import { GITHUB_URL } from "@/lib/constants";

const IMAGES_PATH = "/images/projects";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  color: string;
  comingSoon: boolean;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AI Image Generation Studio",
    description: "Generate and modify LinkedIn style B2B advertisement images.",
    tech: [
      "OpenAI (gpt-image-1)",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Supabase",
      "Vercel",
      "Zod",
    ],
    images: [
      `${IMAGES_PATH}/ImageGenerationStudio/slide1.png`,
      // `${IMAGES_PATH}/ImageGenerationStudio/slide2.png`,
      // `${IMAGES_PATH}/ImageGenerationStudio/slide3.png`,
      // `${IMAGES_PATH}/ImageGenerationStudio/slide4.png`,
    ],
    // github: `${GITHUB_URL}/image-generation-studio`,
    color: "from-blue-400 to-purple-400",
    comingSoon: false,
  },
  {
    title: "Financial App",
    description:
      "Buy and sell stocks with the ability to search stocks, see live data with an interactive chart, and also analyze your portfolio using AI.",
    tech: [
      "Python",
      "Flask",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "PostgreSQL",
      "yFinance",
      "Highcharts",
    ],
    images: [`${IMAGES_PATH}/FinancialApp/slide1.png`],
    github: `${GITHUB_URL}/financial-app`,
    color: "from-purple-400 to-pink-400",
    comingSoon: false,
  },
  {
    title: "ChoiceHub",
    description:
      "A platform where friends can vote on various types of nearby places, from dining options to other locations of interest. Users select categories, cast their votes, and view real-time results, making group decisions easy and enjoyable.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Google Maps Platform",
      "Supabase",
      "GitHub Actions",
    ],
    images: [`${IMAGES_PATH}/ChoiceHub/slide1.png`],
    color: "from-pink-400 to-purple-600",
    comingSoon: true,
  },
  {
    title: "Streamify",
    description:
      "Connect your Spotify account and view data and analytics on the dashboard.",
    tech: [
      "React",
      "TypeScript",
      "Material UI",
      "Node/Express.js",
      "Spotify API",
      "Google Cloud Platform (Cloud Run, Firestore)",
    ],
    images: [`${IMAGES_PATH}/Streamify/slide1.png`],
    color: "from-purple-600 to-blue-400",
    comingSoon: true,
  },
  {
    title: "FizzleDev",
    description:
      "This website you are on! Once again, FizzleDev is my freelance dev practice focused on improving and building performant web apps and tools for clients, using modern technologies and frameworks.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Radix UI",
      "Resend",
    ],
    images: [`${IMAGES_PATH}/FizzleDev/slide1.png`],
    github: `${GITHUB_URL}/fizzledev`,
    color: "from-pink-400 to-purple-600",
    comingSoon: false,
  },
  {
    title: "UNO",
    description:
      "The card game, UNO. Some features include accounts, game lobbies, game chat, and leaderboards. TODO: Mobile responsive.",
    tech: ["Node/Express.js", "Handlebars", "PostgreSQL", "AWS S3"],
    images: [`${IMAGES_PATH}/Uno/slide1.png`],
    github: `${GITHUB_URL}/term-project-uno-forked`,
    color: "from-blue-400 to-purple-400",
    comingSoon: false,
  },
  {
    title: "Estimate Builder",
    description: "Paving contractors can create estimates for their customers.",
    tech: [
      "React",
      "TypeScript",
      "Bootstrap",
      "Node/Express.js",
      "MongoDB",
      "Jest",
    ],
    images: [`${IMAGES_PATH}/EstimateBuilder/slide1.png`],
    github: `${GITHUB_URL}/estimate-builder`,
    color: "from-purple-400 to-pink-400",
    comingSoon: false,
  },
  {
    title: "Picture Detector",
    description:
      "iOS application where you can upload a picture and it will detect what is likely in the picture using machine learning and neural networks.",
    tech: ["Swift", "Apple Core ML", "ResNet-50"],
    images: [`${IMAGES_PATH}/PictureDetector/slide1.png`],
    github: `${GITHUB_URL}/picture-detector`,
    color: "from-purple-600 to-blue-400",
    comingSoon: false,
  },
  {
    title: "Concentration",
    description:
      "iOS application for the card game, Concentration, also known as the matching game.",
    tech: ["Swift"],
    images: [`${IMAGES_PATH}/Concentration/slide1.png`],
    github: `${GITHUB_URL}/concentration`,
    color: "from-blue-400 to-purple-400",
    comingSoon: false,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

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
  useEffect(() => {
    const initialIndex: { [key: number]: number } = {};
    projects.forEach((_, index) => {
      initialIndex[index] = 0;
    });
    setCurrentImageIndex(initialIndex);
  }, []);

  const nextImage = (
    projectIndex: number,
    imageCount: number,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % imageCount,
    }));
  };

  const prevImage = (
    projectIndex: number,
    imageCount: number,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + imageCount) % imageCount,
    }));
  };

  const goToImage = (
    projectIndex: number,
    imageIndex: number,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative min-h-[4300px] md:min-h-[2600px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            {/* <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all  hover:scale-[1.02] will-change-transform ${
                  isVisible
                    ? "animate-fade-in-up opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                // style={{
                //   animationDelay: `${index * 300}ms`,
                //   transitionDelay: `${index * 300}ms`,
                // }}
              >
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden group/carousel">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${
                        (currentImageIndex[index] || 0) * 100
                      }%)`,
                    }}
                  >
                    {project.images.map((imageSrc, imgIndex) => (
                      <div
                        key={`${project.title} - Image ${imgIndex + 1}`}
                        className="relative h-full flex-[0_0_100%] shrink-0"
                      >
                        <Image
                          src={imageSrc}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          fill
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          priority={imgIndex === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                      <span className="text-xs text-white font-medium">
                        {(currentImageIndex[index] || 0) + 1} /{" "}
                        {project.images.length}
                      </span>
                    </div>
                  )}

                  {project.comingSoon && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                        Coming Soon
                      </div>
                    </div>
                  )}

                  {project.comingSoon && (
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px] z-10"></div>
                  )}

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) =>
                          prevImage(index, project.images.length, e)
                        }
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 hover:scale-110 z-10"
                      >
                        <ChevronLeft size={16} className="text-white" />
                      </button>

                      <button
                        onClick={(e) =>
                          nextImage(index, project.images.length, e)
                        }
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 hover:scale-110 z-10"
                      >
                        <ChevronRight size={16} className="text-white" />
                      </button>
                    </>
                  )}

                  {project.images.length > 1 && !project.comingSoon && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm py-2 px-4 flex justify-between items-center transform transition-transform duration-300 translate-y-0 sm:translate-y-full group-hover:translate-y-0 z-10`}
                    >
                      <div className="flex-1">
                        <span className="text-xs text-gray-400">
                          Click dots or arrows to navigate
                        </span>
                      </div>
                    </div>
                  )}
                  {project.comingSoon && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm py-2 px-4 flex justify-between items-center transform transition-transform duration-300 translate-y-0 sm:translate-y-full group-hover:translate-y-0 z-10`}
                    >
                      <div className="flex-1">
                        <span className="text-xs text-yellow-400 font-medium">
                          Project in development
                        </span>
                      </div>
                    </div>
                  )}

                  {!project.comingSoon && (
                    <div className="flex space-x-3">
                      {project.github && (
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm py-2 px-4 flex justify-between items-center transform transition-transform duration-300 translate-y-0 sm:translate-y-full group-hover:translate-y-0 z-10`}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer ml-auto"
                          >
                            <GitHubIcon size={16} />
                            <span className="text-sm">GitHub</span>
                          </a>
                        </div>
                      )}
                      {project.demo && (
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm py-2 px-4 flex justify-between items-center transform transition-transform duration-300 translate-y-0 sm:translate-y-full group-hover:translate-y-0 z-10`}
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                          >
                            <ExternalLink size={16} />
                            <span className="text-sm">Demo</span>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {project.images.length > 1 && (
                  <div className="flex justify-center space-x-2 py-3 border-b border-purple-500/20">
                    {project.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={(e) => goToImage(index, imgIndex, e)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          (currentImageIndex[index] || 0) === imgIndex
                            ? `bg-gradient-to-r ${project.color}`
                            : "bg-gray-500 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} text-white font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
