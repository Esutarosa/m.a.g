import { createClient } from '@/config/supabase/server';

export async function readSocial() {
  const supabase = await createClient();
  return supabase
    .from('social')
    .select('*')
    .order('id', { ascending: false });
};