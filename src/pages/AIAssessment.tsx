import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain } from "lucide-react";
import { AIAssessmentModal } from "@/components/assessment/AIAssessmentModal";
import { useEffect } from "react";

const AIAssessment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, []);

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen container mx-auto py-32 px-4 md:px-6 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
          <Brain className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
  AI-Powered Career Assessment
</h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover your ideal career path through our interactive AI assessment
        </p>
        <Button 
  size="lg" 
  onClick={() => setIsModalOpen(true)}
  className="mt-6 text-white bg-[#F57E20] hover:bg-[#e86e10] transition-colors"
>
  Start Your Assessment <ChevronRight className="ml-2" />
</Button>
      </section>

      {/* Information Sections */}
      <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Five Key Pillars</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Personal Interests and Passions</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Skills and Aptitudes</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Personality Traits</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Values and Work Preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Career Motivation and Goals</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <p className="text-muted-foreground">
            Our AI assessment uses advanced algorithms to analyze your responses to a series of interactive questions. The assessment adapts based on your answers, creating a personalized experience.
          </p>
          <p className="text-muted-foreground">
            Upon completion, you'll receive tailored career recommendations that align with your unique profile.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Benefits</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Gain deeper insights into your strengths and preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Discover career paths you may not have considered</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Make more informed decisions about your professional future</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Receive personalized guidance for your career journey</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 p-8 rounded-lg text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to discover your ideal career path?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our AI-powered assessment will guide you through an interactive experience to help you find the career that best matches your interests, skills, and goals.
        </p>
        <Button 
  size="lg" 
  onClick={() => setIsModalOpen(true)}
  className="text-white bg-[#F57E20] hover:bg-[#e86e10] transition-colors"
>
  Let's Start
</Button>
      </section>

      {/* Assessment Modal */}
      <AIAssessmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AIAssessment;
