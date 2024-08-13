import type { ComponentProps, FC, ReactNode } from 'react';

import AnimateItems from '@/components/AnimateItems';

import SVG from '@/components/SVG';

import { Container } from '@/components/layouts';

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
                  icon='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z'
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