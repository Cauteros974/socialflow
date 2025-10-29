import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '../services/authService';
import { useAuthStore } from '../store/useAuthStore';
import { EditProfileSchema } from '../types/schemas';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '../utils/handleError';

export const useUpdateProfile = (userId: string) => {
  const qc = useQueryClient();
  const updateUserInStore = useAuthStore((s) => s.updateUser);
  return useMutation({
    mutationFn: (data: EditProfileSchema) => authService.updateUserProfile(userId, data),
    onSuccess: (updatedUser) => {
      updateUserInStore(updatedUser);
      qc.setQueryData(['userProfile', userId], updatedUser);
      qc.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Profile updated successfully!');
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });
};
