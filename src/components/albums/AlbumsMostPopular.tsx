'use client';

import type { FC } from 'react';

import {
  Dialog,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger
} from '@/components/primitives/dialog';

interface AlbumsMostPopularProps { }

const fakeData = [
  {
    src: '/images/1.jpg',
    title: '9966 feat. restoreta',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/2.jpg',
    title: '2322332323233333333',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/3.jpg',
    title: 'Angel333',
    subtitle: 'by M.A.G'
  },
  {
    src: '/images/4.jpg',
    title: 'Crystal Maiden',
    subtitle: 'by M.A.G'
  },
]

const AlbumsMostPopular: FC<AlbumsMostPopularProps> = ({ }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {fakeData.map((album) => (
        <Dialog key={album.title}>
          <DialogTrigger>
            <DialogImage
              src={album.src}
              alt={album.title}
            />
            <div>
              <div>
                <DialogTitle>
                  {album.title}
                </DialogTitle>
                <DialogSubtitle>
                  {album.subtitle}
                </DialogSubtitle>
              </div>
            </div>
          </DialogTrigger>
          <DialogContainer>
            <DialogContent>
              <DialogImage
                src={album.src}
                alt={album.title}
              />
              <div>
                <DialogTitle>
                  {album.title}
                </DialogTitle>
                <DialogSubtitle>
                  {album.subtitle}
                </DialogSubtitle>
                <DialogDescription>
                  <p>{album.title}</p>
                </DialogDescription>
              </div>
            </DialogContent>
          </DialogContainer>
        </Dialog>
      ))}
    </div>
  );
}

export default AlbumsMostPopular;