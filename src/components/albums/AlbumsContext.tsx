'use client';

import { createContext } from 'react';

import type { AlbumContextType } from '@/types';

const AlbumsContext = createContext<AlbumContextType | undefined>(undefined);

export default AlbumsContext;