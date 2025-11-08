import { useQuery } from '@tanstack/react-query';
import { usePostStore } from '../store/usePostStore';

export const usePostById = (postId: string) => {
  const { posts } = usePostStore();

  return useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      // We simulate loading (in a real API it would be fetch)
      await new Promise((resolve) => setTimeout(resolve, 300));
      const post = posts.find((p) => p.id === postId);
      if (!post) throw new Error('Post not found');
      return post;
    },
    enabled: !!postId, // Run only if there is an id
  });
};
