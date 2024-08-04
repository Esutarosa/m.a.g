'use client';

import {
  useEffect,
  useRef,
  useState,
  type FC
} from 'react';

import Image from 'next/image';

import { cn } from '@/utils/cn';

interface InfiniteMovingProps {
  items?: string[];
  images?: string[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow' | string;
  pauseOnHover?: boolean;
  centered?: boolean;
  className?: string;
}

const speedMap: Record<string, string> = {
  fast: '20',
  normal: '40',
  slow: '80'
};

const InfiniteMoving: FC<InfiniteMovingProps> = ({
  items,
  images,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  centered = true,
  className,
}) => {
  const [start, setStart] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
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
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const animationDuration = speedMap[speed] || speed;
      containerRef.current.style.setProperty('--animation-duration', animationDuration + 's');
    }
  };

  return (
    <div ref={containerRef} className={cn(
      'scroller relative z-20 container overflow-hidden',
      className
    )}>
      <ul ref={scrollerRef} className={cn(
        'flex min-w-full shrink-0 w-max flex-nowrap',
        pauseOnHover && 'hover:[animation-play-state:paused]',
        centered && 'items-center justify-center',
        start && 'animate-scroll',
      )}>
        {images &&
          images.map((image, index) =>
            <li key={index} className={cn(
              'w-[170px] h-[100px] max-w-full lg:w-[305px] lg:h-[172px] p-1.5',
              'relative rounded-2xl flex-shrink-0 pointer-events-none select-none',
            )}>
              <div className='relative z-20 w-full h-full'>
                <Image
                  src={image}
                  alt={'Slider Image' + ' ' + index}
                  width={305}
                  height={172}
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
            </li>
          )
        }
        {items &&
          items.map((item, index) =>
            <li key={index} className={cn(
              'max-w-full',
              'relative rounded-2xl flex-shrink-0 pointer-events-none select-none',
            )}>
              {item}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default InfiniteMoving;