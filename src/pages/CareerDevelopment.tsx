import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Target, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Award, 
  Zap,
  Brain,
  Bot,
  Rocket,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Heart,
  Lightbulb,
  Trophy,
  UserCheck,
  BarChart3,
  DollarSign,
  Scale
} from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';



const CareerDevelopment = () => {
  const heroFeatures = [
    { icon: <Brain className="h-8 w-8" style={{ color: '#0C7DA7' }} />, text: "Personalized career intelligence based on your unique profile" },
    { icon: <Target className="h-8 w-8" style={{ color: '#0C7DA7' }} />, text: "AI-powered insights that adapt to market trends" },
    { icon: <Rocket className="h-8 w-8" style={{ color: '#0C7DA7' }} />, text: "Ethical AI that puts your agency and privacy first" }
  ];

   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, []);

  const modules = [
    {
      id: "discovery",
      icon: <Brain className="h-8 w-8" />,
      title: "Self-Discovery Engine",
      subtitle: "Understand yourself to lead your future",
      description: "Your gateway to lifelong career intelligence. Blends neuroscience, psychometrics, and behavioral analytics into a holistic profile.",
      features: [
        "Personality & Cognitive Profiling",
        "Values & Motivation Elicitation", 
        "Burnout & Energy Baseline",
        "Career Fit Score™",
        "Role Profiling"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "assistant",
      icon: <Bot className="h-8 w-8" />,
      title: "AI Career Assistant",
      subtitle: "Your conversational partner for growth decisions",
      description: "GPT-4 Turbo-powered agent built on RAG pipeline with memory, reflection, and role awareness.",
      features: [
        "Real-time Dialogue",
        "Next Best Step Engine",
        "Dynamic Role Simulation",
        "Opportunity Radar"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "accelerator",
      icon: <BookOpen className="h-8 w-8" />,
      title: "Skill Accelerator",
      subtitle: "Learn what matters, when it matters, with who matters",
      description: "Adaptive, modular skill-building engine that unites content, community, and competency.",
      features: [
        "Adaptive Learning Paths",
        "Mentor-Led Studios",
        "Micro-Certifications",
        "Live Capstone Hackathons"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "toolkit",
      icon: <Briefcase className="h-8 w-8" />,
      title: "Job-Ready Toolkit",
      subtitle: "Show up smarter, sharper, and confidently job-ready",
      description: "Convert skills and aspirations into career outcomes with comprehensive preparation tools.",
      features: [
        "AI Resume Builder",
        "LinkedIn Optimizer",
        "Mock Interview Simulator",
        "FitScore™ Role Matching",
        "Negotiation Playbooks"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "portfolio",
      icon: <Award className="h-8 w-8" />,
      title: "Portfolio & Validation Hub",
      subtitle: "Proof-of-work becomes your personal brand",
      description: "Credible, digital-first platform for showcasing verified outputs, not just inputs.",
      features: [
        "Auto-Generated Portfolio Sites",
        // "Blockchain-Authenticated Ledger",
        "hands-on Real World Projects",
        "Peer Review & Community Upvotes"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "mentorship",
      icon: <Users className="h-8 w-8" />,
      title: "Coaching & Mentorship Network",
      subtitle: "Grow with those who've walked the path before you",
      description: "Structured mentorship and scalable coaching programs embedded within your journey.",
      features: [
        "AI-Matched Mentors",
        "Leadership Pods",
        "Communication & Conflict Clinics",
        "Emotional Intelligence Workouts",
        "Nudging & Habit Formation"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    // {
    //   id: "wellness",
    //   icon: <Heart className="h-8 w-8" />,
    //   title: "Career Health & Life Design",  
    //   subtitle: "Sustainability is not just environmental — it's professional",
    //   description: "Beyond skills and salaries to design purposeful, regenerative careers.",
    //   features: [
    //     "Burnout Early Warning System",
    //     "Quarterly Impact Dashboard",
    //     "Work-Life-Purpose Integration",
    //     "Long-Term Reflection Journal"
    //   ],
    //   color: "from-brand-blue to-brand-cyan"
    // }
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

  const outcomes = [
    { 
      icon: <Briefcase className="h-8 w-8" />, 
      title: "92% Career Satisfaction", 
      description: "Users report higher job satisfaction within 6 months",
      iconColor: "#3B82F6", // Blue
      hoverColor: "hover:border-blue-300 hover:bg-blue-50"
    },
    { 
      icon: <DollarSign className="h-8 w-8" />, 
      title: "65% Salary Increase", 
      description: "Average salary improvement after program completion",
      iconColor: "#14B8A6", // Teal
      hoverColor: "hover:border-teal-300 hover:bg-teal-50"
    },
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: "3x Faster Transitions", 
      description: "Accelerated career change compared to traditional methods",
      iconColor: "#8B5CF6", // Purple
      hoverColor: "hover:border-purple-300 hover:bg-purple-50"
    },
    { 
      icon: <Heart className="h-8 w-8" />, 
      title: "Work-Life Balance", 
      description: "Find careers that align with your lifestyle goals",
      iconColor: "#10B981", // Green
      hoverColor: "hover:border-green-300 hover:bg-green-50"
    }
  ];

  const testimonials = [
     {
      name: "Shruti Rajguru", 
      role: "Production Engineer Support at Creospan ",
      quote: "The personalized learning pathway was game-changing. Every skill I learned directly contributed to landing my dream job. It felt like the entire journey was designed just for me, step by step.",
      rating: 5
    },
    {
      name: "Rohini Satale",
      role: "Software Developer - AI & Platform Engineer at GurukulCode ",
      quote: "Starting with Gurukul Code as a learner, I was guided through every step of my career journey — from discovering AI careers to landing a role within the same platform. ",
      rating: 5
    }
   
  ];

  return (
    <div className="bg-white min-h-screen font-lexend">
      {/* Enhanced Hero Section - Reduced padding */}
      <section className="pt-40 pb-12 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-brand-blue text-brand-orange mb-6 animate-fade-in">
  <Zap className="h-5 w-5 mr-2 text-brand-orange" />
  <span className="text-sm font-medium">AI-Powered Career Intelligence</span>
</div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-montserrat font-medium mb-6 animate-fade-in" style={{ color: '#0C7DA7', animationDelay: '200ms' ,lineHeight: '1.2' }}>
              Empowering Sustainable Career Growth <span style={{ color: '#F57E20' }}>with AI</span>
            </h2>

            {/* Hero Features - Updated to Square Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '600ms' }}>
  {heroFeatures.map((feature, index) => (
    <div
      key={index}
      className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-40 flex flex-col items-center justify-center text-center mx-2"
    >
      <div className="mb-3">
        {feature.icon}
      </div>
      <p className="text-sm font-medium text-gray-800 leading-relaxed">
        {feature.text}
      </p>
    </div>
  ))}
</div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
  <Button className="bg-[#0077B6] text-white px-8 py-4 text-lg font-lexend font-semibold hover:scale-105 transition-transform shadow-2xl hover:bg-[#036D9B]">
    Start Your Journey
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</div>

          </div>
        </div>
      </section>

      {/* Core Features Section - Reduced padding */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Deeply Intgrated Platfrom For Complete Career Mastery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each feature is designed to work seamlessly together, creating a comprehensive ecosystem for your professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {modules.map((module, index) => (
    <div
      key={module.id}
      className="bg-white p-8 rounded-2xl text-slate-900 relative overflow-hidden shadow-md border border-gray-200 animate-fade-in flex flex-col min-h-[500px]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative z-10 flex-grow space-y-4">
        {/* Icon + Title */}
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white"
            style={{
              background: `linear-gradient(to bottom right, ${module.color.includes('brand-blue') ? '#0C7DA7' : '#56C7DF'}, ${module.color.includes('brand-cyan') ? '#56C7DF' : '#0C7DA7'})`
            }}
          >
            {module.icon}
          </div>
          <h4 className="text-xl font-montserrat font-bold">{module.title}</h4>
        </div>

        {/* Subtitle */}
        <p className="italic text-brand-orange font-medium">{module.subtitle}</p>

        {/* Description */}
        <p className="text-gray-700">{module.description}</p>

        {/* Features */}
        <ul className="space-y-2 pt-2">
          {module.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed-position CTA */}
      <div className="pt-4 mt-auto">
        <Button className="bg-[#0077B6] hover:bg-[#036D9B] text-white font-medium w-24">
          Try Demo
        </Button>
      </div>
    </div>
  ))}
</div>
</div>
      </section>

      {/* Process Flow Section - Reduced padding */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* <Badge className="mb-4 px-4 py-2 text-white" style={{ backgroundColor: '#0C7DA7' }}>Our Process</Badge> */}
            <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-4">
              Your Journey to Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confidently move from self-awareness to real-world success.
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

      {/* Outcomes & Results Section - Reduced padding and updated colors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* <Badge className="mb-4 px-4 py-2" style={{ backgroundColor: '#0C7DA7', color: 'white' }}>Proven Results</Badge> */}
              <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-4">
                Real <span style={{ color: '#F57E20' }}> Impact</span>,   Real <span style={{ color: ' #036D9B' }}>Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers measurable outcomes that transform careers and lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {outcomes.map((outcome, index) => (
                <Card 
                  key={outcome.title}
                  className={`text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white ${outcome.hoverColor}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    border: `2px solid #F68C1F`
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <div
  className="w-14 h-14 rounded-full flex items-center justify-center text-white"
  style={{
    background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)'
  }}
>
                      {outcome.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-lexend font-bold text-slate-900 mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </Card>
              ))}
            </div>

            {/* Success Stories Heading */}
            <div className="text-center mb-4">
              <h2 className="text-3xl font-lexend font-bold text-slate-900">
                Success Stories
              </h2>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="p-6 shadow-lg bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    border: `1px solid #F68C1F`
                  }}
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#0C7DA7' }} />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-base italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );  
};

export default CareerDevelopment;
