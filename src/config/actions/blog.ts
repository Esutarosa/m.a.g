'use server';

import { BlogFormSchema } from "@/components/Admin/Blog/BlogFormSchema";
import { createServerClient } from "@supabase/ssr";
import { cookies } from 'next/headers';
import { Database } from "@/config/types/blog";
import { revalidatePath } from "next/cache";

const cookieStore = cookies();

const supabase = createServerClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  },
);

export async function createBlog(data: BlogFormSchema) {
  const { ['content']: exeludedKey, ...blog } = data;

  const resultBlog = await supabase
    .from('blog')
    .insert(blog)
    .select('id')
    .single();

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
  return supabase
    .from('blog')
    .select('*')
    .order('created_at', { ascending: false })
}

export async function deleteBlogById(id: string) {
  const result = await supabase
    .from('blog')
    .delete()
    .eq('id', id)
  revalidatePath('/admin/blog')

  return JSON.stringify(result)
}