'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteMovingCardsProps extends PropsWithChildren {
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  innerClassName?: string;
  outerClassName?: string;
}

const InfiniteMovingCards: FC<InfiniteMovingCardsProps> = ({
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  innerClassName,
  outerClassName,
  children,
}) => {
  const [start, setStart] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicateItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicateItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        outerClassName
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {React.Children.map(children, (child, index) => (
          <li
            key={index}
            className={cn(
              'max-w-full relative flex-shrink-0 px-8 py-6',
              innerClassName,
            )}
          >
            <blockquote>
              {child}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfiniteMovingCards;
