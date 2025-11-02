import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, type RegisterFormValues } from '../types/schemas';
import { authService } from '../services/authService';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '../utils/handleError';

export const Register = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const nav = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const user = await authService.registerUser(data);
      setUser(user);
      toast.success('Welcome to SocialFlow!');
      nav('/');
    } catch (e) {
      toast.error(getErrorMessage(e));
    }
  };

  return (
    <div className="form-container">
      <h2>SocialFlow — Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <Label>Name</Label>
        <Input {...register('displayName')} />
        {errors.displayName && <div className="form-error">{errors.displayName.message}</div>}

        <Label>Email</Label>
        <Input type="email" {...register('email')} />
        {errors.email && <div className="form-error">{errors.email.message}</div>}

        <Label>Password</Label>
        <Input type="password" {...register('password')} />
        {errors.password && <div className="form-error">{errors.password.message}</div>}

        <Button type="submit" isLoading={isSubmitting}>Register</Button>
      </form>
      <p>Already have an Account? <Link to="/login">LogIn</Link></p>
    </div>
  );
};