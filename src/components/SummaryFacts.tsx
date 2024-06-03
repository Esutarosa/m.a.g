import type { FC } from 'react';
import { cn } from '@/lib/utils';

import SectionContainer from '@/components/Layouts/SectionContainer';
import InfiniteMovingCards from '@/components/InfiniteMovingCards';

import { summary } from '@/data/Summary';
import { PRESS_START_2P as PressStart2P } from '@/config/fonts';

const SummaryFacts: FC = () => {
  return (
    <SectionContainer className='-mt-12'>
      <div className={cn(
        'flex flex-col gap-4',
        PressStart2P.className
      )}>
        <div className='flex flex-col'>
          <h2 className='h2'>Summary Facts</h2>
          <p className='p'>A few random summary facts about me and my works.</p>
        </div>
        <div className='flex flex-col antialiased items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards
            direction='left'
            speed='slow'
            innerClassName='rounded-none w-[320px] md:w-[480px] bg-foreground'
          >
            {summary.map((item, index) => (
              <div key={index} className='flex flex-col gap-4'>
                <h3 className='text-lg text-background'>{item.question}</h3>
                <p className='p text-sm'>{item.answer}</p>
              </div>
            ))}
          </InfiniteMovingCards>
        </div>
      </div>
    </SectionContainer>
  );
}

export default SummaryFacts;