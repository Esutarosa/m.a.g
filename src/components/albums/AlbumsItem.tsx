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

import { Dock } from '@/components/primitives/dock';

import { YOUTUBE, SOUNDCLOUD, SPOTIFY } from '@/config/icons';

import { ArrowRightIcon } from '@heroicons/react/24/solid';

import { Button } from '@/components/primitives/button';

import SVG from '@/components/SVG';

import Link from 'next/link';

const fakeData = [
  {
    src: '/images/1.jpg',
    title: '9966 feat. restoreta',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
  {
    src: '/images/17.jpg',
    title: 'Sanity',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
  {
    src: '/images/9.jpg',
    title: 'Insomnia',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
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
            <DialogContent className='relative h-auto w-[480px] mx-2 !rounded-lg border border-border bg-card'>
              <ScrollArea className='max-h-[90vh]' type='scroll'>
                <div className='relative p-6'>
                  <div className='flex justify-center py-10'>
                    <DialogImage
                      src={item.src}
                      alt={item.title + ' cover'}
                      className='h-[200px] w-[200px] object-cover !rounded-sm'
                    />
                  </div>
                  <DialogTitle className='text-xl'>
                    {item.title}
                  </DialogTitle>
                  <DialogSubtitle className='text-sm text-muted-foreground'>
                    {item.subtitle}
                  </DialogSubtitle>
                  <DialogDescription>
                    <p className='mt-4 text-muted-foreground'>
                      A dance-ready EP blending modern drum & bass, swampy dub, and acid electro from the rising Melbourne producer.
                    </p>
                    <p className='mt-4 text-muted-foreground'>
                      A jungle and drum & bass compilation featuring a dozen songs that push the boundaries of both genres.
                    </p>
                    <p className='mt-4 text-muted-foreground'>
                      shoebills side is immaculate st4cyminajj
                    </p>
                    <div className='w-full flex justify-between items-center mt-4 text-sm'>
                      <Button variant='secondary' asChild className='group relative h-12 w-12 overflow-hidden rounded-full transition-all duration-300 md:hover:w-32'>
                        <Link href={item.bandcamp} target='_blank'>
                          <div className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 md:group-hover:-translate-x-3 md:group-hover:opacity-100'>
                            Get Album
                          </div>
                          <div className='absolute right-3 transition-all duration-200 transform md:-rotate-45 md:group-hover:rotate-0'>
                            <SVG
                              icon={<ArrowRightIcon />}
                              width={20}
                              height={20}
                              className='size-5'
                            />
                          </div>
                        </Link>
                      </Button>
                      <div>
                        <Dock items={[
                          {
                            title: 'YouTube',
                            icon: <SVG icon={YOUTUBE} />,
                            href: item.youtube
                          },
                          {
                            title: 'SoundCloud',
                            icon: <SVG icon={SOUNDCLOUD} />,
                            href: item.soundcloud
                          },
                          {
                            title: 'Spotify',
                            icon: <SVG icon={SPOTIFY} />,
                            href: item.spotify
                          },
                        ]} />
                      </div>
                    </div>
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