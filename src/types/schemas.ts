import { z } from 'zod';

export const RegisterSchema = z.object({
  displayName: z
    .string()
    .min(3, { message: 'The name must be at least 3 characters long.' })
    .max(20, { message: 'The name must be at most 20 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'The password cannot be empty.' }),
});


export const EditProfileSchema = z.object({
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
});

/*Create Post Schema*/

export const createPostSchema = z.object({
  text: z
    .string()
    .min(1, {message: 'Post text cannot be empty.'})
    .max(500, { message: 'Post text must be at most 500 characters.' }),
  imageUrl: z
    .string()
    .url({ message: 'Invalid image URL.' })
    .optional()
    .or(z.literal('').transform(() => undefined)),
});

export type EditProfileSchema = z.infer<typeof EditProfileSchema>;
export type RegisterFormValues = z.infer<typeof RegisterSchema>;
export type LoginFormValues = z.infer<typeof LoginSchema>;
export type createPostSchema = z.infer<typeof createPostSchema>;