
import { AIAgentPlaceholder } from "@/components/ai/AIAgentPlaceholder";
import { GraduationCap } from "lucide-react";

export default function EducationAssistant() {
  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen">
      <AIAgentPlaceholder
        title="Education Assistant Agent"
        description="Access learning resources, study guides, educational content, and academic support across various subjects."
        icon={<GraduationCap className="h-10 w-10 text-primary" />}
      />
    </div>
  );
}
