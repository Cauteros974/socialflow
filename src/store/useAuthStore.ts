import { create } from 'zustand';
import { type AppUser } from '../types/user';

interface AuthState {
    user: AppUser | null;
    isLoading: boolean;
    setUser: (user: AppUser | null) => void;
    setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) =>({
    user: null,

    isLoading: true,

    setUser: (user) => set({ user, isLoading: false }),
    setLoading: (isLoading) => set({ isLoading}),
}));