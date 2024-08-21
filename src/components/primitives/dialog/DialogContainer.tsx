'use client';

import {
  useEffect,
  useState,
  type CSSProperties,
  type FC,
  type PropsWithChildren
} from 'react';

import { useDialog } from '@/hooks/useDialog';

import { createPortal } from 'react-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { cn } from '@/utils/cn';

interface DialogContainerProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

const DialogContainer: FC<DialogContainerProps> = ({
  children,
  className,
  style
}) => {
  const { isOpen, uniqueId } = useDialog();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial={false} mode='sync'>
      {isOpen &&
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className='fixed inset-0 z-50 h-full w-full bg-background/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={style}
          />
          <div className={cn(
            'fixed inset-0 z-50 flex items-center justify-center',
            className,
          )}>
            {children}
          </div>
        </>}
    </AnimatePresence>,
    document.body
  );
}

export default DialogContainer;