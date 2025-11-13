import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {type Post } from "../../types/post";
import { formatDateFromNow } from "../../utils/formatDate";
import { LikeButton } from "./LikeButton";
import { MessageSquare } from "lucide-react";
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useSavedPostsStore } from '../../store/useSavedPostsStore';

export const PostCard: React.FC<{ post: Post; isDetailView?: boolean}> = ({ post, isDetailView }) => {
    const navigate = useNavigate();
    const [loaded, setLoaded ] = useState(false);
    const go = () => { if (!isDetailView) navigate('/post/${post:id}'); };
    const { toggleSave, isSaved } = useSavedPostsStore();
    const saved = isSaved(post.id);
    return(
        <article onClick={go} style={{border: '1px solid var(--border-primary)', borderRadius: 12, padding: 12, background: 'var(--bg-secondary)', cursor: isDetailView ? 'default': 'pointer'}}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', marginBottom:8 }}>
            <Link to={`/profile/${post.author.uid}`} onClick={(e)=>e.stopPropagation()} style={{ display:'flex', gap:8, alignItems:'center' }}>
                <img src={post.author.photoUrl} alt={post.author.displayName} style={{ width:40, height:40, borderRadius:20 }} />
                <div>
                    <div style={{ fontWeight:600 }}>{post.author.displayName}</div>
                    <div style={{ fontSize:12, color:'var(--text-secondary)' }}>{formatDateFromNow(post.createdAt)}</div>
                </div>
            </Link>
            </header>

            <div style={{ marginBottom: 8}}>{post.text}</div>
            {post.imageUrl && <img src={post.imageUrl} alt="" style={{ width:'100%', borderRadius:8, marginBottom:8 }} />}

            <footer style={{ display:'flex', gap:16, alignItems:'center' }}>
                <LikeButton postId={post.id} likes={post.likes} />
                <Link to={`/post/${post.id}`} onClick={(e)=>{ e.stopPropagation(); }} style={{ display:'flex', gap:6, alignItems:'center' }}><MessageSquare />{post.comments.length}</Link>
                <div className="post-card">
                    <div className="post-actions">
                    <button
                    onClick={() => toggleSave(post)}
                    className={`save-btn ${saved ? 'saved' : ''}`}
                    >
                        
                    </button>
                    
                    </div>
                </div>
            </footer>
        </article>
    );
};