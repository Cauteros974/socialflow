import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { type Post } from "../types/post";

interface SavedPostState {
    savedPosts: Post[];
    toggleSave: (post: Post) => void;
    isSaved: (id: string) => boolean;
}

export const useSavedPostsStore = create <SavedPostState>()(
    persist(
        (set, get) => ({
            savedPost: [],
            toggleSave: (post) => {
                const { savedPosts } = get();
                const exists = savedPosts.find((p) => p.id === post.id);
            }
        })
    )
)