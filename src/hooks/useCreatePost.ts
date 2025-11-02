import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../services/postService';
import { type Post } from '../types/post';
export const useCreatePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: { text: string; imageUrl: string | null; author: any }) => postService.createPost(data),
    onSuccess: (newPost: Post) => qc.setQueryData(['posts'], (old: Post[]|undefined) => old ? [newPost, ...old] : [newPost]),
  });
};