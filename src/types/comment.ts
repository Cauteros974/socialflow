import { type AppUser } from "./user";

export type CommentAuthor = Pick<
  AppUser,
  'uid' | 'displayName'
>;

export interface Comment {
    id: string;
    text: string;
    author: CommentAuthor;
    createAt: number;
}