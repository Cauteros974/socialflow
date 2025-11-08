import { type Post } from "../types/post";
import { type AppUser } from "../types/user";
import { simulateDelay } from "./mockData";
import { createPost } from "./postService";

const POSTS_STORAGE_KEY = 'socialflow-posts';

const getPostsFromStorage = (): Post[] => {
  const posts = localStorage.getItem(POSTS_STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
};

const savePostsToStorage = (posts: Post[]) => {
  localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));
};

export const postService = {
  async createPost(data: {
    text: string;
    imageUrl: string | null;
    author: AppUser;
  }): Promise<Post>{
    await simulateDelay(500);
    const posts = getPostsFromStorage();
  }
}