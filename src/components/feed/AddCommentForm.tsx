import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema, CommentSchema } from '../../types/schemas';
import { useAddComment } from '../../hooks/useAddComment';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { getErrorMessage } from '../../utils/handleError';
import { toast } from 'react-hot-toast';

export const AddCommentForm: React.FC<{ postId: string }> = ({ postId }) => {
  const user = useAuthStore((s) => s.user);
  const addComment = useAddComment(postId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentSchema>({ resolver: zodResolver(commentSchema) });

  const onSubmit = (data: CommentSchema) => {
    if (!user) return toast.error('Need to LogIn');

    addComment.mutate(
      {
        text: data.text,
        author: {
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoUrl,
        },
      },
      {
        onSuccess: () => reset(),
        onError: (e) => toast.error(getErrorMessage(e)),
      }
    );
  };

  if (!user) return <p style={{ textAlign: 'center' }}>Log in to comment</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 12 }}
    >
      <img
        src={user.photoUrl}
        alt={user.displayName}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <div style={{ flex: 1 }}>
        <input {...register('text')} placeholder="Add a comment..." className="input" />
        {errors.text && <div className="form-error">{errors.text.message}</div>}
      </div>
      <Button type="submit" isLoading={addComment.isPending}>
        Send
      </Button>
    </form>
  );
};