import { z } from 'zod';

export const ContactFormSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters.',
  }),
  link: z.string().min(3, {
    message: 'Link must be at least 3 characters.',
  })
}).refine((data) => {
  const link = data.link
  try {
    const url = new URL(link);
    return url.hostname
  } catch {
    return false
  }
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>