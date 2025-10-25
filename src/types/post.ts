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
  author: PostAuthor;
  likes: string[];
  comments: Comment[];
  createdAt: number;
}