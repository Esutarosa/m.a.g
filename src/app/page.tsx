import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import SectionContainer from '@/components/Layouts/SectionContainer';

const Home: FC = () => {
  return (
    <HomeLayout isHomePage>
      <SectionContainer>

      </SectionContainer>
    </HomeLayout>
  );
}

export default Home;