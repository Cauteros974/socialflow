import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../services/postService';
import { useAuthStore } from '../store/useAuthStore';
import { type CreatePostSchema } from '../types/schemas';
import { toast } from 'react-hot-toast';

export const useCreatePost = () => {
  const queryCliernt = useQueryClient();
  const user = useAuthStore((s) => s.user);

  return useMutation({
    mutationFn: async (data: CreatePostSchema) => {
      if (!user) throw new Error('You must be logged in to create a post.');

      //Pass the author inside
      return await postService.createPost({
        ...data,
        author: user,
        imageUrl: data.imageUrl ?? null,
      });
    },

    onSuccess: () => {
      toast.success('The post has been published');
      queryCliernt.invalidateQueries({queryKey: ['posts']}); //updating the list of posts
    },

    onError: (err) => {
      toast.error(err instanceof Error ? err.message: 'Failed to create post');
    },
  });
};