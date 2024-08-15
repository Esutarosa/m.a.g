import type { FC } from 'react';

import SVG from '@/components/SVG';

import { LOADER } from '@/config/icons';

import { cn } from '@/utils/cn';

const SIZE_DEFAULT = 12;

export type SpinnerColor = 'text' | 'dim' | 'light';

interface SpinnerProps {
  size?: number;
  color?: SpinnerColor;
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({
  size = SIZE_DEFAULT,
  color = 'light',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex',
        color === 'light' && 'text-muted-foreground',
        color === 'dim' && 'text-muted-foreground/75',
        className
      )}
      style={{
        width: size,
        height: size,
      }}>
      <SVG
        width={size}
        height={size}
        viewBox={cn('0 0', SIZE_DEFAULT, SIZE_DEFAULT)}
        stroke='currentColor'
        strokeWidth={SIZE_DEFAULT / size * 2}
        pathFill='none'
        icon={LOADER}
        className='animate-rotate-pulse'
      />
    </span>
  );
}

export default Spinner;