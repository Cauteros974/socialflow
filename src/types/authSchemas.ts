import { z } from 'zod';

export const registerSchema = z.object({
    displayName: z
        .string()
        .min(3, 'The name must be at least 3 characters long.')
        .max(20, 'The name must be at least 20 characters short.'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const loginSchema = z.object({
    email: z.string().email('Inccorect password'),
    password: z.string().min(1, 'The password cannot be empty'),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;