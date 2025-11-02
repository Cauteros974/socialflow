import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchema } from '../types/schemas';
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
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const user = await authService.registerUser(data);
      setUser(user);
      toast.success('Welcome to SocialFlow!');
      nav('/');
    } catch (e) { toast.error(getErrorMessage(e)); }
  };

  return (
    <div className="form-container">
      <h2>SocialFlow — Registratioh</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <Label>Name</Label><Input {...register('displayName')} />{errors.displayName && <div className="form-error">{errors.displayName.message}</div>}
        <Label>Email</Label><Input {...register('email')} />{errors.email && <div className="form-error">{errors.email.message}</div>}
        <Label>Password</Label><Input type="password" {...register('password')} />{errors.password && <div className="form-error">{errors.password.message}</div>}
        <Label>Repeat password</Label><Input type="password" {...register('confirmPassword')} />{errors.confirmPassword && <div className="form-error">{errors.confirmPassword.message}</div>}
        <Button type="submit" isLoading={isSubmitting}>Register</Button>
      </form>
      <p>Already have an Account? <Link to="/login">LogIn</Link></p>
    </div>
  );
};