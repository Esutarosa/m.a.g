import type { FC } from 'react';

import { Container, Layout } from '@/components/layouts';

import SignInForm from '@/components/SignInForm';

const SignInPage: FC = () => {
  return (
    <Layout isHideFooter isHideNav>
      <Container containerClassName='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <SignInForm />
      </Container>
    </Layout>
  );
}

export default SignInPage;