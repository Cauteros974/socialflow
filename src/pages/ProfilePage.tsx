import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUserProfile } from '../hooks/useUserProfile';
import { useUserPosts } from '../hooks/useUserPosts';
import { useSavedPostsStore } from '../store/useSavedPostsStore';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { PostGrid } from '../components/profile/PostGrid';
import { Loader2 } from 'lucide-react';
import { type Post } from '../types/post';
import '../ProfilePage.css';

export const ProfilePage = () => {
  const { uid } = useParams<{ uid: string }>();
  const { data: user, isLoading: userLoading } = useUserProfile(uid!);
  const { data: postsData, isLoading: postsLoading } = useUserPosts(uid!);
  const { savedPosts } = useSavedPostsStore();
  const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');

  // Convert the data into an array of posts
  const posts: Post[] = Array.isArray(postsData) ? postsData : postsData ? [postsData] : [];

  if (userLoading || postsLoading) {
    return (
      <div className="loader-center">
        <Loader2 className="spin" size={28} />
      </div>
    );
  }

  if (!user) {
    return <p className="text-center muted">☹️ User not found</p>;
  }

  return (
    <div className="profile-page">
      <ProfileHeader profile={user} postCount={posts.length} />

      <div className="profile-tabs">
        <button
          className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          📸 Posts
        </button>
        <button
          className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          💾 Saved
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'posts' ? (
          posts.length > 0 ? (
            <PostGrid posts={posts} />
          ) : (
            <p className="empty">No posts yet</p>
          )
        ) : savedPosts.length > 0 ? (
          <PostGrid posts={savedPosts} />
        ) : (
          <p className="empty">No saved posts yet</p>
        )}
      </div>
    </div>
  );
};