import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';
export const usePosts = () => useQuery({ queryKey: ['posts'], queryFn: postService.fetchPosts });