
import { AIAgentPlaceholder } from "@/components/ai/AIAgentPlaceholder";
import { LineChart } from "lucide-react";

export default function FinanceAdvisor() {
  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen">
      <AIAgentPlaceholder
        title="Finance Advisor Agent"
        description="Receive financial advice, market analysis, investment strategies, and personal finance management tips."
        icon={<LineChart className="h-10 w-10 text-primary" />}
      />
    </div>
  );
}
