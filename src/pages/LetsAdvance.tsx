
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Target, ArrowRight, CheckCircle, TrendingUp, BookOpen, Award } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
const LetsAdvance = () => {
  const contentPillars = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "General Content",
      items: ["Insights & Trends", "News and Updates", "AI-Driven Analysis", "Digital Transformation", "Thought Leadership"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Content", 
      items: ["How-To Guides", "Case Studies", "Best Practices", "Industry Deep-Dives", "Expert Interviews"]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Development",
      items: ["Certification Courses", "Micro-Masters", "Advanced Programs", "Skill Assessments", "Mentorship Programs"]
    }
  ];

  const programs = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation Labs",
      description: "Hands-on experience with cutting-edge technologies and methodologies"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Projects",
      description: "Work with diverse teams on real-world challenges and solutions"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Achievement",
      description: "Structured approach to reaching your personal and professional milestones"
    }
  ];

  const outcomes = [
    "Surface untold career struggles and breakthrough stories",
    "Build a network of like-minded innovators and industry leaders",
    "Access raw, multi-format content that drives career clarity",
    "Connect with Gurukul Code platform for real mentorship and preparation",
    "Transform career confusion into actionable direction and purpose"
  ];
   useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-40 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-lexend font-bold text-brand-dark mb-6 animate-fade-in">
              Let's <span style={{ color: '#F57E20' }}>Advance</span>
            </h1>
            <p className="text-xl md:text-2xl font-lexend text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Content Creation & Community Network for Career Truth
            </p>
            <p className="text-lg font-lexend text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              Igniting a cultural shift where career exploration is raw, relatable, and real empowering every individual to confront their pain points, question their path, and find direction through truth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 text-white rounded-lg mr-4" style={{ backgroundColor: '#0C7DA7' }}>
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-lexend font-bold" style={{ color: '#036D9B' }}>Our Vision</h2>
                </div>
                <p className="text-gray-700 font-lexend leading-relaxed">
                  To surface the untold — the struggles, the switches, the sacrifices — and guide audiences toward actual change through Gurukul Code. In a world of noise, we spark clarity through real stories, street insights, and bold conversations.
                </p>
              </div>
            <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 text-white rounded-lg mr-4" style={{ backgroundColor: '#0C7DA7' }}>
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-lexend font-bold" style={{ color: '#036D9B' }}>Our Mission</h2>
                </div>
                <p className="text-gray-700 font-lexend leading-relaxed">
                  To build a content ecosystem that drives career awareness and exploration — capturing raw truths and meaningful insights across formats. Every insight leads toward action, connecting our audience to real mentorship and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Pillars Section */}
      <section className="py-10 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Structured Content Pillars
            </h2>
            <p className="text-xl font-lexend text-gray-600 max-w-3xl mx-auto">
             Comprehensive content strategy covering industry insights,<br />practical knowledge, and career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] backdrop-blur-sm border border-white/30 rounded-xl p-6 hover-scale shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
    {pillar.icon}
  </div>
  <h3 className="text-xl font-lexend font-semibold text-gray-900">
    {pillar.title}
  </h3>
</div>

                <ul className="space-y-2">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 font-lexend">
                      <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#0C7DA7' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Community Advancement Programs
            </h2>
            <p className="text-xl font-lexend text-gray-600 max-w-3xl mx-auto">
              Beyond content creation - collaborative programs designed to accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className="text-center p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg text-white mb-6" style={{ backgroundColor: '#0C7DA7' }}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-lexend font-semibold text-brand-dark mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 font-lexend">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
  <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Outcomes List */}
        <div>
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-8" style={{ color: '#F57E20' }}>
            What You'll Experience
          </h2>
          <div className="space-y-6">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#0C7DA7' }} />
                <p className="text-gray-700 font-lexend text-lg whitespace-nowrap">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card - Shifted Right */}
       <div className="lg:ml-24 lg:w-4/5 mt-8 w-full bg-gradient-to-br from-gray-50 to-transparent p-8 rounded-2xl">
  <h3 className="text-2xl font-lexend font-bold mb-6" style={{ color: '#036D9B' }}>
    Ready to Find Your Direction?
  </h3>
  <p className="text-gray-600 font-lexend mb-6">
    Let's Advance is not just a question — it's the start of your answer. Join our community of truth-seekers and career pioneers.
  </p>
  <Button 
    className="text-white font-lexend font-bold px-6 py-3 hover:shadow-lg transition-all duration-300"
    style={{ backgroundColor:'#0C7DA7', borderRadius: '0.5rem' }}
    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#036D9B'}
    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0C7DA7'}
  >
    Join Our Community
  </Button>
</div>


      </div>
    </div>
  </div>
</section>



      
    </div>
  );
};

export default LetsAdvance;
