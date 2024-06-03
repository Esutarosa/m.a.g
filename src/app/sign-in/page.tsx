'use client';

import type { FC } from 'react';
import { useState } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';
import InfoBlock from '@/components/InfoBlock';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, action] = useFormState(_ => _, undefined);

  return (
    <DefaultLayout isHideFooter isHideHeader className='justify-center'>
      <SectionContainer className='flex justify-center'>
        <InfoBlock className='w-[calc(100vw-2rem)] sm:w-[min(360px,90vw)] px-6 py-5'>
          <h1 className='flex gap-3 items-center justify-center self-start text-2xl mb-3'>
            <LockClosedIcon className='h-6 w-6' />
            Sign in
          </h1>
          <form
            action={action}
            className='w-full'
          >
            <div className='space-y-6 w-full'>
              <div className='space-y-4 w-full'>
                <input
                  type='hidden'
                  name=''
                  value={response ?? ''}
                />
              </div>
              <button>Sign in</button>
            </div>
          </form>
        </InfoBlock>
      </SectionContainer>
    </DefaultLayout >
  );
}

export default SignIn;