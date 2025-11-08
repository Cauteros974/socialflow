import React from "react";
import { type Post } from "../../types/post";
import { Link } from "react-router-dom";
import { FileText, MessageSquare, Heart } from 'lucide-react';

export const PostGrid: React.FC<{posts: Post[ ]}> = ({ posts }) => {
    if (!posts.length) return <p style={{ textAlign:'center', color:'var(--text-secondary)' }}>У пользователя еще нет постов.</p>;
    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:8}}>
            {posts.map(p => (
                <Link to={`/post/${p.id}`} key={p.id} style={{ position:'relative', paddingTop:'100%', borderRadius:8, overflow:'hidden', background:'#f3f3f3' }}>
                    {p.imageUrl ? <img src={p.imageUrl} alt={p.text.slice(0,20)} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} /> : <div style={{ position:'absolute', inset:0, display:'flex',alignItems:'center',justifyContent:'center' }}><FileText /></div>}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)'}}
                </Link>
            ))}
        </div>
    )
}