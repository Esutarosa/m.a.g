/* eslint-disable @next/next/no-img-element */

'use client';

import { Fragment, type FC } from 'react';

import { Container, Layout } from '@/components/layouts';

import InfiniteMoving from '@/components/InfiniteMoving';

import Note from '@/components/Note';

import { Button } from '@/components/primitives/button';

import Link from 'next/link';

import { cn } from '@/utils/cn';

const NotFound: FC = () => {
  const messages = ['Not', 'Found', '404'];

  return (
    <Layout isHideFooter isHideNav>
      <Container sectionClassName={cn(
        'flex items-center justify-center',
        'w-full h-screen overflow-hidden',
        'text-sm text-muted-foreground',
      )}>
        <div className={cn('-rotate-[8.5deg]')}>
          <Note>
            Oops, this page doesn&#39;t exist.
          </Note>
        </div>
        <InfiniteMoving
          pauseOnHover={false}
          direction='left'
          speed='70'
          scrollPercentage='10'
          className={cn('-rotate-[8.5deg]')}
          items={
            <span className='flex flex-row space-x-2'>
              {Array(8).fill(null).map((_, index) =>
                <Fragment key={index}>
                  {messages.map((message, i) =>
                    <p key={i}>{message}</p>
                  )}
                </Fragment>
              )}
            </span>}
        />
        <InfiniteMoving
          pauseOnHover={false}
          direction='right'
          speed='40'
          scrollPercentage='10'
          className={cn('-rotate-[-3.25deg]')}
          items={
            <span className='flex flex-row space-x-2'>
              {Array(8).fill(null).map((_, index) =>
                <Fragment key={index}>
                  {messages.map((message, i) =>
                    <p key={i}>{message}</p>
                  )}
                </Fragment>
              )}
            </span>}
        />
        <div className={cn('-rotate-[-3.25deg] -translate-x-[2rem]')}>
          <Button asChild variant='secondary'>
            <Link href='/'>
              Get home
            </Link>
          </Button>
        </div>
      </Container>
    </Layout>
  );
}

export default NotFound;