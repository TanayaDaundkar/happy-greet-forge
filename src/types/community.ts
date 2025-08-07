
import { Timestamp } from "firebase/firestore";

export interface Post {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorId: string;
  createdAt: Timestamp;
  likes: number;
  comments: number;
  type: string;
}
