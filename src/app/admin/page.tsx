import type { FC } from 'react';
import { redirect } from 'next/navigation';

import { getUser } from '@/config/store/user';
import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';

const Admin: FC = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  return (
    <DefaultLayout isHideFooter isHideHeader>
      <SectionContainer>
        Admin Page
        <p>
          {user?.email}
        </p>
      </SectionContainer>
    </DefaultLayout>
  );
}

export default Admin;