
import React from 'react';
import { Building, Shield, Cog, Users, ArrowRight, CheckCircle } from 'lucide-react';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain } from "lucide-react";
import { AIAssessmentModal } from "@/components/assessment/AIAssessmentModal";
import { useEffect } from "react";

const Enterprise = () => {
   useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
  const solutions = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Enterprise Integration",
      description: "Seamlessly integrate with your existing enterprise systems and workflows"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with SOC 2 compliance and data encryption"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Management",
      description: "Comprehensive tools for managing and scaling your team's AI capabilities"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40% through AI automation",
    "Scale your team's capabilities without proportional hiring",
    "Ensure compliance with industry regulations and standards",
    "Access 24/7 priority support and dedicated success managers",
    "Custom training and onboarding for your entire organization"
  ];

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-meduim mb-6 animate-fade-in" style={{ color: '#0C7DA7' }}>
              Enterprise AI Solutions
            </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
  Scale your business with enterprise-grade AI solutions built<br />
  for security, compliance, and performance
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button 
                className="text-white px-8 py-3 font-lexend font-bold hover:shadow-lg transition-all duration-300" 
                style={{ backgroundColor: '#F68C1F', borderRadius: '0.5rem' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E07B1A'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#F68C1F'}
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
        <Button  
  className="font-lexend font-bold px-8 py-3 border border-[#0077B6] text-[#0077B6] bg-white hover:bg-[#0077B6] hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg"
  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0A6B91'}
  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'white'}
>
  Contact Sales
</Button>

            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#0C7DA7' }}>
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-gray-600 font-lexend max-w-4xl mx-auto">
              Comprehensive AI platform designed to meet the complex needs of large organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg text-white mb-6" style={{ backgroundColor: '#0C7DA7' }}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-lexend font-semibold mb-4" style={{ color: '#0C7DA7' }}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 font-lexend">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-5xl font-lexend font-bold mb-8" style={{ color: '#0C7DA7' }}>
                  Enterprise Benefits
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#0C7DA7' }} />
                      <p className="text-gray-700 font-lexend text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-10 mt-4 rounded-2xl text-white" style={{ backgroundColor: '#0C7DA7' }}>
                <h3 className="text-2xl font-lexend font-bold mb-6">
                  Ready to Transform Your Enterprise?
                </h3>
                <p className="text-lg font-lexend mb-6 opacity-90">
                  Let's discuss how our AI solutions can revolutionize your business operations and drive growth.
                </p>
                <Button className="bg-white text-white font-lexend font-bold px-6 py-3 hover:scale-105 transition-all duration-300 hover:bg-gray-100" style={{ color: '#0C7DA7' }}>
                  Get Enterprise Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
