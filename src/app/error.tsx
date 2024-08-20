/* eslint-disable @next/next/no-img-element */
'use client';

import type { FC } from 'react';

import { Container, Layout } from '@/components/layouts';

import ErrorNote from '@/components/ErrorNote';

import { Button } from '@/components/primitives/button';

import Link from 'next/link';

import SVG from '@/components/SVG';

import { REFRESH } from '@/config/icons';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/primitives/accordion';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <Layout isHideFooter isHideNav>
      <Container centered={false}>
        <div className='flex items-center gap-4'>
          <Button
            variant='secondary'
            size='sm'
            className='rounded-md'
            onClick={reset}
          >
            <SVG
              icon={REFRESH}
              width={16}
              height={16}
            />
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='rounded-md'
            asChild
          >
            <Link href='/'>
              Get Home
            </Link>
          </Button>
        </div>
        <ErrorNote>
          {error.name &&
            <p>Type: {error.name}</p>}
          {error.message &&
            <p>Error: {error.message}</p>}
        </ErrorNote>
        <ErrorNote>
          <Accordion
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 20
            }}
            variants={{
              expanded: {
                opacity: 1,
              },
              collapsed: {
                opacity: 0,
              },
            }}>
            <AccordionItem value='getting-started'>
              <AccordionTrigger className='w-full text-left flex items-center'>
                <p>View details</p>
              </AccordionTrigger>
              <AccordionContent className='origin-left'>
                {error.stack &&
                  <p className='leading-loose'>{error.stack}</p>}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ErrorNote>
      </Container>
    </Layout>
  );
}

export default ErrorPage;