import type { FC, PropsWithChildren } from 'react';

import { motion, Variant } from 'framer-motion';

import { useDialog } from '@/hooks/useDialog';

interface DialogDescriptionProps extends PropsWithChildren {
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
}

const DialogDescription: FC<DialogDescriptionProps> = ({
  children,
  className,
  variants,
  disableLayoutAnimation,
}) => {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={
        disableLayoutAnimation
          ? undefined
          : `dialog-description-content-${uniqueId}`}
      variants={variants}
      className={className}
      initial='initial'
      animate='animate'
      exit='exit'
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

export default DialogDescription;