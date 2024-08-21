'use client';

import {
  useId,
  useMemo,
  useRef,
  useState,
  type FC,
  type PropsWithChildren
} from 'react';

import { MotionConfig, Transition } from 'framer-motion';

import { DialogContext } from '@/components/primitives/dialog';

interface DialogProviderProps extends PropsWithChildren {
  transition?: Transition;
}

const DialogProvider: FC<DialogProviderProps> = ({ children, transition }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(() =>
    ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogContext.Provider>
  );
}

export default DialogProvider;