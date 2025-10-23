import { type Author } from './user';

export interface Comment {
  id: string;
  text: string;
  author: Author;
  createdAt: number;
}
