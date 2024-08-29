import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface AdminContainerProps extends PropsWithChildren {
  sectionClassName?: string;
  containerClassName?: string;
  padding?: 'loose' | 'normal' | 'tight';
  grid?: boolean;
}

const AdminContainer: FC<AdminContainerProps> = ({
  children,
  sectionClassName,
  containerClassName,
  padding = 'normal',
  grid = false,
}) => {
  const getPaddingClasses = () => {
    switch (padding) {
      case 'loose': return 'py-16 md:py-24';
      case 'normal': return 'py-4 md:py-8';
      case 'tight': return 'py-1.5';
    }
  };

  return (
    <section className={cn(
      'rounded-md container sm:pl-[6rem]',
      getPaddingClasses(),
      sectionClassName
    )}>
      <div className={cn(
        grid && 'grid gap-4 grid-cols-1 md:grid-cols-2',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}

export default AdminContainer;