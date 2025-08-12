import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOffline(!navigator.onLine);
    };
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isOffline) {
      toast({
        title: "No internet connection",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data: existingUser } = await supabase
        .from("users")
        .select("email")
        .eq("email", email.toLowerCase())
        .maybeSingle();

      if (existingUser) {
        toast({
          title: "Email already in use",
          description: "Please use a different email address.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } }
      });

      if (signupError) throw signupError;

      const { error: insertError } = await supabase.from("users").insert({
        uid: data.user?.id,
        name,
        email: email.toLowerCase(),
        created_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      toast({ title: "Account created", description: "Welcome to Gurukul Code!" });

      setName("");
      setEmail("");
      setPassword("");
      setIsLoading(false);

      window.location.href = "/";
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#eaf6fb] to-[#ffffff] min-h-[calc(100vh-12rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="mb-6 font-inter text-[#017ea6] hover:text-[#0496c7] hover:bg-blue-50/80 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Button>

        <Card className="border-white/40 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold font-inter text-gray-900">Create an account</CardTitle>
            <CardDescription className="font-inter text-gray-600">
              Enter your information to create your Gurukul Code account
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {isOffline && (
                <div className="bg-destructive/15 text-destructive p-3 rounded-xl text-sm mb-4 font-inter border border-destructive/20">
                  You appear to be offline. Please check your internet connection to create an account.
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="focus:outline-none focus:ring-0 focus:border-gray-300 focus-visible:ring-0 focus-visible:outline-none"
                style={{ boxShadow: "none" }}
              />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:outline-none focus:ring-0 focus:border-gray-300 focus-visible:ring-0 focus-visible:outline-none"
                style={{ boxShadow: "none" }}
              />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="focus:outline-none focus:ring-0 focus:border-gray-300 focus-visible:ring-0 focus-visible:outline-none"
                style={{ boxShadow: "none" }}
              />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#f37c20] to-[#ff8c42]"
                disabled={isLoading || isOffline}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className="font-medium text-[#017ea6] underline-offset-4 hover:underline cursor-pointer"
                >
                  Sign in
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
