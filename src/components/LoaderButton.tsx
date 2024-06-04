import type { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode } from 'react';
import { SpinnerColor } from '@/types';
import { cn } from '@/lib/utils';
import Spinner from '@/components/Spinner';

interface LoaderButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  isLoading?: boolean
  icon?: ReactNode
  spinnerColor?: SpinnerColor
  styleAs?: 'button' | 'link' | 'link-without-hover'
  hideTextOnMobile?: boolean
  shouldPreventDefault?: boolean
}

const LoaderButton: FC<LoaderButtonProps> = ({
  isLoading,
  icon,
  spinnerColor,
  styleAs = 'button',
  hideTextOnMobile = true,
  shouldPreventDefault,
  type = 'button',
  onClick,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={(e) => {
        if (shouldPreventDefault) { e.preventDefault(); }
        onClick?.(e);
      }}
      className={cn(
        ...(styleAs !== 'button'
          ? ['h-4 active:text-foreground/50 disabled:!bg-transparent']
          : ['h-9']),
        styleAs === 'link' && 'hover:text-muted-foreground/75',
        styleAs === 'link-without-hover' && 'text-muted',
        'inline-flex items-center gap-2 self-start transition',
        className,
      )}
      disabled={disabled || isLoading}
    >
      {(icon || isLoading) && (
        <span
          className={cn(
            'min-w-[1.25rem] h-4',
            styleAs === 'button' ? 'w-4' : 'w-1.5',
            'inline-flex justify-center'
          )}>
          {isLoading ? (
            <Spinner
              size={14}
              color={spinnerColor}
              className={cn(
                styleAs === 'button' ? 'w-4' : 'w-1.5',
              )}
            />
          ) : icon}
        </span>
      )}
      {children && (
        <span
          className={cn(
            styleAs === 'button' && isLoading && 'text-muted-foreground',
            hideTextOnMobile && icon !== undefined && 'hidden sm:inline-block',
          )}>
          {children}
        </span>
      )}
    </button>
  );
}

export default LoaderButton;