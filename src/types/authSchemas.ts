import { email, z } from "zod";

export default registerSchema = z.object({
    displayName: z
        .string()
        .min(3, 'The name must be at least 3 characters long.')
        .max(20, 'The name must be at least 20 characters short.')
    email: z.string().email('Incorrect email'),
    password: z.string().min(6, 'The password cannot be empty'),

});