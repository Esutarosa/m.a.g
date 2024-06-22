'use client';

import type { FC } from 'react';
import { cn } from '@/lib/utils';

import SectionContainer from '@/components/Layouts/SectionContainer';
import { AxisBoxe } from '@/components/Boxes';

import { PRESS_START_2P as PressStart2P } from '@/config/fonts';

const Hero: FC = () => {
  return (
    <SectionContainer className='overflow-hidden'>
      <div className={cn(
        'relative h-96 w-full overflow-hidden bg-foreground flex flex-col items-center justify-center rounded-lg',
        PressStart2P.className
      )}>
        <AxisBoxe />
        <h1
          className='relative text-3xl md:text-5xl text-center text-background select-none z-20'
          style={{
            transform: 'skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)',
          }}
        >
          Modernized Android Gyaru
        </h1>
        <p
          className='relative text-sm md:text-2xl mt-4 text-center text-background select-none z-20'
          style={{
            transform: 'skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)',
          }}
        >
          Official M.A.G website
        </p>
      </div>
    </SectionContainer>
  );
}

export default Hero;