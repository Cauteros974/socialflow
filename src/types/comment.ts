import { type AppUser } from './user';

export interface Comment {
  id: string;
  text: string;
  author: AppUser;
  createdAt: number;
}
