'use server'

import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';

import { supabase } from '@/config/supabase/server';

export async function signin(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/admin', 'layout')
  redirect('/admin')
}