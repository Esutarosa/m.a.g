import type { FC } from 'react';
import Spinner from '@/components/Spinner';

const loading: FC = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Spinner />
    </div>
  );
}

export default loading;