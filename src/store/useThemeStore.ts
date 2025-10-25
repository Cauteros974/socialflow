import { create } from "zustand";

interface ThemeState {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}