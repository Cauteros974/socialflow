import { create } from 'zustand';
interface PostUiState {
  // e.g. filter: 'all' | 'following';
}
export const usePostStore = create<PostUiState>(() => ({}));
