import { z } from 'zod';

export type SignInFormInputs = z.infer<typeof SignInFormSchema>;

export const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .trim(),
})