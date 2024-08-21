'use client';

import {
  useCallback,
  type FC,
  type PropsWithChildren
} from 'react';

import { Variant } from 'framer-motion';

import { useDialog } from '@/hooks/useDialog';

import { motion } from 'framer-motion';

import SVG from '@/components/SVG';

import { CLOSE } from '@/config/icons';

import { cn } from '@/utils/cn';

interface DialogCloseProps extends PropsWithChildren {
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
}

const DialogClose: FC<DialogCloseProps> = ({
  children,
  className,
  variants
}) => {
  const { setIsOpen, uniqueId } = useDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <motion.button
      onClick={handleClose}
      type='button'
      aria-label='Close dialog'
      key={`dialog-close-${uniqueId}`}
      className={cn('absolute right-6 top-6', className)}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants}
    >
      {children || <SVG icon={CLOSE} className={cn('size-6')} />}
    </motion.button>
  );
}

export default DialogClose;