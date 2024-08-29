import { createClient } from '@/config/supabase/server';

export async function readSocial() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('social')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error('Error fetching social data:', error);
    return { data: null, error };
  }

  return { data, error: null };
};