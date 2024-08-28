import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Social } from '@/components/social';

import { readSocial } from '@/config/actions/social';

import { SocialProvider } from '@/components/social';

import ErrorNote from '@/components/ErrorNote';

const SocialPage: FC = async () => {
  const { data: socialLinks, error } = await readSocial();

  if (error) {
    console.error('Error fetching social links:', error);
    return (
      <Layout>
        <ErrorNote>
          Unable to load social links. Please try again later.
        </ErrorNote>
      </Layout>
    );
  }

  return (
    <Layout>
      <SocialProvider socialLinks={socialLinks}>
        <Social />
      </SocialProvider>
    </Layout>
  );
}

export default SocialPage;