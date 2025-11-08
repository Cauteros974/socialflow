import { z } from 'zod';
import { type AppUser } from '../types/user';
import { RegisterSchema, LoginSchema, editProfileSchema, type EditProfileSchema } from '../types/schemas';
import { initialUsers, simulateDelay, mockPosts } from './mockData';

const USERS_STORAGE_KEY = 'socialflow-users';
const CURRENT_USER_STORAGE_KEY = 'socialflow-currentUser';

// Inferring types from Zod schemas
type RegisterFormData = z.infer<typeof RegisterSchema>;
type LoginFormData = z.infer<typeof LoginSchema>;
type EditProfileFormData = EditProfileSchema;

const getUsersFromStorage = (): AppUser[] => {
  const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
  if (usersJson) return JSON.parse(usersJson);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
  return initialUsers;
};

const saveUsersToStorage = (users: AppUser[]) =>
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

export const getAppUserFromStorage = (): AppUser | null => {
  const userJson = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

const setCurrentUserInStorage = (user: AppUser | null) => {
  if (user) localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
  else localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
};

// Register
export const registerUser = async (data: RegisterFormData): Promise<AppUser> => {
  await simulateDelay(800);
  const users = getUsersFromStorage();

  if (users.find((u) => u.email === data.email))
    throw new Error('Пользователь с таким email уже существует');

  const newUser: AppUser = {
    uid: `mock_${Date.now()}`,
    email: data.email,
    displayName: data.displayName,
    photoUrl: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${data.displayName}`,
    bio: '',
    createdAt: Date.now(),
  };

  users.push(newUser);
  saveUsersToStorage(users);
  setCurrentUserInStorage(newUser);
  return newUser;
};

// Login
export const loginUser = async (data: LoginFormData): Promise<AppUser> => {
  await simulateDelay(600);
  const users = getUsersFromStorage();
  const user = users.find((u) => u.email === data.email);
  if (!user) throw new Error('Incorrect email or password');
  setCurrentUserInStorage(user);
  return user;
};

// Logout
export const logoutUser = async (): Promise<void> => {
  await simulateDelay(300);
  setCurrentUserInStorage(null);
};

// Get user profile
export const getUserProfile = async (userId: string): Promise<AppUser | null> => {
  await simulateDelay(300);
  const users = getUsersFromStorage();
  return users.find((u) => u.uid === userId) || null;
};

// Update profile
export const updateUserProfile = async (
  userId: string,
  data: EditProfileFormData
): Promise<AppUser> => {
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

  //Updating the author of posts and comments
  mockPosts.forEach((p) => {
    if (p.author.uid === userId) p.author.displayName = updatedUser!.displayName;
    p.comments.forEach((c) => {
      if (c.author.uid === userId) c.author.displayName = updatedUser!.displayName;
    });
  });

  return updatedUser;
};

//Export service
export const authService = {
  registerUser,
  loginUser,
  logoutUser,
  getAppUserFromStorage,
  getUserProfile,
  updateUserProfile,
};