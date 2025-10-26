import { useQuery } from "@tanstack/react-query";
import { postService } from "../services/postService";

export const usePosts = (postId: string) => useQuery({ queryKey: ['post', postId], queryFn: () => postService.fetchPosts})