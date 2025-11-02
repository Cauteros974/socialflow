import React from 'react';
import { Link } from 'react-router-dom';
import { type Comment } from '../../types/comment';
import { formatDateFromNow } from '../../utils/formatDate';
import { MessageSquare } from 'lucide-react';

export const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  if (comments.length === 0) return <div style={{ textAlign:'center', padding:20 }}><MessageSquare size={28} /><p>There are no comments yet.</p></div>;
  const sorted = [...comments].sort((a,b)=>a.createdAt - b.createdAt);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
      {sorted.map(c => (
        <div key={c.id} style={{ display:'flex', gap:10 }}>
          <Link to={`/profile/${c.author.uid}`}><img src={c.author.photoUrl} alt={c.author.displayName} style={{ width:36, height:36, borderRadius:18 }} /></Link>
          <div>
            <div><Link to={`/profile/${c.author.uid}`} style={{ fontWeight:600 }}>{c.author.displayName}</Link> <span>{c.text}</span></div>
            <div style={{ fontSize:12, color:'var(--text-secondary)' }}>{formatDateFromNow(c.createdAt)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};