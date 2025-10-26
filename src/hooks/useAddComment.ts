import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../services/postService';
import { type Post } from '../types/post';
import { type AppUser } from '../types/user';

export const useAddComment = (postId: string) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: { text: string; author: AppUser }) => postService.addCommentToPost(postId, data),
    onSuccess: (newComment) => {
      const updateComments = (old?: Post) => old ? { ...old, comments: [...old.comments, newComment] } : old;
      qc.setQueryData(['post', postId], updateComments);
      qc.setQueryData(['posts'], (old: Post[]|undefined) => old?.map(p => p.id === postId ? updateComments(p) as Post : p));
    },
  });
};
