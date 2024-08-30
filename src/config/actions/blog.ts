'use server';

import { createClient } from '@/config/supabase/server';

import { BlogFormSchema } from '@/config/definitions/BlogFormSchema';

import { revalidatePath } from 'next/cache';

export async function readBlog() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('blog')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching social data:', error);
    return { data: null, error };
  }

  return { data, error: null };
};

export async function readAdminBlog() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('blog')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching social data:', error);
    return { data: null, error };
  }

  return { data, error: null };
};

export async function createBlog(data: BlogFormSchema) {
  const supabase = await createClient();

  const { content, ...blog } = data;

  const { data: newBlog, error: blogError } = await supabase
    .from('blog')
    .insert(blog)
    .select('id')
    .single();
  revalidatePath('/admin/blog');

  if (blogError) {
    return JSON.stringify(blogError);
  }

  if (newBlog) {
    const { data: blogContentResult, error: contentError } = await supabase
      .from('blog_content')
      .insert({
        blog_id: newBlog.id!,
        content
      });

    if (contentError) {
      return JSON.stringify(contentError);
    }

    return JSON.stringify(blogContentResult);
  }

  return JSON.stringify({
    error: 'Blog creation failed without specific error'
  });
};