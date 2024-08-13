'use client';

import {
  FormEvent,
  useLayoutEffect,
  useRef,
  useState,
  type FC
} from 'react';

import { Container } from '@/components/layouts';

import { signInAction } from '@/config/actions/auth';

import { useFormAction } from '@/hooks/useFormAction';

import FieldSetWithStatus from '@/components/FieldSetWithStatus';

import { ButtonWithStatus } from '@/components/primitives/button';

import SVG from '@/components/SVG';

import { useSearchParams } from 'next/navigation';

import ErrorNote from '@/components/ErrorNote';

import { cn } from '@/utils/cn';

const SignInForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const emailRef = useRef<HTMLInputElement>(null);

  const [response, action] = useFormAction(async (e: FormEvent) => {
    return signInAction(e, email, password);
  });

  const params = useSearchParams();

  useLayoutEffect(() => {
    emailRef.current?.focus();
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await action(e);
  };

  const isFormValid =
    email.length > 0 &&
    password.length > 0;

  return (
    <Container sectionClassName={cn(
      'w-[calc(100vw-1.5rem)] sm:w-[min(660px,90vw)]',
      'px-6 py-5',
    )}>
      <h1 className={cn(
        'flex gap-3 items-center justify-center',
        'self-start text-2xl mb-3.5',
      )}>
        <SVG icon='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z' />
        <span className='font-semibold'>
          Sign in
        </span>
      </h1>
      <form className='w-full' onSubmit={onSubmit}>
        <div className='space-y-6 w-full'>
          {response?.error &&
            <ErrorNote>
              {response.error}
            </ErrorNote>}
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
              type="hidden"
              name="callbackUrl"
              value={params.get('callbackUrl') ?? ''}
            />
          </div>
          <ButtonWithStatus disabled={!isFormValid}>
            Sign in
          </ButtonWithStatus>
        </div>
      </form>
    </Container>
  );
}

export default SignInForm;