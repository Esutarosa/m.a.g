import type { FC } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';

import { getUser } from '@/config/store/user';

const Contact: FC = async () => {
  const { user } = await getUser();
  return (
    <DefaultLayout isUserLoggedIn={user}>
      <SectionContainer>
        <h1 className='h1'>Contact</h1>
        <p className='p'>Contact me if you have any questions or suggestions.</p>
        <div className='my-4 md:my-8'>

        </div>
      </SectionContainer>
    </DefaultLayout>
  );
}

export default Contact;