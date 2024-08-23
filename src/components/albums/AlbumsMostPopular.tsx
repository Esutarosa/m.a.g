'use client';

import type { FC } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogTitle,
  DialogTrigger
} from '@/components/primitives/dialog';

import AnimateItems from '@/components/AnimateItems';

import { cn } from '@/utils/cn';

interface AlbumsMostPopularProps { }

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
]

const AlbumsMostPopular: FC<AlbumsMostPopularProps> = ({ }) => {
  return (
    <AnimateItems
      duration={0.8}
      staggerDelay={0.095}
      distanceOffset={60}
      className='grid grid-cols-2 gap-4'
      content={fakeData.map((album, inx) =>
        <Dialog key={inx} transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.65
        }}>
          <DialogTrigger className={cn(
            'flex flex-col overflow-hidden rounded-xl',
            'border border-border bg-accent',
          )}>
            <DialogImage
              src={album.src}
              alt={album.title + ' cover'}
              className='h-28 xl:h-48 w-full object-cover'
            />
            <div className='p-2'>
              <DialogTitle className='line-clamp-1'>
                {album.title}
              </DialogTitle>
            </div>
          </DialogTrigger>
          <DialogContainer>
            <DialogContent className={cn(
              'flex flex-col h-auto w-full',
              'overflow-hidden rounded-xl',
              'pointer-events-auto relative',
              'border border-border bg-accent',
              'sm:w-[520px]',
            )}>
              <DialogImage
                src={album.src}
                alt={album.title + ' cover'}
                className='w-full h-96 object-cover'
              />
              <div className='p-6'>
                <DialogTitle>
                  {album.title}
                </DialogTitle>
                <DialogDescription variants={{
                  initial: {
                    opacity: 0,
                    scale: 0.8,
                    y: 100
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.8,
                    y: 100
                  },
                }}>
                  <p>{album.title}</p>
                </DialogDescription>
              </div>
              <DialogClose />
            </DialogContent>
          </DialogContainer>
        </Dialog>
      )}
    />
  );
}

export default AlbumsMostPopular;