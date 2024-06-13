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
    </div>
  );
}

export default FormActions;