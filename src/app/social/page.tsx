import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Social } from '@/components/social';

import { readSocial } from '@/config/actions/social';

const SocialPage: FC = async () => {
  const { data: socialLinks, error } = await readSocial();

  if (error) {
    console.error('Error fetching social links:', error);
    return null;
  }

  return (
    <Layout>
      <Social socialLinks={socialLinks} />
    </Layout>
  );
}

export default SocialPage;