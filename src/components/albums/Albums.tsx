import type { FC } from 'react';

import { Container } from '@/components/layouts';

import { AlbumsHeadline } from '@/components/albums';

interface AlbumsProps { }

const Albums: FC<AlbumsProps> = ({ }) => {
  return (
    <Container padding='loose' centered={false}>
      <AlbumsHeadline />
    </Container>
  );
}

export default Albums;