import { z } from 'zod';

export const BlogFormSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters.',
  }),
  image_url: z.string().url({
    message: 'Invalid image url.',
  }),
  content: z.string().min(3, {
    message: 'Content must be at least 3 characters.',
  }),
  is_published: z.boolean(),
}).refine((data) => {
  const image_url = data.image_url
  try {
    const url = new URL(image_url);
    return url.hostname === 'pbs.twimg.com'
      || url.hostname === 'i.imgur.com'
      || url.hostname === 'cdn.discordapp.com'
  } catch {
    return false
  }
}, {
  message: 'Currently we are support only image from X, Imgur and Discord.',
  path: ['image_url']
})

export type BlogFormSchema = z.infer<typeof BlogFormSchema>