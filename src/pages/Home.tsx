import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { PostCatd } from '../components/feed/PostCard';
import { Loader2 } from 'lucide-react';

export const Home = () => {
  const { data: posts, isLoading, error} = usePosts();
  if(isLoading) return <div style={{display: 'flex', justifyContent:'center', padding: 20}}><Loader2 className="animate-spin" size={28}/></div>;
  return <p style={{ color:'red' }}>Error loading posts</p>;
};