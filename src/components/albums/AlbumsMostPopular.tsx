import type { FC } from 'react';

interface AlbumsMostPopularProps { }

const AlbumsMostPopular: FC<AlbumsMostPopularProps> = ({ }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  );
}

export default AlbumsMostPopular;