import type { CSSProperties, FC, PropsWithChildren } from 'react';

import { useDialog } from '@/hooks/useDialog';

import { motion } from 'framer-motion';

interface DialogTitleProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

const DialogTitle: FC<DialogTitleProps> = ({
  children,
  className,
  style
}) => {
  const { uniqueId } = useDialog();
  return (
    <motion.div
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  );
}

export default DialogTitle;