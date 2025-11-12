import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostSchema, type CreatePostSchema } from '../types/schemas';
import { useCreatePost } from '../hooks/useCreatePost';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { toast } from 'react-hot-toast';
import '../index.css';


export const CreatePost = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
  });

  const createPost = useCreatePost();

  const onSubmit = async (data: CreatePostSchema) => {
    await createPost.mutateAsync(data, {
      onSuccess: () => {
        toast.success('The post has been published!');
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto flex flex-col gap-4 py-6"
    >
      <div>
        <Label htmlFor="text">Post text</Label>
        <textarea
          id="text"
          {...register('text')}
          rows={4}
          className="input"
        />
        {errors.text && <p className="form-error">{errors.text.message}</p>}
      </div>

      <div>
        <Label htmlFor="image">Image (URL)</Label>
        <Input id="image" {...register('imageUrl')} placeholder="https://..." />
      </div>

      <Button type="submit" isLoading={createPost.isPending} className="button-publish">
        Publish
      </Button>
    </form>
  );
};