import { create } from 'zustand';

type Theme = 'light' | 'dark';
interface ThemeState { theme: Theme; toggleTheme: () => void; }
const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('socialflow-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};
export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
}));