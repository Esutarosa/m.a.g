import type { FC } from 'react';

import HomeLayout from '@/components/Layouts/Home';
import Hero from '@/components/Hero';
import SummaryFacts from '@/components/SummaryFacts';

import { getUser } from '@/config/store/user';

const Home: FC = async () => {
  const { user } = await getUser();

  return (
    <HomeLayout isUserLoggedIn={user} isHomePage>
      <Hero />
      <SummaryFacts />
    </HomeLayout>
  );
}

export default Home;