import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

export const usePost = (postId: string) =>
  useQuery({
    queryKey: ['post', postId],
    queryFn: () => postService.fetchPostById(postId),
    enabled: !!postId,
});