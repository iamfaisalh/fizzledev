"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { EMAIL } from "@/lib/constants";

export default function Contact() {
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

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 will-change-transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </div>

          <div className="transition-all p-8 duration-1000 will-change-transform max-w-6xl mx-auto pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group h-full"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    Email
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <a
                href="tel:+19253053624"
                className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group h-full"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    Phone
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    +1 (925) 305-3624
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 h-full">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-400">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} FizzleDev. Built with Next.js, TypeScript,
          and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
