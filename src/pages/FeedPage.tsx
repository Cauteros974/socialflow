import { usePosts } from '../hooks/usePosts';
import { useCreatePost } from '../hooks/useCreatePost';
import { useAuthStore } from '../store/useAuthStore';
import { storageService } from '../services/mockData';
import { useState } from 'react';

export const FeedPage = () => {
    const { data: posts, isLoading } = usePosts();
    const { mutateAsync: createPost } = useCreatePost;
    const { user } = useAuthStore();
    const [text, setText] = useState('');
    const [image, setImage] = useState<File | null>(null);
}