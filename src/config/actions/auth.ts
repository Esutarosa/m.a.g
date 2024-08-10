import { FormEvent } from 'react';

import { supabase } from '@/config/supabase/client';

export const handleSignIn = async (e: FormEvent, email: string, password: string) => {
  e.preventDefault();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return error;
};

export const handleSignUp = async (e: FormEvent, email: string, password: string) => {
  e.preventDefault();
  const { error } = await supabase.auth.signUp({
    email,
    password
  });
  return error;
};