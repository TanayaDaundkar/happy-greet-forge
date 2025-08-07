
import { Post } from "@/types/community";
import { PostCard } from "./PostCard";
import { Card, CardContent } from "@/components/ui/card";

interface PostListProps {
  posts: Post[];
  type: string;
  emptyMessage: string;
}

export function PostList({ posts, type, emptyMessage }: PostListProps) {
  const filteredPosts = posts.filter(post => post.type === type);
  
  if (filteredPosts.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">{emptyMessage}</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
