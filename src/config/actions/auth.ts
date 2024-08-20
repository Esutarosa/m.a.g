'use server';

import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';

import { supabase } from '@/config/supabase/server';

import { SignInFormSchema } from '@/config/definitions/SignInFormSchema';

export async function signIn(formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  };

  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    const errorMessage =
      error.message.includes('Invalid login credentials')
        ? 'Invalid email or password.'
        : error.message;

    return {
      errors: { form: errorMessage },
    }
  };

  revalidatePath('/admin', 'layout');
  redirect('/admin');
}

export async function signOut() {
  await supabase.auth.signOut();
  return redirect('/auth');
}