
import { Book, BarChart, Users, Award, Code, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Our adaptive AI analyzes your learning style and progress to deliver personalized content that maximizes your potential.",
    colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: Book,
    title: "Expert-Crafted Curriculum",
    description: "Learn from industry-leading experts with courses designed to build both theoretical knowledge and practical skills.",
    colorClass: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    icon: Users,
    title: "Mentorship Connection",
    description: "Connect with experienced mentors  provide guidance, feedback, and support throughout your learning journey.",
    colorClass: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    icon: BarChart,
    title: "Career Assessment",
    description: "Discover your strengths, identify skill gaps, and receive custom recommendations for career growth.",
    colorClass: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
  },
  {
    icon: Code,
    title: "Interactive Coding",
    description: "Practice with real-time coding environments, receive instant feedback, and build a portfolio of projects.",
    colorClass: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description: "Earn industry-recognized credentials that validate your skills and boost your employability.",
    colorClass: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-lexend font-bold mb-4"
            style={{ color: '#F57E20' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transforming Education with<br />Advanced Technology
          </motion.h2>
          <motion.p 
            className="text-lg font-lexend text-gray-600 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform combines traditional teaching wisdom with cutting-edge AI to deliver a learning experience that adapts to your unique needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] backdrop-blur-sm border border-white/30 rounded-xl p-6 hover-scale shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.colorClass)}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-lexend font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="font-lexend text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
