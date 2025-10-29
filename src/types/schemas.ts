import { z } from 'zod';

export const registerSchema = z.object({
  displayName: z
    .string()
    .min(3, { message: 'The name must be at least 3 characters long.' })
    .max(20, { message: 'The name must be at most 20 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'The password cannot be empty.' }),
});

export const editProfileSchema = z.object({
  displayName: z
    .string()
    .min(3, { message: 'The name must be at least 3 characters long.' })
    .max(20, { message: 'The name must be at most 20 characters long.' }),
  bio: z
    .string()
    .max(160, { message: 'Bio must be at most 160 characters long.' })
    .optional(),
  photoUrl: z
    .string()
    .url({ message: 'Invalid image URL.' })
    .optional(),
})

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;