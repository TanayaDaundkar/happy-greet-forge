
import { Post } from "@/types/community";
import { PostList } from "./PostList";

interface CommunityTabContentProps {
  title: string;
  description: string;
  posts: Post[];
  type: string;
  emptyMessage: string;
}

export function CommunityTabContent({ 
  title, 
  description, 
  posts, 
  type, 
  emptyMessage 
}: CommunityTabContentProps) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      <PostList 
        posts={posts} 
        type={type} 
        emptyMessage={emptyMessage} 
      />
    </>
  );
}
