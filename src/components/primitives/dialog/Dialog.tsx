'use client';

import type { FC, PropsWithChildren } from 'react';

import { MotionConfig, Transition } from 'framer-motion';

import { DialogProvider } from '@/components/primitives/dialog';

interface DialogProps extends PropsWithChildren {
  transition?: Transition;
}

const Dialog: FC<DialogProps> = ({ children, transition }) => {
  return (
    <DialogProvider>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogProvider>
  );
}

export default Dialog;