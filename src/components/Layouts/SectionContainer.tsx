import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  className?: string
  id?: string
}

const SectionContainer: FC<PropsWithChildren<SectionContainerProps>> = ({
  children,
  className,
  id
}) => {
  return (
    <div
      id={id}
      className={cn(
        'sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20',
        className)}
    >
      {children}
    </div>
  );
}

export default SectionContainer;