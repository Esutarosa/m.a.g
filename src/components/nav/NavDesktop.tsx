import type { FC } from 'react';

import LinkWithArrow from '@/components/LinkWithArrow';

import AnimateItems from '@/components/AnimateItems';

import { siteConfig } from '@/config/site';

interface NavDesktopProps {
  data: {
    label: string;
    href: string;
    key: string;
    target: string | undefined;
  }[];
}

const NavDesktop: FC<NavDesktopProps> = ({ data }) => {
  return (
    <AnimateItems content={
      <div className='hidden 3xl:flex 2xl:justify-between w-full'>
        <div className='3xl:flex 3xl:gap-3'>
          {data.map((item, index) => (
            <LinkWithArrow
              key={index}
              href={item.href}
              content={item.label}
              target={item.target}
              className='uppercase'
            />
          ))}
        </div>
        <LinkWithArrow
          href={siteConfig.socials[0].href}
          content={siteConfig.socials[0].label}
          target={siteConfig.socials[0].target}
          className='uppercase'
        />
      </div>
    } />
  );
}

export default NavDesktop;