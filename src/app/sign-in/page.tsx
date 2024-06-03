import type { FC } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import SignInForm from '@/components/SignInForm';

const SignIn: FC = () => {
  return (
    <DefaultLayout isHideFooter isHideHeader className='justify-center'>
      <SectionContainer className='flex justify-center'>
        <SignInForm />
      </SectionContainer>
    </DefaultLayout>
  );
}

export default SignIn;