import type { FC } from 'react';

import AnimateItems from '@/components/AnimateItems';

import { siteConfig } from '@/config/site';

const HeroContentLeft: FC = () => {
  return (
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
  );
}

export default HeroContentLeft;