
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bot, Newspaper, Code, LineChart, GraduationCap, Briefcase, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AIAgent {
  name: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export function AIAgentsButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const aiAgents: AIAgent[] = [
    {
      name: "AI Updates",
      description: "Latest updates in AI technology",
      icon: <Newspaper className="h-4 w-4 mr-2" />,
      action: () => navigate("/ai-updates"),
    },
    {
      name: "Tech",
      description: "Tech industry insights and trends",
      icon: <Code className="h-4 w-4 mr-2" />,
      action: () => navigate("/tech-insights"),
    },
    {
      name: "Finance",
      description: "Financial advice and market analysis",
      icon: <LineChart className="h-4 w-4 mr-2" />,
      action: () => navigate("/finance-advisor"),
    },
    {
      name: "Education",
      description: "Learning resources and study help",
      icon: <GraduationCap className="h-4 w-4 mr-2" />,
      action: () => navigate("/education-assistant"),
    },
    {
      name: "Career",
      description: "Career guidance and job search",
      icon: <Briefcase className="h-4 w-4 mr-2" />,
      action: () => navigate("/career-advisor"),
    },
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Bot size={18} />
          AI Agents
          <ChevronDown size={16} className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[240px]">
        <DropdownMenuLabel>Select AI Agent</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {aiAgents.map((agent) => (
          <DropdownMenuItem
            key={agent.name}
            className="flex items-center cursor-pointer py-2"
            onClick={() => {
              agent.action();
              setIsOpen(false);
            }}
          >
            {agent.icon}
            <div>
              <div className="font-medium">{agent.name}</div>
              <p className="text-xs text-muted-foreground">{agent.description}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
