import type { FC } from 'react';

import { GridSite } from '@/components/grid';

import { AlbumsItem, AlbumsContent } from '@/components/albums';

const data = [
  {
    src: '/images/1.jpg',
    title: '9966 feat. restoreta',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
  {
    src: '/images/17.jpg',
    title: 'Sanity',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
  {
    src: '/images/9.jpg',
    title: 'Insomnia',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
  {
    src: '/images/3.jpg',
    title: 'Insomnia',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
  {
    src: '/images/20.jpg',
    title: 'Insomnia',
    subtitle: 'by M.A.G',
    youtube: '/1',
    soundcloud: '/2',
    spotify: '/3',
    bandcamp: '/4',
  },
]

interface AlbumsHeadlineProps { }

const AlbumsHeadline: FC<AlbumsHeadlineProps> = ({ }) => {
  return (
    <GridSite
      sideFirstOnMobile
      contentMain={<AlbumsItem data={data} />}
      contentSide={<AlbumsContent />}
    />
  );
}

export default AlbumsHeadline;