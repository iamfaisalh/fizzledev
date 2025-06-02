"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { submitContactForm } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { EMAIL } from "@/lib/constants";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      console.log("Form data:", {
        name: formData.get("name"),
        email: formData.get("email"),
        messageLength: (formData.get("message") as string)?.length,
      });

      const result = await submitContactForm(formData);

      console.log("Server response:", result);

      if (result.success) {
        console.log("Success! Showing success toast");
        toast({
          title: "Message sent successfully!",
          description: result.message,
          duration: 5000,
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.log("Error! Showing error toast:", result.error);
        toast({
          title: "Failed to send message",
          description: result.error,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Client-side error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      console.log("Form submission completed");
      setIsSubmitting(false);
    }
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group"
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
                className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group"
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

              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-400">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
        <p className="text-gray-400">
          © 2025 FizzleDev. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
