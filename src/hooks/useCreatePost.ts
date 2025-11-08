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
    }
  })
};