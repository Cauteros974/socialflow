import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { PostCard } from '../components/feed/PostCard';
import { Loader2 } from 'lucide-react';
import { PostSkeleton } from '../components/ui/Skeleton';
import { motion } from 'framer-motion';

export const Home = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (error) return <p style={{ color: 'red' }}>Error loading posts</p>;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 flex flex-col gap-6">
      {isLoading ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : (
        posts?.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
          >
            <PostCard post={p} />
          </motion.div>
        ))
      )}
    </div>
  );
};
