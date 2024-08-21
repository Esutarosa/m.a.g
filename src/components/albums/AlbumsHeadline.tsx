import type { FC } from 'react';

import { GridSite } from '@/components/grid';

import { AlbumsMostPopular, AlbumsContent } from '@/components/albums';

interface AlbumsHeadlineProps { }

const AlbumsHeadline: FC<AlbumsHeadlineProps> = ({ }) => {
  return (
    <GridSite
      contentMain={<AlbumsMostPopular />}
      contentSide={<AlbumsContent />}
    />
  );
}

export default AlbumsHeadline;