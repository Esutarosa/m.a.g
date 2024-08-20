import type { FC } from 'react';

import { redirect } from 'next/navigation';

import { Layout } from '@/components/layouts';

import { AuthForm } from '@/components/forms';

import { getUser } from '@/config/store/user';

const AuthPage: FC = async () => {
  const { user } = await getUser();
  if (user) return redirect('/admin');

  return (
    <Layout isHideFooter isHideNav>
      <AuthForm />
    </Layout>
  );
}

export default AuthPage;