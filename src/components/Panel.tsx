'use client';

import {
  useRef,
  type FC,
  type PropsWithChildren
} from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PanelProps extends PropsWithChildren {
  outerClassName?: string
  innerClassName?: string
  hasActiveOnHover?: boolean
  style?: any
  hasMotion?: boolean
}

const Panel: FC<PanelProps> = ({
  outerClassName,
  innerClassName,
  hasActiveOnHover = false,
  hasMotion = false,
  children,
  style,
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const Component = hasMotion ? motion.div : 'div';

  return (
    <Component
      ref={outerRef}
      className={cn(
        'relative overflow-hidden rounded-xl p-4 shadow-xl flex items-center justify-center',
        'bg-card border border-border transition-all',
        hasActiveOnHover
          ? 'hover:bg-none hover:!border-accent-foreground'
          : '',
        outerClassName
      )}
      {...(hasMotion ? { whileHover: 'hover', animate: 'initial' } : undefined)}
      style={style}
    >
      <div className={cn(
        'relative z-10 w-full h-full rounded-xl bg-card overflow-hidden text-foreground',
        innerClassName
      )}>
        {children}
        <div
          ref={innerRef}
          className='absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20'
        />
      </div>
    </Component>
  );
}

export default Panel;