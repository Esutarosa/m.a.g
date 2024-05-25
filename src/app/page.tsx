import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import SectionContainer from '@/components/Layouts/SectionContainer';

const Home: FC = () => {
  return (
    <HomeLayout isHomePage>
      <SectionContainer>
        <div className='bg-muted w-full h-[20rem]'>

        </div>
      </SectionContainer>
    </HomeLayout>
  );
}

export default Home;