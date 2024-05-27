import type { FC } from 'react';
import Link from 'next/link';

import SectionContainer from '@/components/Layouts/SectionContainer';
import { footer } from '@/data/Footer';
import RenderSVG from '@/components/RenderSVG';

import { PRESS_START_2P as PressStart2P } from '@/../../next.fonts';

interface FooterProps {
  isHideFooter?: boolean
  isHomePage?: boolean
}

const Footer: FC<FooterProps> = ({ isHideFooter, isHomePage }) => {
  if (isHideFooter) return null;
  return (
    <footer className={`${isHomePage ? PressStart2P.className : ''}`}>
      <SectionContainer className='grid grid-cols-1 gap-8 sm:flex sm:justify-between sm:gap-2 py-12 sm:py-16 md:py-18 lg:py-18'>
        <>
          {footer.map((group, index) => (
            <div key={index} className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:flex'>
              {group.summary.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='flex items-center gap-1 text-xs text-muted-foreground/85 hover:text-foreground transition-colors pr-2'
                >
                  {!isHomePage && (
                    <RenderSVG
                      className='size-4'
                      icon={item.icon}
                    />
                  )} {item.name}
                </Link>
              ))}
            </div>
          ))}
        </>
        <>
          {footer.map((group, index) => (
            <div key={index} className='grid gap-4 xl:flex'>
              {group.develop.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='flex items-center gap-1 text-xs text-muted-foreground/85 hover:text-foreground transition-colors'
                >
                  {!isHomePage && (
                    <RenderSVG
                      className='size-4'
                      icon={item.icon}
                    />
                  )} {item.name}
                </Link>
              ))}
            </div>
          ))}
        </>
      </SectionContainer>
    </footer>
  );
}

export default Footer;