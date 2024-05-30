'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import DefaultLayout from '@/components/Layouts/Default';
import { Button } from '@/components/ui/button';

import { PRESS_START_2P as PressStart2P } from '@/../../next.fonts';

const NotFound: FC = () => {
  const [show404, setShow404] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setShow404(true)
    }, 750)
  }, []);

  return (
    <DefaultLayout isHideHeader isHideFooter>
      <div className='relative mx-auto flex h-screen w-full flex-col items-center justify-center'>
        <div className='absolute'>
          <h1 className={cn(
            'text-foreground select-none text-[8rem] md:text-[15rem] lg:text-[20rem] opacity-[5%] filter transition duration-200',
            show404 ? 'blur-sm' : 'blur-none',
            PressStart2P.className
          )}>
            404
          </h1>
        </div>
        <div className={cn(
          'flex flex-col items-center justify-center space-y-6 transition',
          show404 ? 'opacity-100' : 'opacity-0'
        )}>
          <div className='text-foreground flex w-[420px] flex-col items-center justify-center space-y-6'>
            <h1 className='text-3xl md:text-5xl'>Oops, you are lost</h1>
            <p className='text-center text-sm'>
              <span className='underline underline-offset-2 decoration-dotted cursor-not-allowed'>
                {pathname}
              </span>
              {' '}
              could not be found
            </p>
          </div>
          <div className='flex items-center space-x-4'>
            <Button className='z-10' variant='ghost' size='lg'>
              <Link className='text-sm' href='/'>Back home</Link>
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default NotFound;