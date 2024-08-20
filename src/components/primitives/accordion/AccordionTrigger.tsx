import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface AccordionTriggerProps extends PropsWithChildren {
  className?: string;
  onToggle?: () => void;
  expanded?: boolean;
}

const AccordionTrigger: FC<AccordionTriggerProps> = ({
  children,
  className,
  onToggle,
  expanded,
}) => {
  return (
    <button
      onClick={onToggle}
      aria-expanded={expanded}
      type='button'
      className={cn('group', className)}
      {...(expanded ? { 'data-expanded': '' } : {})}
    >
      {children}
    </button>
  );
}

export default AccordionTrigger;