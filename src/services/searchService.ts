import { mockPosts } from "./mockData";
import { getUsersFromStorage } from "./authService";
import { simulateDelay } from "./mockData";

export const searchService = {
    searchUsers: async (query: string) => {
        await simulateDelay(200);

        const users = getUsersFromStorage();
        const q = query.toLowerCase();

        return users.filter(
            u => 
                u.displayName.toLowerCase().includes(q) ||
                u.email.toLowerCase().includes(q)
        )
    }
}