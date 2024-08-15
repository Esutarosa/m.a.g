import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface PanelProps extends PropsWithChildren {
  hasBorder?: boolean;
  hasActiveOnHover?: boolean;
  hasChildCenter?: boolean;
  relative?: boolean;
  outerClassName?: string;
  innerClassName?: string;
}

const Panel: FC<PanelProps> = ({
  hasBorder = true,
  hasActiveOnHover = false,
  hasChildCenter = false,
  relative = false,
  outerClassName,
  innerClassName,
  children,
}) => {
  return (
    <div className={cn(
      'rounded-xl bg-card transition-colors',
      hasBorder && 'border border-border',
      hasActiveOnHover && 'hover:border-accent-foreground',
      outerClassName
    )}>
      <div className={cn(
        'w-full h-full p-4 overflow-hidden',
        relative && 'relative z-10',
        hasChildCenter && 'flex items-center justify-center',
        innerClassName
      )}>
        {children}
      </div>
    </div>
  );
}

export default Panel;