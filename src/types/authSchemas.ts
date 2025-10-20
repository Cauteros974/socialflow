import { email, z } from "zod";

export default registerSchema = z.object({
    displayName: z
        .string()
        .min(3, 'The name must be at least 3 characters long.')
        .max(20, 'The name must be at least 20 characters short.')
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});