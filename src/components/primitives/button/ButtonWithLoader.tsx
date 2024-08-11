import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import type { SpinnerColor } from '@/components/Spinner';
import { cn } from '@/utils/cn';
import Spinner from '@/components/Spinner';

interface ButtonWithLoaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  icon?: ReactNode;
  spinnerColor?: SpinnerColor;
  styleAs?: 'button' | 'link' | 'link-without-hover';
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
  styleAs = 'button',
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
    <button
      {...rest}
      type={type}
      onClick={e => {
        if (shouldPreventDefault) { e.preventDefault(); }
        if (!confirmText || confirm(confirmText)) {
          onClick?.(e);
        }
      }}
      className={cn(
        ...(styleAs !== 'button'
          ? [
            'h-4',
            'disabled:!bg-transparent',
          ]
          : ['h-9']
        ),
        styleAs === 'link' && 'hover:text-foreground',
        'inline-flex items-center gap-2 self-start whitespace-nowrap',
        primary && 'text-primary',
        className,
      )}
      disabled={isLoading || disabled}
    >
      {(icon || isLoading) &&
        <span className={cn(
          'min-w-[1.25rem] max-h-5 overflow-hidden',
          styleAs === 'button' ? 'translate-y-[-0.5px]' : 'translate-y-[0.5px]',
          'inline-flex justify-center shrink-0',
        )}>
          {isLoading
            ? <Spinner
              size={14}
              color={spinnerColor}
              className='translate-y-[0.5px]'
            />
            : icon}
        </span>}
      {children && <span className={cn(
        styleAs !== 'button' && isLoading && 'text-muted-foreground',
        hideTextOnMobile && icon !== undefined && 'hidden sm:inline-block',
      )}>
        {children}
      </span>}
    </button>
  );
}

export default ButtonWithLoader;