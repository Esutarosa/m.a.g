import {
  useEffect,
  useRef,
  type ComponentProps,
  type FC
} from 'react';

import { ButtonWithLoader } from '@/components/primitives/button';

import { toastSuccess } from '@/components/primitives/toast';

import { useFormStatus } from 'react-dom';

import { cn } from '@/utils/cn';

interface ButtonWithStatusProps extends ComponentProps<typeof ButtonWithLoader> {
  onFormStatusChange?: (pending: boolean) => void;
  onFormSubmitToastMessage?: string;
  onFormSubmit?: () => void;
}

const ButtonWithStatus: FC<ButtonWithStatusProps> = ({
  icon,
  variant,
  spinnerColor,
  onFormStatusChange,
  onFormSubmitToastMessage,
  onFormSubmit,
  children,
  disabled,
  className,
  type = 'button',
  ...rest
}) => {
  const { pending } = useFormStatus();

  const pendingPrevious = useRef(pending);

  useEffect(() => {
    if (!pending && pendingPrevious.current) {
      if (onFormSubmitToastMessage) {
        toastSuccess(onFormSubmitToastMessage);
      }
      onFormSubmit?.();
    }
    pendingPrevious.current = pending;
  }, [pending, onFormSubmitToastMessage, onFormSubmit]);

  useEffect(() => {
    onFormStatusChange?.(pending);
  }, [onFormStatusChange, pending]);

  return (
    <ButtonWithLoader
      {...rest}
      type='submit'
      disabled={disabled}
      icon={icon}
      spinnerColor={spinnerColor}
      isLoading={pending}
      variant={variant}
      className={cn(
        'inline-flex items-center gap-2',
        className
      )}>
      {children}
    </ButtonWithLoader>
  );
}

export default ButtonWithStatus;