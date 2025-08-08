import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { NewsCard } from "@/components/ai-updates/NewsCard";
import { LoadingState } from "@/components/ai-updates/LoadingState";
import { ErrorState } from "@/components/ai-updates/ErrorState";
import { fetchNewsItems } from "@/services/supabaseService";
import { NewsItem } from "@/types/aiUpdates";
import { toast } from 'sonner';

export default function AIUpdates() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  const parseDates = (items: any[]): NewsItem[] => {
    return items.map((item) => ({
      ...item,
      published: new Date(item.published),
      fetchedAt: item.fetched_at ? new Date(item.fetched_at) : undefined,
    }));
  };

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const news = await fetchNewsItems();
      const parsedNews = parseDates(news);
      setNewsItems(parsedNews);

      if (parsedNews.length > 0) {
        toast.success(`Successfully loaded ${parsedNews.length} news items from the latest batch`);
      }
    } catch (err) {
      console.error("Supabase fetch error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast.error(`Failed to fetch AI updates: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Updates</h1>
          <p className="text-muted-foreground">
            Latest artificial intelligence news and developments
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingState key={index} />
            ))}
          </div>
        ) : error ? (
          <ErrorState error={error} onRetry={fetchNews} />
        ) : newsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((newsItem) => (
              <NewsCard key={newsItem.id} newsItem={newsItem} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No news items found.</p>
            <button 
              onClick={fetchNews}
              className="text-primary hover:underline"
            >
              Try refreshing
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}




// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Bot,
//   CheckCircle,
//   ArrowRight,
//   Clock,
//   Mail,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect } from 'react';

// const AIUpdates = () => {
//    useEffect(() => {
//           window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//           });
//         }, []);
//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
//       {/* Hero Section */}
//       <section className="pt-40 pb-4 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1
//               className="text-4xl md:text-6xl font-bold font-montserrat mb-8 bg-gradient-to-r from-[#0077B6] to-[#40C7E8] bg-clip-text text-transparent"
//               style={{ lineHeight: '1.2' }}
//             >
//               AI Updates Coming Soon
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
//               Stay ahead with the latest AI developments and industry insights
//             </p>
//             <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
//               <Button className="text-white px-8 py-3 font-lexend font-medium hover-scale bg-gradient-to-r from-[#0077B6] to-[#40C7E8]">
//                 Get Notified
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Coming Soon Section */}
//       <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Why We're Building This Card */}
//               <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
//                 <div className="p-8">
//                   <div className="flex items-start mb-6">
//                     <div 
//                       className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white mr-4"
//                       style={{ 
//                         background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)' 
//                       }}
//                     >
//                       <Bot className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
//                         Why We're Building This
//                       </h2>
//                       <p className="text-gray-600 font-lexend">
//                         Curating the most relevant AI news and insights for your career
//                       </p>
//                     </div>
//                   </div>
                  
//                   <ul className="space-y-4 mt-6">
//                     {[
//                       "Real-time AI industry updates and breakthroughs",
//                       "Personalized insights based on your career goals",
//                       "Expert analysis and commentary on AI trends",
//                       "Actionable intelligence for career advancement"
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
//                         <span className="text-gray-700 font-lexend">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              
//               {/* Be the First to Know Card */}
//               <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
//                 <div className="p-8">
//                   <div className="flex items-start mb-6">
//                     <div 
//                       className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white mr-4"
//                       style={{ 
//                         background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)' 
//                       }}
//                     >
//                       <Mail className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
//                         Be the First to Know
//                       </h2>
//                       <p className="text-gray-600 font-lexend">
//                         Get early access to our AI updates and insights
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4 mt-6">
//                     <div className="flex flex-col space-y-3">
//                       <input 
//                         type="email" 
//                         placeholder="Your email address" 
//                         className="px-4 py-3 border border-gray-300 rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-[#0C7DA7]"
//                       />
//                       <Button 
//                         className="text-white font-lexend font-bold py-3 hover:shadow-lg transition-all duration-300" 
//                         style={{ 
//                           background: 'linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)',
//                           borderRadius: '0.5rem'
//                         }}
//                       >
//                         Notify Me at Launch
//                       </Button>
//                     </div>
//                     <p className="text-sm text-gray-500 font-lexend">
//                       We respect your privacy. Unsubscribe anytime.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AIUpdates;
