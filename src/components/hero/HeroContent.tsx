import type { FC } from 'react';

import { Container } from '@/components/layouts';

import AnimateItems from '@/components/AnimateItems';
import LinkWithArrow from '@/components/LinkWithArrow';

import { siteConfig } from '@/config/site';

import { cn } from '@/utils/cn';

const HeroContent: FC = () => {
  return (
    <Container containerClassName={cn(
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'flex items-center justify-center w-full h-full bg-background/75',
    )}>
      <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between w-full'>
        <div className='flex flex-col col-start-1 gap-3 max-w-lg pr-10 lg:pr-0'>
          <AnimateItems content={
            <h2 className='text-4xl'>
              <span className='font-bold'>{siteConfig.bio.name}</span>
              <span className='text-muted-foreground'> |</span>
              <span className='text-3xl align-middle text-muted-foreground'> {' '}
                Artist
              </span>
            </h2>
          } />
          <AnimateItems content={
            <span className='flex flex-col gap-2'>
              <p className='text-sm text-muted-foreground'>
                {siteConfig.bio.ganres}
              </p>
              <p className='text-sm text-muted-foreground'>
                {siteConfig.bio.bio}
              </p>
            </span>
          } />
        </div>
        <div className='col-start-2 lg:col-start-3'>
          <div className='flex items-center justify-between w-full'>
            <AnimateItems content={
              <div className={cn(
                'backdrop-blur supports-[backdrop-filter]:bg-background/60',
                'border-2 border-border rounded-md py-4 px-12',
                'hidden lg:block'
              )}>
                <LinkWithArrow
                  content='savelife.in.ua'
                  href='https://savelife.in.ua/en/'
                  target='_blank'
                />
              </div>
            } />
            <AnimateItems content={
              <h4 className='vertical-text'>
                {siteConfig.bio.signature}
              </h4>
            } />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroContent;