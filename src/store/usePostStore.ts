import { create } from 'zustand';
import { type Post } from '../types/post';
import { type Author } from '../types/user';

interface PostUiState {
  posts: Post[];
  addPost: (post: Post) => void;
  setPosts: (posts: Post[]) => void;
  toggleLike: (postId: string, userId: string) => void;
  addComment: (postId: string, text: string, author: Author) => void;
}

export const usePostStore = create<PostUiState>((set) => ({
  posts: [],

  setPosts: (posts) => set({ posts }),

  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  toggleLike: (postId, userId) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        const hasLiked = post.likes.includes(userId);
        const updatedLikes = hasLiked
          ? post.likes.filter((id) => id !== userId)
          : [...post.likes, userId];
        return { ...post, likes: updatedLikes };
      }),
    })),

  addComment: (postId, text, author) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: `c_${Date.now()}`,
                  text,
                  author,
                  createdAt: Date.now(),
                },
              ],
            }
          : post
      ),
    })),
}));