import type { FC, PropsWithChildren } from 'react';

import Note from '@/components/Note';
import SVG from './SVG';

const ErrorNote: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Note
      {...props}
      color='red'
      padding='tight'
      icon={<SVG
        icon='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z'
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