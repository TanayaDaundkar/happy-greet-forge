import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  User,
  Users,
  Building,
  Clock,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';

const PricingPage = () => {
   useEffect(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, []);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="pt-40 pb-4 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold font-montserrat mb-8 bg-gradient-to-r from-[#0077B6] to-[#40C7E8] bg-clip-text text-transparent"
              style={{ lineHeight: '1.2' }}
            >
              Pricing Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              We're crafting the perfect pricing plans for your career journey
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="text-white px-8 py-3 font-lexend font-medium hover-scale bg-gradient-to-r from-[#0077B6] to-[#40C7E8]">
                Get Notified
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Why We're Taking Our Time Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div 
                      className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white mr-4"
                      style={{ 
                        background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)' 
                      }}
                    >
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
                        Why We're Taking Our Time
                      </h2>
                      <p className="text-gray-600 font-lexend">
                        We're carefully designing pricing options that provide real value
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mt-6">
                    {[
                      "Truly affordable for students and career changers",
                      "Flexible enough to grow with your career progression",
                      "Transparent with no hidden fees or surprises",
                      "Value-packed with premium AI features"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-lexend">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Be the First to Know Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div 
                      className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white mr-4"
                      style={{ 
                        background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)' 
                      }}
                    >
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
                        Be the First to Know
                      </h2>
                      <p className="text-gray-600 font-lexend">
                        Join our early access list for founding member pricing
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex flex-col space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="px-4 py-3 border border-gray-300 rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-[#0C7DA7]"
                      />
                      <Button 
                        className="text-white font-lexend font-bold py-3 hover:shadow-lg transition-all duration-300" 
                        style={{ 
                          background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)',
                          borderRadius: '0.5rem'
                        }}
                      >
                        Notify Me at Launch
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 font-lexend">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Preview */}
      {/* <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#0C7DA7' }}>
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 font-lexend max-w-4xl mx-auto">
              A sneak peek at our upcoming pricing structure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                description: "Perfect for exploring career options",
                price: "Free",
                features: ["Basic assessment", "Career suggestions", "Learning resources"],
                icon: <User className="h-6 w-6" />,
                color: "from-[#0C7DA7] to-[#0C7DA7]"
              },
              {
                name: "Professional",
                description: "For serious career growth",
                price: "19",
                period: "/month",
                features: ["Personalized AI coach", "Skill development", "Job matching"],
                icon: <Users className="h-6 w-6" />,
                color: "from-[#F68C1F] to-[#F68C1F]"
              },
              {
                name: "Enterprise",
                description: "For teams & organizations",
                price: "Custom",
                features: ["Unlimited access", "Admin dashboard", "Dedicated support"],
                icon: <Building className="h-6 w-6" />,
                color: "from-[#0077B6] to-[#40C7E8]"
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div 
                  className="inline-flex p-3 rounded-lg text-white mb-4"
                  style={{ 
                    background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)' 
                  }}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-lexend mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold font-lexend" style={{ color: '#0C7DA7' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 font-lexend"> {plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-lexend text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full py-3 font-lexend font-bold" 
                  style={{ 
                    background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)',
                    borderRadius: '0.5rem'
                  }}
                  disabled
                >
                  Coming Soon
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20" style={{ backgroundColor: '#0C7DA7' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold text-white mb-6">
              Want Early Access?
            </h2>
            <p className="text-xl text-white/90 font-lexend mb-8">
              Join our beta program and help shape our pricing while getting exclusive benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-white font-lexend font-bold px-8 py-3 hover:shadow-lg transition-all duration-300" 
                style={{ 
                  background: 'linear-gradient(135deg, #F68C1F 0%, #FFB347 100%)',
                  borderRadius: '0.5rem'
                }}
              >
                Apply for Beta Access
              </Button>
              <Button 
                className="font-lexend font-bold px-8 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0C7DA7] hover:shadow-lg transition-all duration-300"
                variant="outline"
                style={{ borderRadius: '0.5rem' }}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>        
      </section> */}
    </div>
  );
};

export default PricingPage;