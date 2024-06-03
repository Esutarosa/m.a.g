'use client';

import type { FC } from 'react';
import { useState } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <DefaultLayout isHideFooter isHideHeader>
      <SectionContainer>

      </SectionContainer>
    </DefaultLayout>
  );
}

export default SignIn;