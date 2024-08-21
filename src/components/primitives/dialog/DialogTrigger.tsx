'use client';

import {
  KeyboardEvent,
  useCallback,
  type CSSProperties,
  type FC,
  type PropsWithChildren,
  type RefObject
} from 'react';

import { useDialog } from '@/hooks/useDialog';

import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';

interface DialogTriggerProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  triggerRef?: RefObject<HTMLDivElement>;
}

const DialogTrigger: FC<DialogTriggerProps> = ({
  children,
  className,
  style,
  triggerRef,
}) => {
  const { setIsOpen, isOpen, uniqueId } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    }, [isOpen, setIsOpen]
  );

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('relative cursor-pointer', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      role='button'
      aria-haspopup='dialog'
      aria-expanded={isOpen}
      aria-controls={`dialog-content-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

export default DialogTrigger;