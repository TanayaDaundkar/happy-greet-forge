
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#0077B6] to-[#40C7E8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get exclusive insights on AI trends, career intelligence, and platform updates 
            delivered to your inbox every week.
          </p>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button
                  type="submit"
                  variant="orange"
                  className="px-8 py-3 rounded-full font-montserrat font-medium transition-colors"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center text-white">
                <CheckCircle className="h-6 w-6 mr-2" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            )}

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8 text-sm text-white/80">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F57E20] rounded-full mr-2"></div>
                Weekly AI insights
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F57E20] rounded-full mr-2"></div>
                Career intelligence tips
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F57E20] rounded-full mr-2"></div>
                Early access features
              </div>
            </div>
          </div>

          <motion.p
            className="mt-8 font-lexend text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join a growing community of professionals building their future with us.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
