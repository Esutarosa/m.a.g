'use client';

import {
  useLayoutEffect,
  useRef,
  useState,
  type FC
} from 'react';

import { Container } from '@/components/layouts';

import FieldSetWithStatus from '@/components/FieldSetWithStatus';

import { ButtonWithStatus } from '@/components/primitives/button';

import { EYE, EYE_OFF } from '@/config/icons';

import Panel from '@/components/Panel';

import SVG from '@/components/SVG';

import ErrorNote from '@/components/ErrorNote';

import { signIn } from '@/config/actions/auth';

import { cn } from '@/utils/cn';

const AuthForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string[] } | { form: string } | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    emailRef.current?.focus();
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (formData: FormData) => {
    const result = await signIn(formData);

    if (result?.errors) {
      setErrors(result.errors);
      return;
    }

    setErrors(null);
  };

  const isFormValid =
    email.length > 0 &&
    password.length > 0;

  return (
    <Container sectionClassName={cn(
      'w-full h-screen flex items-center justify-center px-4'
    )}>
      <Panel outerClassName='max-w-sm'>
        <h1 className={cn(
          'font-semibold self-start text-2xl pb-2',
        )}>
          Sign in
        </h1>
        <p className={cn(
          'text-sm text-muted-foreground pb-6',
        )}>
          Enter your email below to login to your account
        </p>
        <form className='w-full'>
          <div className='space-y-6 w-full'>
            {errors &&
              <ErrorNote>
                {Object.values(errors).flat().map((error, idx) => (
                  <p key={idx}>{error}</p>
                ))}
              </ErrorNote>}
            <div className='space-y-4 w-full'>
              <FieldSetWithStatus
                id='email'
                label='Admin Email'
                inputRef={emailRef}
                value={email}
                onChange={setEmail}
              />
              <FieldSetWithStatus
                id='password'
                label='Admin Password'
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                onChange={setPassword}
                className='relative'
                accessory={
                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className={cn(
                      'absolute inset-y-0 right-0 px-3',
                      'flex items-center text-muted',
                      'transition-colors hover:text-primary',
                    )}>
                    {isPasswordVisible
                      ? <SVG
                        className='size-5'
                        icon={EYE_OFF}
                      />
                      : <SVG
                        className='size-5'
                        icon={EYE}
                      />}
                  </button>}
                inputClassName={cn(
                  'w-full !pr-[2.68rem]',
                )}
              />
            </div>
            <ButtonWithStatus
              className='w-full'
              disabled={!isFormValid}
              formAction={handleSubmit}
            >
              Sign in
            </ButtonWithStatus>
          </div>
        </form>
      </Panel>
    </Container>
  );
}

export default AuthForm;