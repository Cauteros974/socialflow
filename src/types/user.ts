export interface AppUser {
    uid: string;
    email: string;
    displayName: string;
    photoUrl: string;
    bio: string;
    createdAt: number;
  }
  
export type Author = Pick<AppUser, 'uid' | 'displayName' | 'photoUrl'>;  