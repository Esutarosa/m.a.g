import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import Hero from '@/components/Hero';
import SummaryFacts from '@/components/SummaryFacts';

const Home: FC = () => {
  return (
    <HomeLayout isHomePage>
      <Hero />
      <SummaryFacts />
    </HomeLayout>
  );
}

export default Home;