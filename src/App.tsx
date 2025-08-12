
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import AIAssessment from "./pages/AIAssessment";
import Enterprise from "./pages/Enterprise";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import CareerDevelopment from "./pages/CareerDevelopment";
// import { ChatBotProvider } from "./hooks/use-chatbot";
// import { ChatButton } from "./components/chat/ChatButton";
// import { ChatInterface } from "./components/chat/ChatInterface";
import { useSupabaseAuth } from "./hooks/useSupabaseAuth";
import AIUpdates from "./pages/AIUpdates";
import TechInsights from "./pages/TechInsights";
import FinanceAdvisor from "./pages/FinanceAdvisor";
import EducationAssistant from "./pages/EducationAssistant";
import CareerAdvisor from "./pages/CareerAdvisor";
import FinCode from "./pages/FinCode";
import LetsAdvance from "./pages/LetsAdvance";
import LearningCenter from "./pages/LearningCenter";
import CareerCenter from "./pages/CareerCenter";
import ExploreCoursesPage from "./pages/ExploreCoursesPage";
import GetStartedPage from "./pages/GetStartedPage";
import PricingPage from "./pages/PricingPage";
import Platform from "./pages/Platform";

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useSupabaseAuth();
  
  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <ChatBotProvider> */}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/career-development" element={<CareerDevelopment />} />
                <Route path="/fincode" element={<FinCode />} />
                <Route path="/lets-advance" element={<LetsAdvance />} />
                <Route path="/ai-assessment" element={<AIAssessment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing-page" element={<PricingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/community" element={<Community />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/coming-soon" element={<ComingSoon />} />

                <Route 
                  path="/profile" 
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  } 
                />
                
                {/* AI Agent Routes */}
                <Route path="/ai-updates" element={<AIUpdates />} />
                <Route path="/tech-insights" element={<TechInsights />} />
                <Route path="/finance-advisor" element={<FinanceAdvisor />} />
                <Route path="/education-assistant" element={<EducationAssistant />} />
                <Route path="/career-advisor" element={<CareerAdvisor />} />
                
                {/* New routes for Learning Center, Career Center and CTAs */}
                <Route path="/learning-center" element={<LearningCenter />} />
                <Route path="/career-center" element={<CareerCenter />} />
                <Route path="/explore-courses" element={<ExploreCoursesPage />} />
                <Route path="/get-started" element={<GetStartedPage />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
            {/* <ChatButton /> */}
            {/* <ChatInterface /> */}
          </BrowserRouter>
        {/* </ChatBotProvider> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
