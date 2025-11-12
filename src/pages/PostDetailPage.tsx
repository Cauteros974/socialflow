import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostById } from '../hooks/usePostById';
import { PostCard } from '../components/feed/PostCard';
import { CommentList } from '../components/feed/CommentList';
import { AddCommentForm } from '../components/feed/AddCommentForm';
import { Loader2 } from 'lucide-react';

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, error } = usePostById(id!);

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin" size={28} />
      </div>
    );
  }

  if (error) {
    return <p style={{ color: 'var(--accent-danger)', textAlign: 'center' }}>Error loading post</p>;
  }

  if (!post) {
    return <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Post not found</p>;
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '1rem 0' }}>
      <PostCard post={post} isDetailView />
      <AddCommentForm postId={post.id} />
      <CommentList comments={post.comments} />
    </div>
  );
};