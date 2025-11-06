import { type PostAuthor } from './post';

export interface Comment {
  id: string;
  text: string;
  author: PostAuthor;
  createdAt: number;
}

