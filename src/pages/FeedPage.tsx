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
    };
    
    if (isLoading) return <p className="text-center">Loading Posts...</p>

    return (
        <div className="max-w-md mx-auto mt-6 space-y-4">
            <form onSubmit={handleSubmit} className="border rounded p-4">
                <textarea 
                    className="w-full border p-2 rounded"
                    placeholder="What's new with you?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <input 
                    type="file"
                    accept="image/+"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
            </form>
        </div>
    );
}