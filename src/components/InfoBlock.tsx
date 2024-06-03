import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface InfoBlockProps extends PropsWithChildren {
  className?: string;
  color?: 'primary' | 'secondary';
  padding?: 'loose' | 'normal' | 'tight';
  centered?: boolean;
}

const InfoBlock: FC<InfoBlockProps> = ({
  className,
  color = 'primary',
  padding = 'normal',
  centered = true,
  children
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'primary': return 'bg-primary text-primary-foreground border border-primary';
      case 'secondary': return 'bg-secondary text-secondary-foreground border border-secondary';
    }
  }

  const getPaddingClasses = () => {
    switch (padding) {
      case 'loose': return 'p-4 md:p-24';
      case 'normal': return 'p-4 md:p-8';
      case 'tight': return 'py-2 px-3';
    }
  }

  return (
    <div className={cn(
      'flex flex-col items-center justify-center rounded-lg border',
      getColorClasses(),
      getPaddingClasses(),
      className,
    )}>
      <div className={cn(
        'flex flex-col justify-center w-full space-x-4',
        centered ? 'items-center' : 'items-start',
      )}>
        {children}
      </div>
    </div>
  );
}

export default InfoBlock;