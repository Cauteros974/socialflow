import { type Post, type PostAuthor } from '../types/post';
import { mockPosts } from './mockData';

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const fetchPosts = async (): Promise<Post[]> => {
  await simulateDelay(800);
  const sortedPosts = [...mockPosts].sort((a, b) => b.createdAt - a.createdAt);
  return sortedPosts;
};

interface CreatePostData {
  text: string;
  imageUrl: string | null;
  author: PostAuthor;
}

const createPost = async (data: CreatePostData): Promise<Post> => {
  await simulateDelay(1000);

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

const toggleLikePost = async (postId: string, userId: string): Promise<Post> => {
  await simulateDelay(300);
  const post = mockPosts.find((p) => p.id === postId);
  if (!post) throw new Error('Post not found');

  const likeIndex = post.likes.indexOf(userId);
  if (likeIndex > -1) post.likes.splice(likeIndex, 1);
  else post.likes.push(userId);

  return post;
};

// New method to get one post
const fetchPostById = async (postId: string): Promise<Post> => {
  await simulateDelay(400);
  const post = mockPosts.find((p) => p.id === postId);
  if (!post) throw new Error('Post not found');
  return post;
};

// Combine them into a single service
export const postService = {
  fetchPosts,
  fetchPostById,
  createPost,
  toggleLikePost,
};