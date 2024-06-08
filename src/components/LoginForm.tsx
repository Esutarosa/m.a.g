import type { FC } from 'react';

import InfoBlock from '@/components/InfoBlock';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import FieldSetWithStatus from '@/components/FieldSetWithStatus';

interface LoginFormProps { }

const LoginForm: FC<LoginFormProps> = ({ }) => {
  return (
    <InfoBlock className='w-[calc(100vw-2rem)] sm:w-[min(360px,90vw)] px-6 py-5'>
      <h1 className='h3 flex gap-3 items-center justify-center self-start mb-4'>
        <LockClosedIcon className='text-foreground h-6 w-6' />
        <span className='text-foreground'>
          Login
        </span>
      </h1>
      <form className='w-full'>
        <div className='space-y-6 w-full'>
          <div className='space-y-4 w-full'>
            <FieldSetWithStatus
              id='email'
              label='Some Email'
              name='email'
              type='email'
              required
            />
            <FieldSetWithStatus
              id='password'
              label='Some Password'
              name='password'
              type='password'
              required
            />
          </div>
        </div>
      </form>
    </InfoBlock>
  );
}

export default LoginForm;