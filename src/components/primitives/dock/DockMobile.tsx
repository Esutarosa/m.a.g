'use client';

import { useState, type FC } from 'react';

import type { DockType } from '@/types';

import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';

import { Button } from '@/components/primitives/button';

import SVG from '@/components/SVG';

import { DISC } from '@/config/icons';

import { cn } from '@/utils/cn';

interface DockMobileProps extends DockType {
  className?: string;
}

const DockMobile: FC<DockMobileProps> = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn(
      'relative block md:hidden',
      className
    )}>
      <AnimatePresence>
        {open &&
          <motion.div layoutId='nav' className={cn(
            'absolute bottom-full mb-2',
            'flex flex-col gap-2 inset-x-0',
          )}>
            {items.map((item, idx) =>
              <motion.div
                className='flex items-center justify-center'
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{
                  delay: (items.length - 1 - idx) * 0.05
                }}>
                <Link
                  href={item.href}
                  key={item.title}
                  className={cn(
                    'flex items-center justify-center',
                    'w-12 h-12 rounded-full',
                    'bg-accent hover:bg-accent/80',
                    'transition-colors'
                  )}>
                  {item.icon &&
                    <SVG
                      icon={item.icon}
                      className={cn('h-4 w-4')}
                    />}
                </Link>
              </motion.div>
            )}
          </motion.div>}
      </AnimatePresence>
      <Button variant='secondary' onClick={() => setOpen(!open)} className={cn(
        'flex items-center justify-center',
      )}>
        <SVG
          icon={DISC}
          className={cn(
            'size-5'
          )} />
      </Button>
    </div>
  );
}

export default DockMobile;