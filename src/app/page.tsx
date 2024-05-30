import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import Hero from '@/components/Hero/Hero';
import SummaryFacts from '@/components/SummaryFacts/SummaryFacts';

const Home: FC = () => {
  return (
    <HomeLayout isHomePage>
      <Hero />
      <SummaryFacts />
    </HomeLayout>
  );
}

export default Home;