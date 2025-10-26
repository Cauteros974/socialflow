import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useUserProfile = (userId: string) =>
  useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => authService.getUserProfile(userId),
    enabled: !!userId
});