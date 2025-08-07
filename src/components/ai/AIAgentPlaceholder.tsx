import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface AIAgentPlaceholderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function AIAgentPlaceholder({ title, description, icon }: AIAgentPlaceholderProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F1026] text-white pt-24">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            {icon || <Bot className="h-10 w-10 text-primary" />}
          </div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-white/70 max-w-xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#1f203a] border-white/20 text-white">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>What this AI agent can do for you</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">✓</span>
                  <span>Access the latest information in this domain</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">✓</span>
                  <span>Get personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">✓</span>
                  <span>Ask specific questions related to this field</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1f203a] border-white/20 text-white">
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>Future capabilities being developed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">
                This AI agent is currently under development. More advanced features will be added soon!
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-[#F57E20] hover:bg-[#e76c0f] text-white"
                onClick={() => navigate("/")}
              >
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
