import React from "react";
import { useParams } from "react-router-dom";
import { useUserProfile } from '../hooks/useUserProfile';
import { useUserPosts } from '../hooks/useUserPosts';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { PostGrid } from '../components/profile/PostGrid';
import { Loader2 } from 'lucide-react';
import { string } from "zod";

export const ProfilePage = () => {
    const { uid } = useParams <{ uid: string}>();
    const { data: user, isLoading: userLoading } = useUserPosts(uid!);
    const { data: posts, isLoading: postsLoading } = useUserPosts(uid!);
}