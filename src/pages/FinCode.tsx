import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Shield, Brain, ArrowRight, CheckCircle, BookOpen, Users, Bot, Briefcase, PieChart, GraduationCap, TrendingDown, Calculator, Target, Settings } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
const FinCode = () => {
   useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
  const products = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "EdTech+Employability Suite",
      subtitle: "Become finance-ready, faster",
      description: "AI-curated learning & placement readiness for aspiring finance professionals",
      features: ["Career-Aligned Curriculum", "CFA-Inspired Bootcamps", "Resume + LinkedIn Optimizer", "Behavioral Interview Coach", "Finance Certification Paths"],
      // agentName: "EduBot",
      gradient: "from-[#0077B6] to-[#40C7E8]"
    },
    // {
    //   icon: <Bot className="h-8 w-8" />,
    //   title: "Finance AI Agent Suite", 
    //   subtitle: "Replace manual research with AI co-pilots",
    //   description: "Autonomous AI agents that reduce hours of financial work into insights in seconds",
    //   features: ["AlphaSage Research Analyst", "TrendSeer Forecasting Engine", "FinModel Factory", "DealRoom Automator", "Save 10+ hours/week"],
    //   agentName: "FinBot",
    //   gradient: "from-green-500 to-teal-600"
    // },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "CFO-as-a-Service",
      subtitle: "Strategic finance for MSMEs", 
      description: "Turn small business finance into a strategic advantage with AI automation",
      features: ["Cash Flow Automation", "Vendor & Credit Scoring", "Smart Pricing Suggestions", "Alerts & Dashboards", "Financial Health KPIs"],
      // agentName: "CFOBot",
       gradient: "from-[#0077B6] to-[#40C7E8]"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Robo-Advisory Engine",
      subtitle: "Democratizing wealth strategy",
      description: "AI-powered personal finance and investment advisory capabilities",
      features: ["Portfolio Generator", "Behavioral Nudging System", "Tax Optimization Engine", "Goal-Based Planning Bots", "Wealth Growth Tools"],
      // agentName: "WealthBot",
       gradient: "from-[#0077B6] to-[#40C7E8]"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Solutions",
      subtitle: "For Institutions & Platforms",
      description: "Build your own finance intelligence layer with FinCode's modular stack",
      features: ["College & EdTech APIs", "Startup & Fintech Integration", "Enterprise L&D Modules", "Government & CSR Programs", "White-labeled Solutions"],
      // agentName: "CustomBot",
       gradient: "from-[#0077B6] to-[#40C7E8]"
    }
  ];

  const aiAgents = [
    {
      name: "AlphaSage",
      role: "Company & Industry Research Analyst",
      description: "Pulls from filings, databases, market trends, SWOT insights, ESG scores"
    },
    {
      name: "TrendSeer", 
      role: "Forecasting & Indicator Engine",
      description: "Macro/microeconomic modeling, sentiment analysis, predictive dashboards"
    },
    {
      name: "FinModel Factory",
      role: "Automated Financial Modeling ", 
      description: "Generates DCFs, LBOs, 3-statement models, scenario planning"
    },
    {
      name: "DealRoom Automator",
      role: "Pitch Deck Intelligence ",
      description: "Transforms models + memos into banker-grade investment presentations"
    }
  ];

  const stats = [
    {
      heading: "AI-Powered Accuracy",
      subtext: "Built using machine learning & financial models"
    },
    {
      heading: "Time-Saving Automation", 
      subtext: "Designed to reduce manual analysis workload"
    },
    {
      heading: "Modular Product Suite",
      subtext: "Finance tools that scale as you grow"
    },
    {
      heading: "AI Agent Suite",
      subtext: "Autonomous, prompt-driven  agents that transform hours of work"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img
  src="/lovable-uploads/Fincode.png"
  alt="FinCode Logo"
  className="mx-auto w-96 md:w-[32rem]  animate-fade-in"

/>


            <p className="text-xl md:text-2xl font-lexend text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Redefining Finance Learning, Research, and Execution with AI
            </p>
            <p className="text-lg font-lexend text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              A next-gen suite of tools that blends financial education, role-specific career development, and intelligent automation into one integrated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button 
                className="text-white px-8 py-3 font-lexend font-bold hover:shadow-lg transition-all duration-300" 
                style={{ backgroundColor: '#F68C1F', borderRadius: '0.5rem' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E07B1A'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#F68C1F'}
              >
                Explore FinCode Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                className="font-lexend font-bold px-8 py-3 border border-[#0077B6] text-[#0077B6] bg-white hover:bg-[#0077B6] hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg"
                style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0A6B91'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'white'}
              >
                Build AI Valuation Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center animate-fade-in min-h-[130px]" style={{ animationDelay: `0ms` }}>
        <div className="stat-heading text-2xl md:text-3xl font-lexend font-bold mb-4" style={{ color: '#0C7DA7' }}>
          AI-Powered Accuracy
        </div>
        <div className="text-gray-600 font-lexend text-sm md:text-base">
          Built using machine learning<br />&amp; financial models
        </div>
      </div>
      <div className="text-center animate-fade-in min-h-[130px]" style={{ animationDelay: `100ms` }}>
        <div className="stat-heading text-2xl md:text-3xl font-lexend font-bold mb-4" style={{ color: '#0C7DA7' }}>
          Time-Saving Automation
        </div>
        <div className="text-gray-600 font-lexend text-sm md:text-base">
          Designed to reduce manual<br />analysis workload
        </div>
      </div>
      <div className="text-center animate-fade-in min-h-[130px]" style={{ animationDelay: `200ms` }}>
        <div className="stat-heading text-2xl md:text-3xl font-lexend font-bold mb-4" style={{ color: '#0C7DA7' }}>
          Modular Product Suite
        </div>
        <div className="text-gray-600 font-lexend text-sm md:text-base">
          Finance tools that scale<br />as you grow
        </div>
      </div>
      <div className="text-center animate-fade-in min-h-[130px]" style={{ animationDelay: `300ms` }}>
        <div className="stat-heading text-2xl md:text-3xl font-lexend font-bold mb-4" style={{ color: '#0C7DA7' }}>
           AI Agent<br />Suite
        </div>
        <div className="text-gray-600 font-lexend text-sm md:text-base">
          Autonomous, prompt-driven<br />agents that transform hours of work
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Comprehensive Product Suite
            </h2>
            <p className="text-xl font-lexend text-gray-600 max-w-4xl mx-auto">
              From education to execution complete finance intelligence ecosystem powered by AI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-10 max-w-5xl  mx-auto">
            {products.map((product, index) => (
             <Card 
  key={product.title}
  className="group hover:shadow-2xl transition-all duration-500 bg-gray-50 border-gray-200  bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in overflow-hidden relative"
  style={{ animationDelay: `${index * 150}ms` }}
>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${product.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-lexend font-bold text-gray-900 mb-2">
                          {product.title}
                        </CardTitle>
                        <p className="font-lexend font-semibold text-lg" style={{ color: '#F57E20' }}>
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* <Badge className="bg-[#f9f9f9] border-0 rounded-xl px-3 py-1 text-xs font-medium" style={{ color: '#0C7DA7' }}>
                      AI Agent: {product.agentName}
                    </Badge> */}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-lexend mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start group/feature">
                        <CheckCircle 
                          className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-200" 
                          style={{ color: '#F57E20' }} 
                        />
                        <span className="text-gray-600 font-lexend text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Spotlight */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Meet Your AI Finance Agents
            </h2>
            <p className="text-xl font-lexend text-gray-600 max-w-4xl mx-auto">
              Autonomous, prompt-driven AI agents that transform hours of work into seconds of insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiAgents.map((agent, index) => (
              <div 
                key={agent.name}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 text-white rounded-lg flex items-center justify-center font-lexend font-bold mr-4" style={{ background: `linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)` }}>
                    {agent.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xl font-lexend font-bold text-brand-dark">{agent.name}</h3>
                    <p className="font-lexend font-medium text-sm" style={{ color: '#0C7DA7' }}>{agent.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 font-lexend">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Ready to Experience AI-Powered Finance Intelligence?
            </h2>
            <p className="text-xl font-lexend text-gray-600 mb-8">
              Transform your financial workflow with FinCode's comprehensive suite of AI tools and educational programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-white font-lexend font-bold px-8 py-3 hover:shadow-lg transition-all duration-300" 
                style={{ backgroundColor: '#F68C1F', borderRadius: '0.5rem' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E07B1A'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#F68C1F'}
              >
                Start Free Trial
              </Button>
              <Button 
  className="font-lexend font-bold px-8 py-3 border border-[#0077B6] text-[#0077B6] bg-white hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg"
  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0A6B91'}
  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'white'}
>
  Partner With Us
</Button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinCode;
