'use server';

import { createClient } from '@/config/supabase/server';

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