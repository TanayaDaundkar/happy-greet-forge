
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/community";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card key={post.id}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>Posted by {post.authorName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Like ({post.likes})
        </Button>
        <Button variant="outline" size="sm">
          Comment ({post.comments})
        </Button>
      </CardFooter>
    </Card>
  );
}
