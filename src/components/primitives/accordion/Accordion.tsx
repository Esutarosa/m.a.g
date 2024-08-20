'use client';

import type { FC, PropsWithChildren } from 'react';

import {
  MotionConfig,
  type Transition,
  type Variant
} from 'framer-motion';

import { AccordionProvider } from '@/components/primitives/accordion';

import { cn } from '@/utils/cn';

interface AccordionProps extends PropsWithChildren {
  className?: string;
  transition?: Transition;
  variants?: {
    expanded: Variant;
    collapsed: Variant;
  };
}

const Accordion: FC<AccordionProps> = ({
  children,
  className,
  transition,
  variants,
}) => {
  return (
    <MotionConfig transition={transition}>
      <div className={cn('relative', className)} aria-orientation='vertical'>
        <AccordionProvider variants={variants}>{children}</AccordionProvider>
      </div>
    </MotionConfig>
  );
}

export default Accordion;