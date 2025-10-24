import { type AppUser } from '../types/user';
import { type Post } from '../types/post';

export const MOCK_USER_1: AppUser = {
  uid: 'mock_user_1',
  displayName: 'Alice',
  email: 'alice@example.com',
  photoURL: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Alice',
  bio: '',
  createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
};
export const MOCK_USER_2: AppUser = {
  uid: 'mock_user_2',
  displayName: 'Bob',
  email: 'bob@example.com',
  photoURL: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Bob',
  bio: '',
  createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
};

export let mockPosts: Post[] = [
  {
    id: 'post_1',
    text: 'Hi, this is my first post on SocialFlow! 🚀',
    imageUrl: 'https://picsum.photos/seed/react/600/400',
    author: { uid: MOCK_USER_1.uid, displayName: MOCK_USER_1.displayName, photoURL: MOCK_USER_1.photoURL },
    createdAt: Date.now() - 1000 * 60 * 5,
    likes: [MOCK_USER_2.uid],
    comments: [
      {
        id: 'comment_1',
        text: 'Cool, welcome!',
        author: { uid: MOCK_USER_2.uid, displayName: MOCK_USER_2.displayName, photoURL: MOCK_USER_2.photoURL },
        createdAt: Date.now() - 1000 * 60 * 3,
      },
    ],
  },
  {
    id: 'post_2',
    text: 'I develop with React and TypeScript. It`s powerful!',
    imageUrl: null,
    author: { uid: MOCK_USER_2.uid, displayName: MOCK_USER_2.displayName, photoURL: MOCK_USER_2.photoURL },
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
    likes: [],
    comments: [],
  },
];

export const initialUsers: AppUser[] = [MOCK_USER_1, MOCK_USER_2];

export const simulateDelay = (ms: number) => new Promise((res) => setTimeout(res, ms));