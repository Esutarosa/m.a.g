import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import type { SpinnerColor } from '@/components/Spinner';

import { Button } from '@/components/primitives/button';

import Spinner from '@/components/Spinner';

import { cn } from '@/utils/cn';

interface ButtonWithLoaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  icon?: ReactNode;
  spinnerColor?: SpinnerColor;
  variant?: 'default' | 'secondary';
  hideTextOnMobile?: boolean;
  confirmText?: string;
  shouldPreventDefault?: boolean;
  primary?: boolean;
}

const ButtonWithLoader: FC<ButtonWithLoaderProps> = ({
  children,
  isLoading,
  icon,
  spinnerColor,
  variant = 'default',
  hideTextOnMobile = true,
  confirmText,
  shouldPreventDefault,
  primary,
  type = 'button',
  onClick,
  disabled,
  className,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      type={type}
      onClick={e => {
        if (shouldPreventDefault) {
          e.preventDefault();
        }
        if (!confirmText || confirm(confirmText)) {
          onClick?.(e);
        }
      }}
      className={cn(
        'inline-flex items-center gap-2 self-start transition-colors whitespace-nowrap',
        isLoading && 'text-muted-foreground/75',
        primary && 'text-primary',
        className,
      )}
      disabled={isLoading || disabled}
      variant={variant}
    >
      {(icon || isLoading) &&
        <span className={cn(
          'inline-flex justify-center'
        )}>
          {isLoading
            ? <Spinner color={spinnerColor} />
            : icon}
        </span>
      }
      {children &&
        <span className={cn(
          hideTextOnMobile && icon !== undefined && 'hidden md:inline-block'
        )}>
          {children}
        </span>
      }
    </Button>
  );
}

export default ButtonWithLoader;