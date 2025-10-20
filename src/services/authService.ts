import { email } from "zod";
import { RegisterFormValues, LoginFormValues } from "../types/authSchemas";
import { AppUser } from "../types/user";

//Simulating network latency
const simulateDelay = (ms: number) => 
    new Promise((resolve) => setTimeout(resolve, ms));

//"user database" in localStorage
const getUserFromStorage = (): AppUser[] => {
    const users = localStorage.getItem('user');
    return users ? JSON.parse(users): [];
};

const setCurrentUserInStorage = (user: AppUser | null) => {
    if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else{
        localStorage.removeItem('currentUser');
    }
};

//Registration(Mock)

export const registerUser = async(
    data: RegisterFormValues
): Promise<AppUser> => {
    await simulateDelay(1000);
    const users = getUserFromStorage();

    if(users.find((u) => u.email === data.email)){
        throw new Error('User with this email already exists.')
    }

    const newUser: AppUser {
        uid: `mock_${Data.now()}`,
        email: data.email,
        displayName: data.displayName,
        photoURL: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${data.displayName}`,
        bio: '',
    };
}