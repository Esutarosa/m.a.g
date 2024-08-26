'use client';

import type { FC } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger
} from '@/components/primitives/dialog';

import { ScrollArea } from '@/components/primitives/scroll-area';

import AnimateItems from '@/components/AnimateItems';

const fakeData = [
  {
    src: '/images/1.jpg',
    title: '9966 feat. restoreta',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/2.jpg',
    title: '2322332323233333333',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/3.jpg',
    title: 'Angel333',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/4.jpg',
    title: 'Crystal Maiden',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/5.jpg',
    title: 'Firefly',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/6.jpg',
    title: 'Happiness In Solitude',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/7.jpg',
    title: 'Home - Resonance (M​.​A​.​G Remix)',
    subtitle: 'by M.A.G'
  },
]

const AlbumsItem: FC = () => {
  return (
    <AnimateItems
      className='grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden'
      content={fakeData.slice().reverse().map((item, idx) =>
        <Dialog key={idx} transition={{
          type: 'spring',
          stiffness: 220,
          damping: 28,
        }}>
          <DialogTrigger className='!rounded-md bg-foreground group'>
            <div className='flex items-center space-x-3 p-3'>
              <DialogImage
                src={item.src}
                alt={item.title + ' cover'}
                className='size-12 object-cover object-top !rounded-sm'
              />
              <div className='flex flex-col items-start justify-center space-y-0'>
                <DialogTitle className='relative text-sm text-card'>
                  <span className='relative inline-flex overflow-hidden'>
                    <div className='line-clamp-1 max-w-[200px] duration-300 translate-y-0 skew-y-0 transition group-hover:-translate-y-[180%] group-hover:skew-y-12'>
                      {item.title}
                    </div>
                    <div className='line-clamp-1 max-w-[200px] duration-300 absolute translate-y-[180%] skew-y-12 transition group-hover:translate-y-0 group-hover:skew-y-0'>
                      {item.title}
                    </div>
                  </span>
                </DialogTitle>
                <DialogSubtitle className='text-[10px] text-muted-foreground'>
                  {item.subtitle}
                </DialogSubtitle>
              </div>
            </div>
          </DialogTrigger>
          <DialogContainer>
            <DialogContent className='relative h-auto w-[620px] mx-2 !rounded-lg border border-border bg-card'>
              <ScrollArea className='max-h-[90vh] h-[720px]' type='scroll'>
                <div className='relative p-6'>
                  <div className='flex justify-center py-10'>
                    <DialogImage
                      src={item.src}
                      alt={item.title + ' cover'}
                      className='h-auto w-[200px] !rounded-sm'
                    />
                  </div>
                  <DialogTitle className='text-xl'>
                    {item.title}
                  </DialogTitle>
                  <DialogSubtitle className='text-sm text-muted-foreground'>
                    {item.subtitle}
                  </DialogSubtitle>
                  <DialogDescription className='text-muted-foreground mt-4 text-sm'>
                    Content
                  </DialogDescription>
                </div>
              </ScrollArea>
              <DialogClose className='block 3xl:hidden' />
            </DialogContent>
          </DialogContainer>
        </Dialog>
      )}
    />
  );
}

export default AlbumsItem;