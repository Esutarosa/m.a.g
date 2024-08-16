'use server';

import { supabase } from '@/config/supabase/client';

import { redirect } from 'next/navigation';

export const signInAction = async (
  email: string,
  password: string,
) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (!error) redirect('/admin');

  return error;
};

export const signUpAction = async (
  email: string,
  password: string,
) => {
  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (!error) redirect('/');

  return error;
};