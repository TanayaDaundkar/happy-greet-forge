import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth"; // 🆕 Supabase Auth Hook
import { supabase } from "@/lib/supabase"; // 🆕 Supabase client
import { MessageSquare, Users, BookOpen } from "lucide-react";
import { Post } from "@/types/community";
import { CommunityTabContent } from "@/components/community/CommunityTabContent";
import { CreatePostForm } from "@/components/community/CreatePostForm";

export default function Community() {
  const [activeTab, setActiveTab] = useState("questions");
  const [posts, setPosts] = useState<Post[]>([]);
  const { toast } = useToast();
  const { user } = useSupabaseAuth(); // 🆕 Replaces Firebase useAuth

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
      toast({
        title: "Error",
        description: "Failed to load community posts",
        variant: "destructive",
      });
    } else {
      setPosts(data as Post[]);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen container py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Community</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Connect with fellow learners, ask questions, and share resources.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="questions" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="questions">
                <MessageSquare className="mr-2 h-4 w-4" />
                Q&A
              </TabsTrigger>
              <TabsTrigger value="discussions">
                <Users className="mr-2 h-4 w-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="resources">
                <BookOpen className="mr-2 h-4 w-4" />
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="mt-6">
              <CommunityTabContent
                title="Questions & Answers"
                description="Ask coding questions and get answers from the community."
                posts={posts}
                type="questions"
                emptyMessage="No questions yet. Be the first to ask!"
              />
            </TabsContent>

            <TabsContent value="discussions" className="mt-6">
              <CommunityTabContent
                title="Discussion Forum"
                description="Engage in discussions about programming, career paths, and more."
                posts={posts}
                type="discussions"
                emptyMessage="No discussions yet. Start the conversation!"
              />
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <CommunityTabContent
                title="Shared Resources"
                description="Share helpful resources, tutorials, and learning materials."
                posts={posts}
                type="resources"
                emptyMessage="No resources shared yet. Share something useful!"
              />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Create a Post</CardTitle>
              <CardDescription>
                Share your thoughts, questions, or resources with the community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CreatePostForm
                user={user}
                activeTab={activeTab}
                onPostCreated={fetchPosts}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
