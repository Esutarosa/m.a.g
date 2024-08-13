import type { FC, PropsWithChildren } from 'react';

import { Layout } from '@/components/layouts';

const DiscographyLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default DiscographyLayout;