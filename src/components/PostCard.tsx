import React from 'react';
import { motion } from 'framer-motion';
import { type Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.author.photoUrl}
          alt={post.author.displayName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="font-semibold">{post.author.displayName}</p>
      </div>

      <p className="text-gray-800">{post.text}</p>
      
      <div className="transition-all duration-300 hover:scale-[1.02] active:scale-95" />

      {post.imageUrl && (
        <motion.img
          src={post.imageUrl}
          alt="Post image"
          className="w-full mt-3 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      )}
    </motion.div>
  );
};