import type { FC } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';

import { getUser } from '@/config/store/user';

const Discography: FC = async () => {
  const { user } = await getUser();
  return (
    <DefaultLayout isUserLoggedIn={user}>
      <SectionContainer>

      </SectionContainer>
    </DefaultLayout>
  );
}

export default Discography;