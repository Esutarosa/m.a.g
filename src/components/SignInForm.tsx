'use client';

import type { FC } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { useSearchParams } from 'next/navigation';

import InfoBlock from '@/components/InfoBlock';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import ErrorNote from '@/components/ErrorNote';
import { KEY_CREDENTIALS_SIGN_IN_ERROR, KEY_CALLBACK_URL } from '@/auth';
import FieldSetWithStatus from '@/components/FieldSetWithStatus';

interface SignInFormProps { }

const SignInForm: FC<SignInFormProps> = ({ }) => {
  const params = useSearchParams();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, action] = useFormState(_ => _, undefined);

  const emailRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <InfoBlock className='w-[calc(100vw-2rem)] sm:w-[min(360px,90vw)] px-6 py-5'>
      <h1 className='h3 flex gap-3 items-center justify-center self-start mb-4'>
        <LockClosedIcon className='text-foreground h-6 w-6' />
        <span className='text-foreground'>
          Sign in
        </span>
      </h1>
      <form
        action={action}
        className='w-full'
      >
        <div className='space-y-6 w-full'>
          {response === KEY_CREDENTIALS_SIGN_IN_ERROR &&
            <ErrorNote>Invalid email or password</ErrorNote>}
          <div className='space-y-4 w-full'>
            <FieldSetWithStatus
              id="email"
              inputRef={emailRef}
              label="Admin Email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <FieldSetWithStatus
              id="password"
              label="Admin Password"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <input
              type='hidden'
              name={KEY_CALLBACK_URL}
              value={params.get(KEY_CALLBACK_URL) ?? ''}
            />
          </div>
          <button>Sign in</button>
        </div>
      </form>
    </InfoBlock>
  );
}

export default SignInForm;