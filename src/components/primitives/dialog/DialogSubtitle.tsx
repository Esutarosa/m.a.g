import type { CSSProperties, FC, PropsWithChildren } from 'react';

import { useDialog } from '@/hooks/useDialog';

import { motion } from 'framer-motion';

interface DialogSubtitleProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

const DialogSubtitle: FC<DialogSubtitleProps> = ({
  children,
  className,
  style
}) => {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default DialogSubtitle;