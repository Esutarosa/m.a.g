import { z } from 'zod';

export type BlogFormSchema = z.infer<typeof BlogFormSchema>;

export const BlogFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .trim(),
  content: z
    .string()
    .min(3, { message: 'Content must be at least 3 characters long' })
    .trim(),
  is_published: z
    .boolean(),
  image_url: z
    .string()
    .url({ message: 'Invalid image url format' })
    .trim(),
});