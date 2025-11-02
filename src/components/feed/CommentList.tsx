import React from "react";
import { Link } from "react-router-dom";
import { Comment } from "../../types/comment";
import { formatDateFromNow } from "../../utils/formatDate";
import { MessageSquare } from "lucide-react";

export const CommentList: React.FC<{ comments: Comment[]}> = ({ comments }) => {
    if(comments.length === 0) return <div style={{ textAlign: 'center', padding: 20}}><MessageSquare size={28} /><p>There are no comments yet.</p></div>
    const sorted = [...comments].sort((a,b) => a.createdAt - b.createdAt);
    return(
        <div style={{ display: 'play', flexDirection: 'column', gap: '12'}}
    )
}