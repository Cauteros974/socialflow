import React from "react";
import { Heart } from 'lucide-react';
import { useToggleLike } from "../../hooks/useToggleLike";
import { useAuthStore } from "../../store/useAuthStore";

export const LikeButton: React.FC<{ postId: string; likes: string[]; }> = ({ postId, likes }) => {
    const user = useAuthStore((s) => s.user);
    const toggle = useToggleLike(postId);
    const currentUserId = user?.uid;
    const hasLiked = currentUserId ? likes.includes(currentUserId) : false;

    return(
        <button onClick={(e) => {e.stopPropagation(); e.preventDefault(); toggle.mutate(); }}
    )
};