import type { FC } from 'react';

import AnimateItems from '@/components/AnimateItems';

import LinkWithArrow from '@/components/LinkWithArrow';

import { siteConfig } from '@/config/site';

import { cn } from '@/utils/cn';

const HeroContentRight: FC = () => {
  return (
    <div className='col-start-2 2xl:col-start-3'>
      <div className='flex items-center justify-between w-full'>
        <AnimateItems content={
          <div className={cn(
            'backdrop-blur supports-[backdrop-filter]:bg-background/60',
            'border-2 border-border rounded-md py-4 px-12',
            'hidden 2xl:block',
          )}>
            <LinkWithArrow
              content='savelife.in.ua'
              href='https://savelife.in.ua/en/'
              target='_blank'
            />
          </div>
        } />
        <AnimateItems content={
          <h4 className='vertical-text text-[.5rem] md:text-xs 2xl:text-sm'>
            {siteConfig.bio.signature}
          </h4>
        } />
      </div>
    </div>
  );
}

export default HeroContentRight;