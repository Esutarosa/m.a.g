'use client';

import type { FC } from 'react';

import type { IDock } from '@/interfaces/IDock';

import { motion, useMotionValue } from 'framer-motion';

import { DockIconBlock } from '@/components/primitives/dock';

import { cn } from '@/utils/cn';

interface DockDesktopProps extends IDock {
  className?: string;
}

const DockDesktop: FC<DockDesktopProps> = ({
  items,
  className,
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) =>
        mouseX.set(e.pageX)}
      onMouseLeave={() =>
        mouseX.set(Infinity)}
      className={cn(
        'mx-auto hidden md:flex',
        'h-16 gap-4 rounded-2xl',
        'items-end px-4 pb-3 bg-accent/45',
        className
      )}>
      {items.map((item) =>
        <DockIconBlock
          mouseX={mouseX}
          key={item.title}
          {...item} />
      )}
    </motion.div>
  );
}

export default DockDesktop;