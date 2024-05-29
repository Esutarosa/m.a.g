import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import Hero from '@/components/Hero/Hero';

const Home: FC = () => {
  return (
    <HomeLayout isHomePage>
      <Hero />
    </HomeLayout>
  );
}

export default Home;