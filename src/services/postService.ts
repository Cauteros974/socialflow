import { type Post } from '../types/post';
import { type AppUser } from '../types/user';
import { type Comment } from '../types/comment';
import { mockPosts, simulateDelay } from './mockData';

export const fetchPosts = async (): Promise<Post[]> => {
  await simulateDelay(400);
  return [...mockPosts].sort((a,b) => b.createdAt - a.createdAt);
};

export const fetchPostById = async (id: string): Promise<Post | null> => {
  await simulateDelay(300);
  const p = mockPosts.find((x) => x.id === id);
  return p ? { ...p } : null;
};

export const fetchPostsByUserId = async (userId: string): Promise<Post[]> => {
  await simulateDelay(300);
  return mockPosts.filter((p) => p.author.uid === userId).sort((a,b) => b.createdAt - a.createdAt);
};

export const createPost = async (data: { text: string; imageUrl: string | null; author: AppUser }): Promise<Post> => {
  await simulateDelay(600);
  const newPost: Post = {
    id: `post_${Date.now()}`,
    text: data.text,
    imageUrl: data.imageUrl,
    author: data.author,
    createdAt: Date.now(),
    likes: [],
    comments: [],
  };
  mockPosts.unshift(newPost);
  return newPost;
};

export const toggleLikePost = async (postId: string, userId: string): Promise<Post> => {
  await simulateDelay(200);
  const post = mockPosts.find((p) => p.id === postId);
  if (!post) throw new Error('Post not found');
  const i = post.likes.indexOf(userId);
  if (i > -1) post.likes.splice(i, 1);
  else post.likes.push(userId);
  return { ...post };
};

export const addCommentToPost = async (postId: string, commentData: { text: string; author: AppUser }): Promise<Comment> => {
  await simulateDelay(300);
  const post = mockPosts.find((p) => p.id === postId);
  if (!post) throw new Error('Post not found');
  const newComment: Comment = { id: `comment_${Date.now()}`, text: commentData.text, author: commentData.author, createdAt: Date.now() };
  post.comments.push(newComment);
  return newComment;
};

export const postService = {
  fetchPosts,
  fetchPostById,
  fetchPostsByUserId,
  createPost,
  toggleLikePost,
  addCommentToPost,
};
