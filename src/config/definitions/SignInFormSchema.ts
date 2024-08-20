import { z } from 'zod';

export type SignInFormInputs = z.infer<typeof SignInFormSchema>;

export const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .trim(),
})