import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const KnowledgeHub = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Hero Section */}
      <section
        className="pt-40 pb-4 relative overflow-hidden"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold font-montserrat mb-8 bg-gradient-to-r from-[#0077B6] to-[#40C7E8] bg-clip-text text-transparent"
              style={{ lineHeight: "1.2" }}
            >
              Coming Soon
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              A central place to learn, explore, and grow your skills
            </p>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default KnowledgeHub;
