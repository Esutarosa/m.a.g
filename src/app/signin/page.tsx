import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import SignInForm from '@/components/SignInForm';

const SignInPage: FC = () => {
  return (
    <Layout isHideFooter isHideNav>
      <SignInForm />
    </Layout>
  );
}

export default SignInPage;