import type { FC } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import LoginForm from '@/components/LoginForm';

interface LoginProps { searchParams: { message: string } }

const Login: FC<LoginProps> = ({ searchParams }) => {
  return (
    <DefaultLayout isHideFooter isHideHeader className='justify-center'>
      <SectionContainer className='flex justify-center'>
        <LoginForm />
      </SectionContainer>
    </DefaultLayout>
  );
}

export default Login;