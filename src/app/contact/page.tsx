import type { FC } from 'react';

import DefaultLayout from '@/components/Layouts/Default';
import SectionContainer from '@/components/Layouts/SectionContainer';

import { getUser } from '@/config/store/user';
import { readContact } from '@/config/actions/contact';

const Contact: FC = async () => {
  const { user } = await getUser();
  const { data: contacts } = await readContact();
  return (
    <DefaultLayout isUserLoggedIn={user}>
      <SectionContainer>
<<<<<<< Updated upstream

=======
        <h1 className='h1'>Contact</h1>
        <p className='p'>Contact me if you have any questions or suggestions.</p>
        <div className='my-4 md:my-8'>
          {contacts?.map((contact, i) => (
            <div key={i}>
              <h3 className='h3'>{contact.title}</h3>
              <p className='p'>{contact.link}</p>
            </div>
          ))}
        </div>
>>>>>>> Stashed changes
      </SectionContainer>
    </DefaultLayout>
  );
}

export default Contact;