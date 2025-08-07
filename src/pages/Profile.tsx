import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

export default function Profile() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!session && !isLoading) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      if (session?.user?.id) {
        try {
          const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", session.user.id)
            .single();

          if (error) throw error;
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast({
            title: "Error",
            description: "Failed to load user data",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [session, navigate, isLoading, supabase, toast]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Could not log out. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      navigate("/");
    }
  };

  if (!session) return null;

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-[calc(100vh-12rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button variant="ghost" className="mb-6" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Button>

        <Card className="border-border/40 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {userData?.name?.charAt(0) || session?.user?.email?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
            <CardDescription>Manage your account information</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {isLoading ? (
              <p className="text-center">Loading profile information...</p>
            ) : (
              <>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Name</p>
                  <p className="font-medium">{userData?.name || "Not set"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="font-medium">{session?.user?.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Account Created</p>
                  <p className="font-medium">
                    {userData?.created_at
                      ? new Date(userData.created_at).toLocaleDateString()
                      : new Date().toLocaleDateString()}
                  </p>
                </div>
              </>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button variant="outline" className="w-full" onClick={handleLogout}>
              Sign Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
