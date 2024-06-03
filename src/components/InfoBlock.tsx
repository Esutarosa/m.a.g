import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface InfoBlockProps extends PropsWithChildren {
  className?: string;
  color?: 'card' | 'blur';
  padding?: 'loose' | 'normal' | 'tight';
  centered?: boolean;
}

const InfoBlock: FC<InfoBlockProps> = ({
  className,
  color = 'card',
  padding = 'normal',
  centered = true,
  children
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'card': return 'bg-card text-card-foreground';
      case 'blur': return 'bg-background/95 text-muted-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60';
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
      'flex flex-col items-center justify-center rounded-xl border shadow-lg',
      getColorClasses(),
      getPaddingClasses(),
      className,
    )}>
      <div className={cn(
        'flex flex-col justify-center w-full space-x-4',
        centered && 'items-center',
      )}>
        {children}
      </div>
    </div>
  );
}

export default InfoBlock;