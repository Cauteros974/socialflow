import { AppUser } from '../types/user';
import { RegisterSchema, LoginSchema, EditProfileSchema } from '../types/schemas';
import { initialUsers, simulateDelay, mockPosts } from './mockData';

const USERS_STORAGE_KEY = 'socialflow-users';
const CURRENT_USER_STORAGE_KEY = 'socialflow-currentUser';

const getUsersFromStorage = (): AppUser[] => {
  const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
  if (usersJson) return JSON.parse(usersJson);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
  return initialUsers;
};
const saveUsersToStorage = (users: AppUser[]) => localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
export const getAppUserFromStorage = (): AppUser | null => {
  const userJson = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
  return userJson ? JSON.parse(userJson) : null;
};
const setCurrentUserInStorage = (user: AppUser | null) => {
  if (user) localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
  else localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
};

export const registerUser = async (data: RegisterSchema): Promise<AppUser> => {
  await simulateDelay(800);
  const users = getUsersFromStorage();
  if (users.find((u) => u.email === data.email)) throw new Error('User with this email already exists.');
  const newUser: AppUser = {
    uid: `mock_${Date.now()}`,
    email: data.email,
    displayName: data.displayName,
    photoURL: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${data.displayName}`,
    bio: '',
    createdAt: Date.now(),
  };
  users.push(newUser);
  saveUsersToStorage(users);
  setCurrentUserInStorage(newUser);
  return newUser;
};

export const loginUser = async (data: LoginSchema): Promise<AppUser> => {
  await simulateDelay(600);
  const users = getUsersFromStorage();
  const user = users.find((u) => u.email === data.email);
  if (!user) throw new Error('Incorrect email or password');
  setCurrentUserInStorage(user);
  return user;
};

export const logoutUser = async (): Promise<void> => {
  await simulateDelay(300);
  setCurrentUserInStorage(null);
};

export const getUserProfile = async (userId: string): Promise<AppUser | null> => {
  await simulateDelay(300);
  const users = getUsersFromStorage();
  return users.find((u) => u.uid === userId) || null;
};

export const updateUserProfile = async (userId: string, data: EditProfileSchema): Promise<AppUser> => {
  await simulateDelay(700);
  const users = getUsersFromStorage();
  let updatedUser: AppUser | null = null;
  const newUsers = users.map((u) => {
    if (u.uid === userId) {
      updatedUser = { ...u, displayName: data.displayName, bio: data.bio || '' };
      return updatedUser;
    }
    return u;
  });
  if (!updatedUser) throw new Error('User not found');
  saveUsersToStorage(newUsers);
  if (getAppUserFromStorage()?.uid === userId) setCurrentUserInStorage(updatedUser);
  // Update the author's mockPosts (mock-mode)
  mockPosts.forEach((p) => {
    if (p.author.uid === userId) p.author.displayName = updatedUser!.displayName;
    p.comments.forEach((c) => { if (c.author.uid === userId) c.author.displayName = updatedUser!.displayName; });
  });
  return updatedUser;
};

export const authService = {
  registerUser,
  loginUser,
  logoutUser,
  getAppUserFromStorage,
  getUserProfile,
  updateUserProfile,
};
