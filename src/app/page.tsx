import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import Hero from '@/components/Hero/Hero';
import Summary from '@/components/Summary/Summary';

const Home: FC = () => {
  return (
    <HomeLayout isHomePage>
      <Hero />
      <Summary />
    </HomeLayout>
  );
}

export default Home;