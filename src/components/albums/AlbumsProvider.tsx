'use client';

import type { FC, PropsWithChildren } from 'react';

import type { AlbumContextType } from '@/types';

import { AlbumsContext } from '@/components/albums';

interface AlbumsProviderProps extends PropsWithChildren<AlbumContextType> { }

const AlbumsProvider: FC<AlbumsProviderProps> = ({ children, albums }) => (
  <AlbumsContext.Provider value={{ albums }}>
    {children}
  </AlbumsContext.Provider>
);

export default AlbumsProvider;