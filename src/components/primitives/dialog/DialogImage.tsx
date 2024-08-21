import type { CSSProperties, FC } from 'react';

import { useDialog } from '@/hooks/useDialog';

import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';

interface DialogImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

const DialogImage: FC<DialogImageProps> = ({
  src,
  alt,
  className,
  style
}) => {
  const { uniqueId } = useDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    />
  );
}

export default DialogImage;