'use client';

import type { FC } from 'react';

import type { DockType } from '@/types';

import { DockDesktop, DockMobile } from '@/components/primitives/dock';

interface DockProps extends DockType {
  desktopClassName?: string;
  mobileClassName?: string;
}

const Dock: FC<DockProps> = ({
  items,
  desktopClassName,
  mobileClassName,
}) => {
  return (
    <>
      <DockDesktop items={items} className={desktopClassName} />
      <DockMobile items={items} className={mobileClassName} />
    </>
  );
}

export default Dock;