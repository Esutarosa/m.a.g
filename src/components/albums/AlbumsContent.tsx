'use client';

import type { FC } from 'react';

import AnimateItems from '@/components/AnimateItems';

interface AlbumsContentProps { }

const AlbumsContent: FC<AlbumsContentProps> = ({ }) => {
  return (
    <AnimateItems
      type='bottom'
      className='sticky top-14'
      content={
        <div className='flex flex-col'>
          <h1 className='h1'>Discography</h1>
          <div className='space-y-2'>
            <p className='text-muted-foreground max-w-[920px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore magnam suscipit fugiat tempora sunt molestiae accusamus quia, soluta sequi ad molestias quidem eligendi corporis, totam quas. Iusto, in vitae.</p>
            <p className='text-muted-foreground'>Breakcore, DnB, Jungle, House, Ambient and many more...</p>
          </div>
        </div>
      }
    />
  );
}

export default AlbumsContent;