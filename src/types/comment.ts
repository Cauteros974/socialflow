import { AppUser } from "./user";

export type CommentAuthor = Pick<
  AppUser,
  'uid' | 'displayName' | 'photoURL'
>;