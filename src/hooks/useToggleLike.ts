import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from '../services/postService';
import { useAuthStore } from '../store/useAuthStore';
import { type Post } from '../types/post';
import { toast } from 'react-hot-toast';

export const useToggleLike = (postId: string) => {
    const qc = useQueryClient();
    const user = useAuthStore.getState().user;
    const currentUserId = user?.uid;

    return useMutation ({
        mutationFn: () => {
            if (!currentUserId) { toast.error('You need to log in to like'); throw new Error('Not auth'); }
            return postService.toggleLikePost(postId, currentUserId);
        },

        
    })
}