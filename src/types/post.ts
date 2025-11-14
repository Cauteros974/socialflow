import { type AppUser} from './user';
import { type Comment } from './comment';


export type PostAuthor = Pick<AppUser, 'uid' | 'displayName' | 'photoUrl'>;

/**
* Post structure.
* In mock mode, we store comments directly in the post.
*/
export interface Post {
  id: string;
  text: string;
  imageUrl: string | null;
  author: {
    uid: string;
    displayName: string;
    photoUrl?: string;
  };
  createdAt: number;

  comments: Comment[];
}

export interface Post {
  id: string;
  text: string;
  imageUrl: string | null;
  likes: string[];
  comments: Comment[];
  createdAt: number;
  timeAgo?: string;
}

export interface Post {
  id: string;
  text: string;
  imageUrl: string | null;
  author: {
    uid: string;
    displayName: string;
    photoUrl?: string;
  };
  createdAt: number;

  comments: Comment[];
}