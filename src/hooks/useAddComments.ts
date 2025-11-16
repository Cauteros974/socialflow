import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from "../services/postService";

export const useAddComment = (postId: string) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => postService.addComment(postId, text),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["comments", postId] });
    }
  });
};