import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen bg-gradient-to-br from-[#0F1026] via-[#1a1c3d] to-[#2d3185] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <motion.div 
        className="text-center max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <motion.div 
          className="inline-flex p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Clock className="h-16 w-16 text-brand-cyan" />
        </motion.div>

        {/* Main Content */}
        <motion.h1 
          className="text-4xl md:text-6xl font-lexend font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Coming Soon
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          We're putting the finishing touches on this amazing feature. 
          Stay tuned for something extraordinary!
        </motion.p>

        {/* Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {['AI-Powered', 'Personalized', 'Innovative'].map((feature, index) => (
            <motion.span 
              key={feature}
              className="px-4 py-2 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9]/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <Sparkles className="inline w-4 h-4 mr-1" />
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <Button 
            onClick={() => navigate(-1)} 
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-lexend font-semibold px-8 py-3 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
          
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="border-white/30 text-white hover:bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9]/10 font-lexend font-semibold px-8 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Button>
        </motion.div>

        {/* Bottom Text */}
        <motion.p 
          className="mt-12 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Thank you for your patience as we build something amazing for you
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
