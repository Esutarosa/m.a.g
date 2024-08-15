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

import Panel from '@/components/Panel';

import ErrorNote from '@/components/ErrorNote';

import { cn } from '@/utils/cn';

const SignInForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const emailRef = useRef<HTMLInputElement>(null);

  const [response, action] = useFormAction(async (e: FormEvent) => {
    return signInAction(e, email, password);
  });

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
    <Container sectionClassName={cn('w-full h-screen flex items-center justify-center px-4')}>
      <Panel outerClassName='max-w-sm'>
        <h1 className={cn(
          'font-semibold self-start text-2xl mb-3.5',
        )}>
          Sign in
        </h1>
        <p className={cn(
          'text-sm text-muted-foreground pb-6',
        )}>
          Enter your email below to login to your account
        </p>
        <form className='w-full' onSubmit={onSubmit}>
          <div className='space-y-6 w-full'>
            {response?.error &&
              <ErrorNote>
                {response.error}
              </ErrorNote>}
            <div className='space-y-4 w-full'>
              <FieldSetWithStatus
                id='email'
                inputRef={emailRef}
                label='Admin Email'
                type='email'
                value={email}
                onChange={setEmail}
              />
              <FieldSetWithStatus
                id='password'
                label='Admin Password'
                type='password'
                value={password}
                onChange={setPassword}
              />
            </div>
            <ButtonWithStatus className='w-full' disabled={!isFormValid}>
              Sign in
            </ButtonWithStatus>
          </div>
        </form>
      </Panel>
    </Container>
  );
}

export default SignInForm;