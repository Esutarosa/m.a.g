import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Albums } from '@/components/albums';

const DiscographyPage: FC = () => {
  return (
    <Layout>
      <Albums />
    </Layout>
  );
}

export default DiscographyPage;