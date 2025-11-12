import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserProfile } from '../hooks/useUserProfile';
import { useUserPosts } from '../hooks/useUserPosts';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { PostGrid } from '../components/profile/PostGrid';
import { Loader2 } from 'lucide-react';
import { type Post } from '../types/post';

export const ProfilePage = () => {
  const { uid } = useParams<{ uid: string }>();
  const { data: user, isLoading: userLoading } = useUserProfile(uid!);
  const { data: postsData, isLoading: postsLoading } = useUserPosts(uid!);

  // Converting data into an array of posts
  const posts: Post[] = Array.isArray(postsData) ? postsData : postsData ? [postsData] : [];

  if (userLoading || postsLoading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin" size={28} />
      </div>
    );
  }

  if (!user) {
    return <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>User not found</p>;
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
      <ProfileHeader profile={user} postCount={posts.length} />
      <PostGrid posts={posts} />
    </div>
  );
};