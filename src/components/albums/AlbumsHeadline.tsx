import type { FC } from 'react';

import { GridSite } from '@/components/grid';

import { AlbumsItem, AlbumsContent } from '@/components/albums';

interface AlbumsHeadlineProps { }

const AlbumsHeadline: FC<AlbumsHeadlineProps> = ({ }) => {
  return (
    <GridSite
      sideFirstOnMobile
      contentMain={<AlbumsItem />}
      contentSide={<AlbumsContent />}
    />
  );
}

export default AlbumsHeadline;