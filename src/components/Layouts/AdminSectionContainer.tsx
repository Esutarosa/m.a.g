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
        'ml-28',
        className
      )}>
      {children}
    </div>
  );
}

export default AdminSectionContainer;