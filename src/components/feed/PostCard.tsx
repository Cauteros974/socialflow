import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { type Post } from "../../types/post";
import { formatDateFromNow } from "../../utils/formatDate";
import { LikeButton } from "./LikeButton";
import { MessageSquare, Bookmark, BookmarkCheck } from 'lucide-react';
import { useSavedPostsStore } from '../../store/useSavedPostsStore';
import { PostModal } from "./PostModal";

interface PostCardProps {
  post: Post;
  isDetailView?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, isDetailView }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleSave, isSaved } = useSavedPostsStore();
  const saved = isSaved(post.id);

  const handleCardClick = () => {
    if (!isDetailView) {
      setModalOpen(true);
    }
  };

  const handleNavigateToPost = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <>
      <article 
        onClick={handleCardClick} 
        style={{
          border: '1px solid var(--border-primary)', 
          borderRadius: 12, 
          padding: 12, 
          background: 'var(--bg-secondary)', 
          cursor: isDetailView ? 'default' : 'pointer'
        }}
      >
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: 8 
        }}>
          <Link 
            to={`/profile/${post.author.uid}`} 
            onClick={(e) => e.stopPropagation()} 
            style={{ display: 'flex', gap: 8, alignItems: 'center' }}
          >
            <img 
              src={post.author.photoUrl} 
              alt={post.author.displayName} 
              style={{ width: 40, height: 40, borderRadius: 20 }} 
            />
            <div>
              <div style={{ fontWeight: 600 }}>{post.author.displayName}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                {formatDateFromNow(post.createdAt)}
              </div>
            </div>
          </Link>
        </header>

        <div style={{ marginBottom: 8 }}>{post.text}</div>
        
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt="" 
            style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} 
            onLoad={() => setLoaded(true)}
          />
        )}

        <footer style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <LikeButton postId={post.id} likes={post.likes} />
          
          <Link 
            to={`/post/${post.id}`} 
            onClick={(e) => e.stopPropagation()} 
            style={{ display: 'flex', gap: 6, alignItems: 'center' }}
          >
            <MessageSquare size={20} />
            {post.comments.length}
          </Link>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleSave(post);
            }}
            className={`save-btn ${saved ? 'saved' : ''}`}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}
          >
            {saved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          </button>
        </footer>
      </article>

      {modalOpen && !isDetailView && (
        <PostModal post={post} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};