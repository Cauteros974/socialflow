import { type Post } from "../types/post";
import { type AppUser } from "../types/user";
import { simulateDelay } from "./mockData";

const POSTS_STORAGE_KEY = 'socialflow-posts';

const getPostsFromStorage = (): Post[] => {
  const posts = localStorage.getItem(POSTS_STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
}