import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentschema, CommentSchema } from '../../types/schemas';
import { useAddComment } from '../../hooks/useAddComment';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { getErrorMessage } from '../../utils/handleError';
import { toast } from 'react-hot-toast';

export const AddCommentForm: React.FC<{postId: string}> = ({ postId }) => {
    const user = useAuthStore((s) => s.user);
    const addComment = useAddComment(postId);
    const { register, handleSubmit, reset, formState:{ errors } } = useForm<CommentSchema>({ resolver: zodResolver(commentSchema) });

    const onSubmit = (data: CommentSchema) => {
        if (!user) return toast.error('Need to LogIn');
        addComment.mutate({ text: data.text, author: { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL } }, {
          onSuccess: () => reset(),
          onError: (e) => toast.error(getErrorMessage(e)),
    });

    if(!user) return <p style={{ textAlign: 'center'}}>LogIn to comment</p>;
};

