import type { FC, PropsWithChildren } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface ErrorNoteProps extends PropsWithChildren { className?: string }

const ErrorNote: FC<ErrorNoteProps> = ({ className, children }) => {
  return (
    <div className={cn(
      'w-full flex items-center gap-1 text-destructive text-sm px-3 py-2',
      'border border-destructive bg-destructive/5 rounded-[.375rem]',
      className,
    )}>
      <ExclamationTriangleIcon className='h-5 w-5' />
      {children}
    </div>
  );
}

export default ErrorNote;