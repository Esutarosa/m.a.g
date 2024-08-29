import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Albums, AlbumsProvider } from '@/components/albums';

import { readDiscography } from '@/config/actions/discography';

import ErrorNote from '@/components/ErrorNote';

const DiscographyPage: FC = async () => {
  const { data: albums, error } = await readDiscography();

  if (error) {
    console.error('Error fetching discography:', error);
    return (
      <Layout>
        <ErrorNote>
          Unable to load discography. Please try again later.
        </ErrorNote>
      </Layout>
    );
  }

  return (
    <Layout>
      <AlbumsProvider albums={albums}>
        <Albums />
      </AlbumsProvider>
    </Layout>
  );
}

export default DiscographyPage;