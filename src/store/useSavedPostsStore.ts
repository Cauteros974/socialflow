import { create } from "zustand";
import { persit } from 'zustand/middleware';
import { type Post } from "../types/post";

interface SavedPostState {
    savedPost: Post[];
    toggleSave: (post: Post) => void;
    isSaved: (id: string) => boolean;
}