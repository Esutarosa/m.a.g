'use client';

import type { ComponentProps, FC } from 'react';
import { useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';

import LoaderButton from '@/components/LoaderButton';
import { cn } from '@/lib/utils';

interface SubmitButtonWithStatusProps extends ComponentProps<typeof LoaderButton> {
  onFormStatusChange?: (pending: boolean) => void;
  onFormSubmitToastMessage?: string;
  onFormSubmit?: () => void;
  primary?: boolean;
}

const SubmitButtonWithStatus: FC<SubmitButtonWithStatusProps> = ({
  icon,
  styleAs,
  spinnerColor,
  onFormStatusChange,
  onFormSubmitToastMessage,
  onFormSubmit,
  children,
  disabled,
  className,
  primary,
  formAction,
  type: _type,
  ...props
}) => {
  const { pending } = useFormStatus();
  const pendingPrevious = useRef(pending);

  useEffect(() => {
    if (!pending && pendingPrevious.current) {
      onFormSubmit?.();
    }
    pendingPrevious.current = pending;
  }, [pending, onFormSubmitToastMessage, onFormSubmit]);

  useEffect(() => {
    onFormStatusChange?.(pending);
  }, [onFormStatusChange, pending]);

  return (
    <LoaderButton
      type='submit'
      disabled={disabled}
      isLoading={pending}
      icon={icon}
      spinnerColor={spinnerColor}
      styleAs={styleAs}
      formAction={formAction}
      className={cn(
        'p-4 rounded-[.25rem] cursor-pointer inline-flex items-center gap-2',
        primary
          ? 'bg-primary text-background hover:bg-primary/85'
          : 'border border-border hover:bg-accent/50 hover:text-accent-foreground',
        className
      )}
      {...props}
    >
      {children}
    </LoaderButton>
  );
}

export default SubmitButtonWithStatus;