import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type EditProfileSchema } from "../../types/schemas";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
/*import { AppUser } from '../../types/user';*/
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';
import { data } from "react-router-dom";

export const EditProfileForm: React.FC<{ currentUser: AppUser; onSuccess: () => void }> = ({ currentUser, onSuccess }) => {
    const upd = useUpdateProfile(currentUser.uid);
    const { register, handleSubmit, formState:{ errors } } = useForm<EditProfileSchema>({ resolver: zodResolver(editProfileSchema), defaultValues:{ displayName: currentUser.displayName, bio: currentUser.bio } });

    const onSubmit = async (data: EditProfileSchema) => {
        await upd.mutateAsync(data);
        onSuccess();
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <div>
                <Label htmlFor="displayName">Name</Label>
                <Input id="displayName" {...register('displayName')} error={!!errors.displayName} />
                {errors.displayName && <div className="form-error">{errors.displayName.message}</div>}
            </div>
            <div>
                <Label htmlFor="bio">About Myself</Label>
                <textarea id="bio" {...register('bio')} className="input" />
                {errors.bio && <div className="form-error">{errors.bio.message}</div>}
            </div>
            <Button type="submit" isLoading={upd.isPending}>Save</Button>
        </form>
    )
};