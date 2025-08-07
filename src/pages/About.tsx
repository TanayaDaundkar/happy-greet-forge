
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  UserCheck,
  Code,
  Heart,
  Users,
  Zap,
  Shield,
  Rocket,
  Globe,
  Target,
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Cpu, Server, Database, Monitor, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const coreValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centric AI",
      description: "Technology should amplify human potential, not replace it. Our AI systems are designed to empower, guide, and inspire individual growth."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical Intelligence",
      description: "We build AI with transparency, fairness, and accountability at its core, ensuring every recommendation serves the individual's best interests."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Inclusive Growth",
      description: "Career success shouldn't depend on privilege or access. We democratize opportunity through intelligent, accessible career guidance."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Continuous Evolution",
      description: "In a rapidly changing world, we stay ahead of industry shifts to provide the most relevant and forward-thinking career intelligence."
    }
  ];

  const impactStats = [
    { number: "100K+", label: "Lives Transformed" },
    { number: "1000+", label: "Partner Organizations" },
    { number: "98%", label: "Career Success Rate" },
    { number: "50+", label: "Countries Reached" }
  ];

  // const founderStory = [
  //   "Born from the realization that traditional career counseling couldn't keep pace with the AI revolution",
  //   "Founded by technologists who experienced firsthand the gap between education and industry reality",
  //   "Built on the principle that every individual deserves personalized, intelligent career guidance",
  //   "Committed to creating technology that serves humanity's highest potential"
  // ];

  const ourApproach = [
    {
      step: "01",
      title: "assessment",
      description: "We start by truly understanding you - your strengths, values, aspirations, and unique circumstances."
    },
    {
      step: "02",
      title: "awareness",
      description: "Our AI analyzes thousands of career paths to find opportunities perfectly aligned with your profile."
    },
    {
      step: "03",
      title: "Exploration",
      description: "Receive a custom career plan with specific skills, experiences, and connections you need to succeed."
    },
    {
      step: "04",
      title: "preparation",
      description: "As you grow and the world evolves, our AI adapts your plan to keep you on the path to fulfillment."
    }
  ];
   const processSteps = [
      {
        step: "01",
        title: "Assessment",
        description: "Complete comprehensive assessments to understand your unique profile",
        icon: <UserCheck className="h-8 w-8" />,
        color: "#0C7DA7"
      },
      {
        step: "02", 
        title: "Awareness",
        description: "AI algorithms identify your optimal career paths and opportunities",
        icon: <Target className="h-8 w-8" />,
        color: "#0C7DA7"
      },
      {
        step: "03",
        title: "Exploration",
        description: "Follow personalized learning pathways to build required skills",
        icon: <BookOpen className="h-8 w-8" />,
        color: "#0C7DA7"
      },
      {
        step: "04",
        title: "Launch",
        description: "Execute your career transition with our comprehensive toolkit",
        icon: <Rocket className="h-8 w-8" />,
        color: "#0C7DA7"
      }
    ];

  const journeySteps = [
    {
      layer: "LLM Foundation",
      stack: "Self-hosted Deepseek,Llama class models",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-[#0C7DA7] to-[#0C7DA7]"
    },
    {
      layer: "AI Agent System",
      stack: "LangChain, LangGraph, n8n",
      icon: <Server className="h-6 w-6" />,
      color: "from-[#0C7DA7] to-[#0C7DA7]"
    },
    {
      layer: "RAG Engine",
      stack: "Pinecone + memory stores",
      icon: <Database className="h-6 w-6" />,
      color: "from-[#0C7DA7] to-[#0C7DA7]"
    },
    {
      layer: "UI/Delivery",
      stack: "React-based apps, chatbot UIs",
      icon: <Monitor className="h-6 w-6" />,
      color: "from-[#0C7DA7] to-[#0C7DA7]"
    },
    {
      layer: "Monitoring",
      stack: "LangSmith, Grafana, Slack",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-[#0C7DA7] to-[#0C7DA7]"
    },
    {
      layer: "Integration",
      stack: "LMS, CRM, ERP-ready",
      icon: <Link className="h-6 w-6" />,
      color: "from-[#0C7DA7] to-[#0C7DA7]"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      
      {/* Hero Section */}
      <section className="pt-40 pb-8 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
  className="text-4xl md:text-6xl font-meduim font-montserrat mb-8 bg-gradient-to-r from-[#0077B6] to-[#40C7E8] bg-clip-text text-transparent"
  style={{ lineHeight: '1.2' }}
>
  Reimagining Work,<br />
   Learning & Purpose
</h1>

            <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Where artificial intelligence meets human ambition,
               to unlock extraordinary career possibilities
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="text-white px-8 py-3 font-lexend font-medium hover-scale bg-gradient-to-r from-[#0077B6] to-[#40C7E8]">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] p-8 rounded-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg mr-4 text-white" style={{ backgroundColor: '#0C7DA7' }}>
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-lexend font-bold" style={{ color: '#0C7DA7' }}>Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 font-lexend mb-6 leading-relaxed">
                  To democratize access to intelligent career guidance that adapts to each individual's unique journey. We believe every person deserves the opportunity to discover, develop, and deploy their talents in ways that create both personal fulfillment and positive impact.
                </p>
                <p className="text-lg text-gray-700 font-lexend leading-relaxed">
                  Through the power of ethical AI, we're building a world where career decisions are informed by deep self-knowledge, market intelligence, and continuous learning.
                </p>
              </div>
             <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] p-8 rounded-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg mr-4 text-white" style={{ backgroundColor: '#0C7DA7' }}>
                    <Brain className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-lexend font-bold" style={{ color: '#0C7DA7' }}>Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 font-lexend mb-6 leading-relaxed">
                  A future where every individual has access to personalized, intelligent career guidance that evolves with them throughout their professional journey. Where career success is defined not just by traditional metrics, but by alignment with personal values and contribution to society.
                </p>
                <p className="text-lg text-gray-700 font-lexend leading-relaxed">
                  We envision a world where AI amplifies human potential, making career fulfillment accessible to everyone, regardless of background or circumstance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-15" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-black font-lexend font-bold mb-6 " >
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 font-lexend max-w-5xl mx-auto">
              Our core values shape every decision, every feature and every interaction within our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg text-white mb-6" style={{ backgroundColor: '#0C7DA7' }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-lexend font-semibold mb-4" style={{ color: '#0C7DA7' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 font-lexend leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#0C7DA7' }}>
              How We Transform Careers
            </h2>
            <p className="text-xl text-gray-600 font-lexend max-w-4xl mx-auto">
              Our systematic approach combines deep personalization with intelligent automation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
                     {/* Enhanced Container with Background */}
                     <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
           {processSteps.map((step, index) => (
             <div
               key={step.step}
               className="relative flex flex-col items-center text-center animate-fade-in px-2"
               style={{ animationDelay: `${index * 200}ms` }}
             >
               {/* Step Icon */}
               <div className="mb-3 rounded-full  p-4 shadow-sm">
                 {React.cloneElement(step.icon, {
                   className: "h-8 w-8 text-[#F57E20]",
                 })}
               </div>
         
               {/* Step Title */}
               <h3 className="text-lg font-lexend font-bold text-slate-900 mb-1">
                 <span className="text-[#F57E20]"></span> {step.title}
               </h3>
         
               {/* Step Description */}
               <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">{step.description}</p>
         
               {/* Arrow to next step (only show on desktop and not for the last step) */}
               {index < processSteps.length - 1 && (
                 <div className="hidden md:block absolute right-[-22px] top-1/2 transform -translate-y-1/2 z-10">
                   <ArrowRight className="w-6 h-6 text-[#F57E20]" />
                 </div>
               )}
             </div>
           ))}
         </div>
         
         
                     </div>
                   </div>
        </div>
      </section>

      {/* Founder Story */}
      {/* <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-8" style={{ color: '#0C7DA7' }}>
                  Why We Started Gurukul Code
                </h2>
                <div className="space-y-6">
                  {founderStory.map((story, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#0C7DA7' }} />
                      <p className="text-gray-700 text-lg font-lexend leading-relaxed">{story}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-lexend font-bold mb-6" style={{ color: '#0C7DA7' }}>
                  Join Our Movement
                </h3>
                <p className="text-gray-600 font-lexend mb-6">
                  Be part of the AI-powered career revolution. Whether you're starting your journey or ready to make a change, we're here to guide you toward your most fulfilling path.
                </p>
                <div className="space-y-4">
                  <Button 
                    className="text-white font-lexend font-bold px-6 py-3 hover:shadow-lg transition-all duration-300 w-full" 
                    style={{ backgroundColor: '#F68C1F', borderRadius: '0.5rem' }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E07B1A'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#F68C1F'}
                  >
                    Start Your Journey
                  </Button>
                  <Button 
                    className="font-lexend font-bold px-8 py-3 border border-[#0077B6] text-[#0077B6] bg-white hover:bg-[#0077B6] hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg"
                    style={{ backgroundColor: '#0C7DA7', borderRadius: '0.5rem' }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0A6B91'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'white'}
                  >
                    Partner With Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#0C7DA7' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold text-white mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-white/90 font-lexend mb-8">
              Join aspiring professionals who've discovered their path through intelligent career guidance. Your extraordinary career starts here</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-white font-lexend font-bold px-8 py-3 hover:shadow-lg transition-all duration-300" 
                style={{ backgroundColor: '#F68C1F', borderRadius: '0.5rem' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E07B1A'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#F68C1F'}
              >
                Begin Your Journey
              </Button>
              <Button 
                className="font-lexend font-bold px-8 py-3 border border-[#0077B6] text-[#0077B6] bg-white hover:bg-[#0077B6] hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg"
                variant="outline"
                style={{ borderRadius: '0.5rem' }}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>        
      </section>

      {/* Tech Infrastructure Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-lexend font-bold mb-6" style={{ color: '#0C7DA7' }}>
              Built with Future-Focused AI Infrastructure
            </h2>
            <p className="text-xl text-gray-600 font-lexend max-w-4xl mx-auto mb-8">
              Enterprise-grade technology stack designed for scale, security and performance
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white border rounded-full font-lexend font-medium" style={{ borderColor: '#0C7DA7', color: '#0C7DA7' }}>
              Your data. Your control. Your custom agents.
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {journeySteps.map((tech, index) => (
              <motion.div
                key={tech.layer}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg text-white mb-4" style={{ backgroundColor: '#0C7DA7' }}>
                  {tech.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-lexend font-semibold mb-2" style={{ color: '#0C7DA7' }}>
                  {tech.layer}
                </h3>
                <p className="text-gray-600 font-lexend text-sm">
                  {tech.stack}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: '#0C7DA7' }}></div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button 
              className="text-white px-8 py-3 rounded-full font-lexend font-medium hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#0C7DA7' }}
              onClick={() => navigate('/coming-soon')}
            >
              Partner With Gurukul Code
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
