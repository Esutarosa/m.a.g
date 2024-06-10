import type { FC } from 'react';
import { createClient } from '@/config/supabase/server';
import { redirect } from 'next/navigation';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import LoginForm from '@/components/LoginForm';

interface LoginProps { searchParams: { message: string } }

const Login: FC<LoginProps> = ({ searchParams }) => {
  const login = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }

    return redirect('/admin');
  }

  return (
    <DefaultLayout isHideFooter isHideHeader className='justify-center'>
      <SectionContainer className='flex justify-center'>
        <LoginForm searchParams={searchParams} formAction={login} />
      </SectionContainer>
    </DefaultLayout>
  );
}

export default Login;