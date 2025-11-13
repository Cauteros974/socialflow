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
            savedPosts: [],
            toggleSave: (post) => {
                const { savedPosts } = get();
                const exists = savedPosts.find((p) => p.id === post.id);

                if (exists) {
                    set({ savedPosts: savedPosts.filter((p) => p.id !== post.id )});
                } else{
                    set({ savedPosts: [...savedPosts, post] });
                }
            },
            isSaved: (id) => !!get().savedPosts.find((p) => p.id === id),
        }),
        {name: 'socila-saved-post'}
    )
)