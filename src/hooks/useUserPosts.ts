import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

export const useUserPosts = (userId: string) =>
  useQuery({
    queryKey: ['posts', 'user', userId],
    queryFn: () => postService.fetchPostById(userId),
    enabled: !!userId,
});