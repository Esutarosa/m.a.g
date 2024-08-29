import { useContext } from 'react';

import { AlbumsContext } from '@/components/albums';

/**
 * Custom hook to access the albums context.
 *
 * Must be used within a `AlbumsProvider`.
 *
 * @returns {AlbumItemData[]} The albums context value.
 * @throws {Error} If used outside of a `AlbumsProvider`.
 *
 * @example
 * const albums = useAlbums();
 */
export const useAlbums = () => {
  const context = useContext(AlbumsContext);
  if (!context) {
    throw new Error('useAlbums must be used within a AlbumsProvider');
  }
  return context.albums;
};

