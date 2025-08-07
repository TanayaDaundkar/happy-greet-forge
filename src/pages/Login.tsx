import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase"; // ✅ Supabase client import

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Login successful",
        description: "Welcome back!",
      });

      setEmail("");
      setPassword("");
      setIsLoading(false);

      // Navigate to home
      window.location.href = "/";
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: "Login failed",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#eaf6fb] to-[#ffffff] min-h-[calc(100vh-12rem)] flex items-center justify-center px-4 pt-32 py-12">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="mb-6 items-center justify-center font-inter text-[#017ea6] hover:text-[#0496c7] hover:bg-blue-50/80 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Button>

        <Card className="border-white/40 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold font-inter text-gray-900">Welcome back</CardTitle>
            <CardDescription className="font-inter text-gray-600">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-inter text-gray-700 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="font-inter bg-white/80 border-gray-200 text-gray-800 rounded-xl h-12 focus:ring-2 focus:ring-[#017ea6]/20 focus:border-[#017ea6] transition-all duration-300 hover:shadow-md"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-inter text-gray-700 font-medium">Password</Label>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#017ea6] underline-offset-4 hover:underline font-inter hover:text-[#0496c7] transition-colors duration-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="font-inter bg-white/80 border-gray-200 text-gray-800 rounded-xl h-12 focus:ring-2 focus:ring-[#017ea6]/20 focus:border-[#017ea6] transition-all duration-300 hover:shadow-md"
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#017ea6] to-[#0496c7] hover:from-[#0496c7] hover:to-[#017ea6] text-white font-inter font-medium h-12 rounded-xl hover:shadow-lg hover:shadow-[#017ea6]/30 transition-all duration-300 hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="text-center text-sm font-inter text-gray-600">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/signup")}
                  className="font-medium text-[#f37c20] underline-offset-4 hover:underline cursor-pointer font-inter hover:text-[#ff8c42] transition-colors duration-300"
                >
                  Sign up
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
