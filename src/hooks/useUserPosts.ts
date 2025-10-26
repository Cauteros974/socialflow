import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

export const usePost = (userId: string) =>
  useQuery({
    queryKey: ['user', userId],
    queryFn: () => postService.fetchPostById(userId),
    enabled: !!userId,
});