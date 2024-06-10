import type { FC } from 'react';
import { cn } from '@/lib/utils';
import RenderSVG from '@/components/RenderSVG';

interface SpinnerProps {
  size?: number
  color?: 'text' | 'dim' | 'light';
  className?: string
}

const Spinner: FC<SpinnerProps> = ({
  size = 12,
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
      }}
    >
      <RenderSVG
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        stroke='currentColor'
        strokeWidth={12 / size * 2}
        pathFill='none'
        icon='M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11'
        className='animate-rotate-pulse'
      />
    </span>
  );
}

export default Spinner;