import type { FC, PropsWithChildren } from 'react';

import Note from '@/components/Note';

import SVG from '@/components/SVG';

import { ERROR_WARNING } from '@/config/icons';

const ErrorNote: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Note
      {...props}
      color='red'
      padding='tight'
      icon={<SVG
        icon={ERROR_WARNING}
        width={19}
        height={19}
        className='translate-x-[0.5px] translate-y-[0.5px]'
      />}
    >
      {children}
    </Note>
  );
}

export default ErrorNote;