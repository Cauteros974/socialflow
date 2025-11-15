import { useQuery } from "@tanstack/react-query";
import { searchService } from "../services/searchService";

export const useSearch = (query: string) => {
    return useQuery({
        queryKey:["search", query],
        queryFn: async () => {
            if (!query.trim()) return {users: [], posts: []};

            const [users, posts] = await Promise.all([
                searchService.searchPosts(query),
                searchService.searchUsers(query)
            ]);
        }
    })
}