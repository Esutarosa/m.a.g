import type { FC } from 'react';

import { Container } from '@/components/layouts';

import { HeroContentLeft, HeroContentRight } from '@/components/hero';

import { cn } from '@/utils/cn';

const HeroContent: FC = () => {
  return (
    <Container containerClassName={cn(
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'flex items-center justify-center w-full h-full bg-background/75',
    )}>
      <div className='grid grid-cols-1 3xl:grid-cols-3 items-center justify-between w-full'>
        <HeroContentLeft />
        <HeroContentRight />
      </div>
    </Container>
  );
}

export default HeroContent;