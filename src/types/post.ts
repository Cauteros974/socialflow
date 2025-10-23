import { type Author} from './user';
import { type Comment } from './comment';

/**
* Post structure.
* In mock mode, we store comments directly in the post.
*/
export interface Post {
    id: string;
    text: string;
    imageUrl: string | null;
    author: Author;
    likes: string[];
    comments: Comment[];
    createdAt: number;
}