import type { FC } from 'react';

import type { HideNavFooter } from '@/types/HideNavFooter';

import InfiniteMoving from '@/components/InfiniteMoving';
import LinkWithArrow from '@/components/LinkWithArrow';

import { Container } from '@/components/layouts';

import { siteConfig } from '@/config/site';
import packageJson from '@/../package.json';

import { cn } from '@/utils/cn';

interface FooterProps extends HideNavFooter { }

const Footer: FC<FooterProps> = ({ isHideFooter }) => {
  return (
    <footer className={cn(
      'flex flex-col items-center w-full bg-accent/45 text-foreground',
      isHideFooter && 'hidden'
    )}>
      <Container centered={false} containerClassName='grid grid-cols-12 gap-3'>
        <div className='flex-col space-y-2 col-start-1 col-end-13 caption lg:col-start-1 lg:col-end-6'>
          <span className='flex flex-row space-x-2 align-middle'>
            <p className='self-center w-min px-2 pt-1 pb-[2px] lowercase text-primary border-primary border border-solid rounded-full'>
              v{packageJson.version}
            </p>
            <p className='self-center px-2 pt-1 pb-[2px] text-sm uppercase text-zinc-600'>
              latest version
            </p>
          </span>
        </div>
        <nav className='flex flex-col space-y-1 col-start-1 col-end-13 lg:col-start-7 lg:col-end-9'>
          {siteConfig.socials.slice(1, 4).map((social, index) => (
            <p className='flex gap-4' key={index}>
              <LinkWithArrow
                href={social.href}
                content={social.label}
                target={social.target}
              />
            </p>
          ))}
        </nav>
        <div className='flex flex-col space-y-1 col-start-1 col-end-13 lg:col-start-9'>
          <p className='text-xs text-foreground/70'>All rights reserved</p>
          <span className='flex flex-row'>
            <LinkWithArrow
              href={siteConfig.dev[0].href}
              content={siteConfig.dev[0].label}
              target={siteConfig.dev[0].target}
              className='text-xs'
              muted
            />
          </span>
        </div>
      </Container>
      <InfiniteMoving
        speed='320'
        pauseOnHover={false}
        className='text-foreground/20 hover:text-primary/70 text-xs'
        items={[
          '_▞▚▞▚▞▚▞_',
          'ANDROID GYARU',
          '_▞▚▞▚▞▚▞_',
          'COPYRIGHT 2024',
          '_▞▚▞▚▞▚▞_',
          'M.A.G',
          '_▞▚▞▚▞▚▞_',
          'COPYRIGHT 2024',
          '_▞▚▞▚▞▚▞_',
          'ANDROID GYARU',
          '_▞▚▞▚▞▚▞_',
          'COPYRIGHT 2024',
          '_▞▚▞▚▞▚▞_',
          'M.A.G',
          '_▞▚▞▚▞▚▞_',
          'COPYRIGHT 2024',
        ]}
      />
    </footer>
  );
}

export default Footer;