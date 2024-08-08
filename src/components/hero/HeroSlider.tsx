import type { FC } from 'react';

import AnimateItems from '@/components/AnimateItems';
import InfiniteMoving from '@/components/InfiniteMoving';

import { heroImageData, heroSliderConfig } from '@/components/hero/config';

import { cn } from '@/utils/cn';

const HeroSlider: FC = () => {
  const getImageSlice = (startIndex: number, count: number) => {
    return heroImageData.slice(startIndex, startIndex + count);
  };

  return (
    <div className={cn(
      'flex items-center justify-center h-full overflow-hidden',
      '[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
    )}>
      <AnimateItems
        duration={0.8}
        staggerDelay={0.095}
        distanceOffset={60}
        content={heroSliderConfig.map((config, index) => (
          <InfiniteMoving
            key={index}
            pauseOnHover={false}
            direction={config.direction}
            speed={config.speed}
            images={getImageSlice(config.startIndex, config.count)}
            className={cn(
              '-rotate-[12.5deg] shadow-md grayscale',
            )}
          />
        ))}
      />
    </div>
  );
}

export default HeroSlider;