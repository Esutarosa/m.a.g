import type { FC } from 'react';

import { GridSite } from '@/components/grid';

import { AlbumsItem, AlbumsContent } from '@/components/albums';

const AlbumsHeadline: FC = () => {
  return (
    <GridSite
      sideFirstOnMobile
      contentMain={<AlbumsItem />}
      contentSide={<AlbumsContent />}
    />
  );
}

export default AlbumsHeadline;