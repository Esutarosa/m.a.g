'use server';

import { BlogFormSchema } from "@/components/Admin/Blog/BlogFormSchema";
import { revalidatePath } from "next/cache";
import { createClient } from "@/config/supabase/server";

export async function createBlog(data: BlogFormSchema) {
  const supabase = await createClient();
  const { ['content']: exeludedKey, ...blog } = data;

  const resultBlog = await supabase
    .from('blog')
    .insert(blog)
    .select('id')
    .single();
  revalidatePath('/admin/blog');

  if (resultBlog.error) {
    return JSON.stringify(resultBlog)
  } else {
    const result = await supabase
      .from('blog_content')
      .insert({
        blog_id: resultBlog.data.id!,
        content: data.content
      });
    return JSON.stringify(result);
  }
}

export async function readBlog() {
  const supabase = await createClient();
  return supabase
    .from('blog')
    .select('*')
    .order('created_at', { ascending: false });
}

export async function deleteBlogById(id: string) {
  const supabase = await createClient();
  const result = await supabase
    .from('blog')
    .delete()
    .eq('id', id);
  revalidatePath('/admin/blog');
  return JSON.stringify(result);
}

export async function updateBlogById(id: string, data: BlogFormSchema) {
  const supabase = await createClient();
  const result = await supabase
    .from('blog')
    .update(data)
    .eq('id', id);
  revalidatePath('/admin/blog');
  return JSON.stringify(result);
}

export async function readBlogContentById(id: string) {
  const supabase = await createClient();
  return supabase
    .from('blog')
    .select('*,blog_content(*)')
    .eq('id', id)
    .single();
}