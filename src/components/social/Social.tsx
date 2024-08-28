import type { FC } from 'react';

import { Container } from '@/components/layouts';

import { SocialContent, SocialSide } from '@/components/social';

import { GridSite } from '@/components/grid';

const Social: FC = () => {
  return (
    <Container padding='loose' centered={false}>
      <GridSite
        sideFirstOnMobile
        contentMain={<SocialContent />}
        contentSide={<SocialSide />}
      />
    </Container>
  );
}

export default Social;