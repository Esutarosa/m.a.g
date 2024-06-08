import type { FC } from 'react';

import InfoBlock from '@/components/InfoBlock';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import FieldSetWithStatus from '@/components/FieldSetWithStatus';
import SubmitButtonWithStatus from '@/components/SubmitButtonWithStatus';

interface LoginFormProps {
  formAction: (formData: FormData) => Promise<{
    error?: string, success?: boolean
  }>
  searchParams: { message: string }
}

const LoginForm: FC<LoginFormProps> = ({ formAction, searchParams }) => {
  return (
    <InfoBlock className='w-[calc(100vw-2rem)] sm:w-[min(520px,90vw)] px-6 py-5'>
      <h1 className='h3 flex gap-3 items-center justify-center self-start mb-4'>
        <LockClosedIcon className='text-foreground h-6 w-6' />
        <span className='text-foreground'>
          Login
        </span>
      </h1>
      <form className='w-full mt-2'>
        <div className='space-y-6 w-full'>
          <div className='space-y-4 w-full'>
            <FieldSetWithStatus
              id='email'
              label='Email'
              name='email'
              type='email'
              required
            />
            <FieldSetWithStatus
              id='password'
              label='Password'
              name='password'
              type='password'
              required
            />
          </div>
          <div className='flex gap-4 items-center'>
            <SubmitButtonWithStatus formAction={formAction}>
              Login
            </SubmitButtonWithStatus>
            {searchParams && searchParams.message && (
              <p className='text-destructive'>
                {searchParams.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </InfoBlock>
  );
}

export default LoginForm;