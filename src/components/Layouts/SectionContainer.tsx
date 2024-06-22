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
        'container relative mx-auto px-6 py-8 md:py-12 lg:px-16 xl:px-20',
        className)}
    >
      {children}
    </div>
  );
}

export default SectionContainer;