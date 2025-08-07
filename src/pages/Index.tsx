import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import VisionSection from "@/components/home/VisionSection";
import { SummaryContent } from "@/components/ai-updates/SummaryContent";
import { useEffect, useState } from "react";
import { NewsItem } from "@/types/aiUpdates";

const Index = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://your-ngrok-url.ngrok.io/api/news");
        const data = await res.json();
        setNewsItems(data.newsItems || []);
      } catch (err) {
        console.error("Failed to fetch news", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] min-h-screen">
      <HeroSection />
      <VisionSection />

      {/* ✅ AI News Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-white">
        <SummaryContent newsItems={newsItems} />
      </div>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
