import {
  forwardRef,
  type ButtonHTMLAttributes,
} from 'react';

import { Slot } from '@/components/primitives/slot';

import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: string;
  size?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const variantForButton = () => {
      switch (variant) {
        case 'secondary': return cn(
          'bg-card border-b border-foreground rounded-sm',
        );
        case 'link': return cn(
          'text-foreground underline-offset-4 hover:underline',
        );
        case 'icon': return cn(
          'bg-card text-foreground hover:text-muted'
        );
        default: return cn(
          'bg-card',
          'hover:border-muted hover:transparent hover:transition',
          'sm:border-b sm:border-card sm:hover:border-foreground sm:rounded-sm'
        );
      }
    };

    const sizeForButton = () => {
      switch (size) {
        case 'sm': return cn(
          'h-9 rounded-md px-3'
        );
        case 'lg': return cn(
          'h-11 rounded-md px-8'
        );
        case 'icon': return cn(
          'w-20 h-20'
        );
        default: return cn(
          'h-10 px-4 py-2'
        );
      }
    };

    return (
      <Comp ref={ref} className={cn(
        'inline-flex items-center justify-center',
        'whitespace-nowrap rounded-md text-sm transition-colors',
        variantForButton(),
        sizeForButton(),
        className
      )} {...rest} />
    );
  }
)

Button.displayName = 'Button';

export default Button;