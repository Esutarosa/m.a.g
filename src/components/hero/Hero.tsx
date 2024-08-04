import type { FC } from 'react';

import { Container } from '@/components/layouts';

import { HeroContent, HeroSlider } from '@/components/hero';

const Hero: FC = () => {
  return (
    <Container centered={false} padding='loose'>
      <div className='relative h-[85vh] antialiased'>
        <HeroSlider />
        <HeroContent />
      </div>
    </Container>
  );
}

export default Hero;