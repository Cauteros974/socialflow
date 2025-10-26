import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from '../services/postService';
import { useAuthStore } from '../store/useAuthStore';
import { type Post } from '../types/post';
import { toast } from 'react-hot-toast';

export const useToggleLike = (postId: string) => {
    const qc = useQueryClient();
    const user = useAuthStore.getState().user;
    const currentUser = user?.uid;

    
}