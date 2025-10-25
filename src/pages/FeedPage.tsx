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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!user) return;
        const imageUrl = image ? await storageService.uploadImage(image) : null;
        await createPost({ text, imageUrl, author: user });
        setText('');
        setImage(null);
    }
}