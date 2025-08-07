import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#0F1026] text-white pt-24">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/10 p-5 rounded-full inline-flex mb-6">
          <Clock className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-white/70 mb-8">
          {description || "This section is currently under development. Please check back soon for updates!"}
        </p>
        
        {/* Center the button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 bg-[#F57E20] hover:bg-[#e76c0f] text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
