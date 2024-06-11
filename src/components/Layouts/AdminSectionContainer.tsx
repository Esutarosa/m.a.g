import { cn } from '@/lib/utils';
import type { FC, PropsWithChildren } from 'react';

interface AdminContainerProps extends PropsWithChildren {
  className?: string
  id?: string
}

const AdminSectionContainer: FC<AdminContainerProps> = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={cn(
        'grid gap-4 sm:pl-[6.5rem] px-6 py-8 sm:py-3',
        className
      )}>
      {children}
    </div>
  );
}

export default AdminSectionContainer;