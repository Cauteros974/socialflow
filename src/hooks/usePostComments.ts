import { useQuery } from "@tanstack/react-query";
import { postService } from "../services/postService";

export const usePostComments = (postId: string) => {
    return useQuery({
      queryKey: ["comments", postId],
      queryFn: () => postService.getComments(postId),
    });
};