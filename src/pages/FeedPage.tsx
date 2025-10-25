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

                <button
                    type="submit"
                    className="bg-blue-500 text-while p-2 rounded mt-2"
                >
                    Publish
                </button>
            </form>

            {posts?.map((post) =>(
                <div key={post.id} className="border p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src={post.author.photoURL}
                            alt={post.author.displayName}
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="font-semibold">{post.author.displayName}</span>
                    </div>
                    <p>{post.text}</p>
                    {post.imageUrl} && (
                        <img src={post.imageUrl} alt="" className="mt-2 rounded" />
                    )
            ))}
        </div>
    );
};