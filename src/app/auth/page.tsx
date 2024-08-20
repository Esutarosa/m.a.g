import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { AuthForm } from '@/components/forms';

const AuthPage: FC = () => {
  return (
    <Layout isHideFooter isHideNav>
      <AuthForm />
    </Layout>
  );
}

export default AuthPage;