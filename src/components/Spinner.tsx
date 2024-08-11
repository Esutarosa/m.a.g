import type { FC } from 'react';

import SVG from '@/components/SVG';

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
        color === 'dim' && 'text-muted-foreground/50',
        className
      )}
      style={{
        width: size,
        height: size,
      }}>
      <SVG
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        stroke='currentColor'
        strokeWidth={SIZE_DEFAULT / size * 2}
        pathFill='none'
        icon='M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11'
        className='animate-rotate-pulse'
      />
    </span>
  );
}

export default Spinner;