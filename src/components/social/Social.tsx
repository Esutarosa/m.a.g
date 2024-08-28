import type { FC } from 'react';

import { Container } from '@/components/layouts';

import { SocialContent, SocialSide } from '@/components/social';

import { GridSite } from '@/components/grid';

interface SocialProps {
  socialLinks: Array<{
    platform: string;
    url: string
  }>;
}

const Social: FC<SocialProps> = ({ socialLinks }) => {
  return (
    <Container padding='loose' centered={false}>
      <GridSite
        contentMain={<SocialContent socialLinks={socialLinks} />}
        contentSide={<SocialSide />}
      />
    </Container>
  );
}

export default Social;