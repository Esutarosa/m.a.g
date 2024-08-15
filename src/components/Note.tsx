import type { ComponentProps, FC, ReactNode } from 'react';

import AnimateItems from '@/components/AnimateItems';

import SVG from '@/components/SVG';

import { Container } from '@/components/layouts';

import { INFORMATION } from '@/config/icons';

import { cn } from '@/utils/cn';

interface NoteProps extends ComponentProps<typeof Container> {
  icon?: ReactNode;
  animate?: boolean;
  cta?: ReactNode;
  hideIcon?: boolean;
}

const Note: FC<NoteProps> = ({
  icon,
  animate,
  cta,
  hideIcon,
  color = 'accent',
  padding,
  children,
  ...rest
}) => {
  return (
    <AnimateItems
      type={animate ? 'bottom' : 'none'}
      content={
        <Container
          {...rest}
          key='Banner'
          color={color}
          padding={padding ?? (cta ? 'normal' : 'tight')}
        >
          <div className={cn(
            'flex items-center w-full gap-2.5'
          )}>
            {!hideIcon &&
              <span className={cn(
                'w-5 flex justify-center shrink-0',
                'opacity-90',
              )}>
                {icon ?? <SVG
                  icon={INFORMATION}
                  width={19}
                  height={19}
                  className='translate-x-[0.5px] translate-y-[0.5px]'
                />}
              </span>}
            <span className={cn('text-sm grow')}>
              {children}
            </span>
            {cta &&
              <span>
                {cta}
              </span>}
          </div>
        </Container>}
      animateOnFirstLoadOnly
    />
  );
}

export default Note;