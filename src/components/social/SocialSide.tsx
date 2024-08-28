'use client';

import type { FC } from 'react';

import AnimateItems from '@/components/AnimateItems';

import { Button } from '@/components/primitives/button';

import { ArrowRightIcon } from '@heroicons/react/24/solid';

import SVG from '@/components/SVG';

import Link from 'next/link';

const SocialSide: FC = () => {
  return (
    <AnimateItems
      type='bottom'
      className='sticky top-14'
      content={
        <div className='flex flex-col'>
          <h1 className='h1'>Social</h1>
          <div className='space-y-2 max-w-[920px]'>
            <p className='p'>All my official socials and places where I could potentially be. If you are interested in a collaboration, promotion or any other official reason, please use the form below or contact me via discord.</p>
            <p className='p'>By the way, I look forward to seeing everyone on my discord server, don’t be lazy and come join us!</p>
          </div>
          <div className='flex items-center gap-0 mt-4'>
            <Button asChild className='group relative h-12 w-12 overflow-hidden rounded-full transition-all duration-300 md:hover:w-40'>
              <Link href='/404' target='_blank'>
                <div className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 md:group-hover:-translate-x-3 md:group-hover:opacity-100'>
                  Discord Server
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
          </div>
        </div>
      }
    />
  );
}

export default SocialSide;