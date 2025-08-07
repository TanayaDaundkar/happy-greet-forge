import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Search, 
  BookOpen, 
  Briefcase 
} from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Assess Your Skills",
            description: "Take our AI-powered assessment to identify your strengths, areas for improvement, and learning style.",
            icon: <BrainCircuit className="w-8 h-8 text-primary" />
        },
        {
            number: "02",
            title: "Explore Career Paths",
            description: "Discover potential career paths based on your skills, interests, and market demand.",
            icon: <Search className="w-8 h-8 text-primary" />
        },
        {
            number: "03",
            title: "Learn with Guidance",
            description: "Engage with adaptive courses and expert mentors who provide personalized guidance.",
            icon: <BookOpen className="w-8 h-8 text-primary" />
        },
        {
            number: "04",
            title: "Build Your Portfolio",
            description: "Apply your skills through real-world projects and build a portfolio that showcases your abilities.",
            icon: <Briefcase className="w-8 h-8 text-primary" />
        },
    ];

    return (
        <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] text-white py-16 px-4 md:px-8">
            {/* Section Title */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    How It Works
                </motion.h2>
                <motion.p 
                    className="text-lg text-white/70"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Your journey from career discovery to professional success in four strategic stages.
                </motion.p>
            </div>

            {/* Mobile View - Vertical Timeline */}
            <div className="lg:hidden">
                <div className="relative max-w-2xl mx-auto">
                    {/* Vertical timeline line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-primary/50 top-0 z-0"></div>
                    
                    <div className="space-y-12 pl-8 md:pl-0 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Step circle */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-sm">{step.number}</span>
                                </div>
                                
                                {/* Step content */}
                                <div className="ml-8 md:ml-0 md:flex md:flex-col md:items-center md:w-full">
                                    <div className="bg-[#1f203a] p-6 rounded-xl shadow-lg w-full">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-3">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold">{step.title}</h3>
                                        </div>
                                        <p className="text-white/80">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop View - Zig-Zag Layout */}
            <div className="hidden lg:block">
                <div className="max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center my-16 ${
                                index % 2 === 0 ? "lg:flex-row-reverse" : ""
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Step Content */}
                            <div className={`bg-[#1f203a] text-white shadow-lg p-8 rounded-xl lg:w-1/2 relative z-10 ${
                                index % 2 === 0 ? "lg:ml-16" : "lg:mr-16"
                            }`}>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                                        {step.number}
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-3">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    </div>
                                </div>
                                <p className="text-lg text-white/80">{step.description}</p>
                            </div>

                            {/* Connector Line */}
                            <div className="hidden lg:block w-24 h-1 bg-primary relative z-0">
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                            </div>

                            {/* Image Placeholder */}
                            <div className={`w-64 h-64 rounded-xl bg-gradient-to-br from-primary to-[#036D9B] flex items-center justify-center text-4xl font-bold text-white/20 relative z-10 ${
                                index % 2 === 0 ? "lg:-ml-16" : "lg:-mr-16"
                            }`}>
                                Step {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}