export interface Comment {
  id: string;
  text: string;
  author: {
    uid: string;
    displayName: string;
    photoUrl?: string;
  };
  createdAt: number;
}