import { createClient } from '@/config/supabase/server';
import { User } from '@supabase/supabase-js';

export interface UserState {
  user: User | null;
}

export const getUser = async (): Promise<UserState> => {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return { user };
}