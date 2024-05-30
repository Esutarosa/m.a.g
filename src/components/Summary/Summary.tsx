import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
          innerClassName='rounded-none w-[320px] md:w-[420px] bg-foreground'
        >
          {summary.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-4'
            >
              <h3 className='text-lg text-background'>{item.title}</h3>
              <p className='p text-sm'>{item.text}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  target={item.target}
                  className='text-sm text-muted underline'
                >
                  {item.linkText}
                </Link>
              ) : null}
            </div>
          ))}
        </InfiniteMovingCards>
      </div>
    </SectionContainer>
  );
}

export default Summary;