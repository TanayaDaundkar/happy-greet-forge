import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
 // Make sure this is correctly configured
import { Session } from "@supabase/supabase-js";

interface CreatePostFormProps {
  session: Session | null;
  activeTab: string;
  onPostCreated: () => void;
}

export function CreatePostForm({
  session,
  activeTab,
  onPostCreated,
}: CreatePostFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please log in to post in the community",
        variant: "destructive",
      });
      return;
    }

    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please provide both title and content for your post",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const { user } = session;

    try {
      const { error } = await supabase.from("posts").insert([
        {
          title,
          content,
          author_name: user.user_metadata.full_name || "Anonymous",
          author_id: user.id,
          created_at: new Date().toISOString(),
          likes: 0,
          comments: 0,
          type: activeTab,
        },
      ]);

      if (error) throw error;

      setTitle("");
      setContent("");

      toast({
        title: "Success",
        description: "Your post has been published!",
      });

      onPostCreated();
    } catch (error) {
      console.error("Error creating post:", error);
      toast({
        title: "Error",
        description: "Failed to create your post",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitPost} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a descriptive title"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, questions, or resources..."
          className="min-h-[150px]"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading || !session}>
        {isLoading ? "Posting..." : "Post to Community"}
      </Button>
      {!session && (
        <p className="text-sm text-muted-foreground text-center mt-2">
          Please log in to post in the community
        </p>
      )}
    </form>
  );
}
