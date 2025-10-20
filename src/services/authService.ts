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

//