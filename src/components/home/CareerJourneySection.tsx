import { motion } from "framer-motion";
import { Cpu, Server, Database, Monitor, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const journeySteps = [
  {
    layer: "LLM Foundation",
    stack: "Self-hosted Llama  models",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    layer: "AI Agent System",
    stack: "LangChain, LangGraph, n8n",
    icon: <Server className="h-6 w-6" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    layer: "RAG Engine",
    stack: "Pinecone + memory stores",
    icon: <Database className="h-6 w-6" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    layer: "UI/Delivery",
    stack: "React-based apps, chatbot UIs",
    icon: <Monitor className="h-6 w-6" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    layer: "Monitoring",
    stack: "LangSmith, Grafana, Slack",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    layer: "Integration",
    stack: "LMS, CRM, ERP-ready",
    icon: <Link className="h-6 w-6" />,
    color: "from-blue-600 to-blue-800"
  }
];

export function CareerJourneySection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-lexend font-bold mb-6 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-text text-transparent">
            Built with Future-Focused AI Infrastructure
          </h2>
          <p className="text-xl text-gray-600 font-lexend max-w-3xl mx-auto mb-8">
            Enterprise-grade technology stack designed for scale, security, and performance
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border rounded-full font-lexend font-medium border-transparent bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-border text-transparent bg-clip-text">
            Your data. Your control. Your custom agents.
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {journeySteps.map((tech, index) => (
            <motion.div
              key={tech.layer}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg text-white mb-4 bg-gradient-to-r from-[#40C7E8] to-[#0077B6]">
                {tech.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-lexend font-semibold mb-2 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-text text-transparent">
                {tech.layer}
              </h3>
              <p className="text-gray-600 font-lexend text-sm">
                {tech.stack}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-[#40C7E8] to-[#0077B6]"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            className="text-white px-8 py-3 rounded-full font-lexend font-medium hover:opacity-90 transition-all duration-300 bg-gradient-to-r from-[#40C7E8] to-[#0077B6]"
            onClick={() => navigate('/coming-soon')}
          >
            Partner With Gurukul Code
          </button>
        </div>
      </div>
    </section>
  );
}
