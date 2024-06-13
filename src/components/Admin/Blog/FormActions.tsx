import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import RenderSVG from '@/components/RenderSVG';

interface FormActionsProps { isValid: boolean; }

const FormActions: FC<FormActionsProps> = ({ isValid }) => {
  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='default'
        className='flex items-center gap-2'
        disabled={!isValid}
      >
        <RenderSVG
          icon='M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z'
          className='size-4'
        />
        Save
      </Button>
      <Button
        variant='destructive'
        size='icon'
        className='flex items-center gap-2'
      >
        <RenderSVG
          icon='M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z'
          className='size-4'
        />
      </Button>
    </div>
  );
}

export default FormActions;