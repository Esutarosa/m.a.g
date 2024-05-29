import type { FC } from 'react';
import { cn } from '@/lib/utils';

import SectionContainer from '@/components/Layouts/SectionContainer';
import InfiniteMovingCards from '@/components/InfiniteMovingCards';

import { summary } from '@/data/Summary';
import { PRESS_START_2P as PressStart2P } from '@/../../next.fonts';

const Summary: FC = () => {
  return (
    <SectionContainer>
      <div className={cn(
        'rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden',
        PressStart2P.className
      )}>
        <InfiniteMovingCards
          direction='left'
          speed='slow'
          innerClassName='rounded-none w-[250px] text-background'
        >
          {summary.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </InfiniteMovingCards>
      </div>
    </SectionContainer>
  );
}

export default Summary;