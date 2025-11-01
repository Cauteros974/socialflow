import { type RegisterFormValues, type LoginFormValues } from '../types/schemas';
import { type AppUser } from '../types/user';

//Simulating network latency
const simulateDelay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

//"user database" in localStorage
const getUserFromStorage = (): AppUser[] => {
    const users = localStorage.getItem('user');
    return users ? JSON.parse(users): [];
};

/*Saving users to localStorage*/
const saveUsersToStorage = (users: AppUser[]) => {
    localStorage.setItem('user', JSON.stringify(users));
};

const setCurrentUserInStorage = (user: AppUser | null) => {
    if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else{
        localStorage.removeItem('currentUser');
    }
};

//Registration(Mock)

export const registerUser = async (
    data: RegisterFormValues
): Promise<AppUser> => {
    await simulateDelay(1000);
    const users = getUserFromStorage();

    if(users.find((u) => u.email === data.email)){
        throw new Error('User with this email already exists.')
    }

    const newUser: AppUser  = {
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

/* LogIn (Mock)*/

export const loginUser = async (data: LoginFormValues): Promise<AppUser> => {
    await simulateDelay(1000);
    const users = getUserFromStorage();

    const user = users.find((u) => u.email === data.email);

    if(!user) {
        throw new Error ('Wrong Email or Password');
    }

    setCurrentUserInStorage(user);
    return user;
};

/* LogOut (Mock)*/

export const logoutUser = async (): Promise<void> => {
    await simulateDelay(300);
    setCurrentUserInStorage(null);
};

/*Getting the current user from localStorage (Mock)*/

export const getAppUser = (): AppUser | null => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user): null;
};

/* Get user profile by ID (Mock) */
const getUserProfile = async (userId: string): Promise<AppUser> => {
    await simulateDelay(300);
    const users = getUserFromStorage();
    const user = users.find((u) => u.uid === userId);
    if (!user) throw new Error('User not found');
    return user;
}

/* Update profile (mock) */

const updateUserProfile = async (
    userId: string,
    data: Partial<AppUser>
): Promise<AppUser> => {
    await simulateDelay(500);
    const users = getUserFromStorage();
    const index = users.findIndex((u) => u.uid === userId);

    if (index === -1) throw new Error('User not found');
    
    const updatedUser = { ...users[index], ...data };
    users[index] = updatedUser;
    
    saveUsersToStorage(users);
    setCurrentUserInStorage(updatedUser);  
    
    return updatedUser;
};

const getAppUserFromStorage = (): AppUser | null => {
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) return null;
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
};

export const authService = {
    registerUser,
    loginUser,
    logoutUser,
    getAppUser,
    getUserProfile,
    updateUserProfile,
    getAppUserFromStorage,
};