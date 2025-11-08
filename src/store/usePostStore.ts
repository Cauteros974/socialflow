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

