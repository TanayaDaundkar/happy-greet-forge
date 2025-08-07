import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain } from "lucide-react";
import { AIAssessmentModal } from "@/components/assessment/AIAssessmentModal";
import { useEffect } from "react";
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.05),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-8xl mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Left side - Content */}
           <div className="text-left max-w-2xl pt-4 pl-12 sm:pl-6 md:pl-0 ml-6 lg:ml-12">

                <div className="mb-12">
                <h2
  className="text-4xl md:text-6xl font-medium font-montserrat mb-8 ml-5 pt-5 bg-gradient-to-r from-[#0077B6] to-[#40C7E8] bg-clip-text text-transparent"
  style={{ lineHeight: '1.25' }} // slightly increased line height for safety
>
  Reimagining Work, <span className="whitespace-nowrap">Learning &amp;Purpose</span>
  <br />
  for the <span style={{ color: '#F57E20' }}>AI Era</span>
</h2>



                </div>
              <div className="flex flex-wrap justify-start gap-3 mb-10">
  {['Hyper-Personalized', 'Future-Proof', 'Career Acceleration'].map((feature) => (
    <span
      key={feature}
      className="px-4 py-2 border-2 border-transparent rounded-full text-sm font-medium font-montserrat"
      style={{
        background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #40C7E8, #0077B6) border-box',
        border: '2px solid transparent',
        borderRadius: '9999px',
        color: 'black',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <Sparkles className="inline w-4 h-4 mr-1" style={{ color: '#40C7E8' }} />
      {feature}
    </span>
  ))}
</div>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button variant="orange" className="font-montserrat font-medium px-8 py-3 hover-scale">
                    Begin Your Assessment
                  </Button>
                  <Button className="font-montserrat font-medium px-8 py-3 bg-[#0C7DA7] text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none border-none">
                    Explore platform
                  </Button>
                </div> */}
              </div>

              {/* Right side - Logo with Animation */}
             <div className="flex justify-center lg:justify-center ">

                <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/logo_gc.png" 
                    alt="Company Logo" 
                    className="w-full h-full object-contain animate-fade-in"
                    style={{
                      animation: 'fade-in 0.6s ease-out'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </>
  );
}
