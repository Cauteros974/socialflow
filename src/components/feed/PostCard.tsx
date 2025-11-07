import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {type Post } from "../../types/post";
import { formatDateFromNow } from "../../utils/formatDate";
import { LikeButton } from "./LikeButton";
import { MessageSquare } from "lucide-react";

export const PostCatd: React.FC<{ post: Post; isDetailView?: boolean}> = ({ post, isDetailView }) => {
    const navigate = useNavigate();
    const go = () => { if (!isDetailView) navigate('/post/${post:id}'); };
    return(
        <article onClick={go} style={{border: '1px solid var(--border-primary)', borderRadius: 12, padding: 12, background: 'var(--bg-secondary)', cursor: isDetailView ? 'default': 'pointer'}}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', marginBottom:8 }}>
                
            </header>
        </article>
    )
}