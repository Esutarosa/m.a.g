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
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        );
        case 'link': return cn(
          'text-primary underline-offset-4 hover:underline',
        );
        default: return cn(
          'bg-primary text-primary-foreground hover:bg-primary/90',
        );
      }
    };

    const sizeForButton = () => {
      switch (size) {
        case 'sm': return cn(
          'h-9 px-3'
        );
        case 'lg': return cn(
          'h-11 px-8'
        );
        default: return cn(
          'h-10 px-4 py-2'
        );
      }
    };

    return (
      <Comp ref={ref} className={cn(
        'inline-flex items-center justify-center',
        'whitespace-nowrap rounded-3xl text-sm transition-colors',
        variantForButton(),
        sizeForButton(),
        className
      )} {...rest} />
    );
  }
)

Button.displayName = 'Button';

export default Button;