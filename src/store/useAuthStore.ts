import create from 'zustand';
import { type AppUser } from '../types/user';

interface AuthState {
    user: AppUser | null;
    isLoading: boolean;
    setUser: (user: AppUser | null) => void;
    setLoading: (isLoading: boolean) => void;
}
