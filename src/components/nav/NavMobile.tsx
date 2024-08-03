import type { FC } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/popover';

import AnimateItems from '@/components/AnimateItems';
import LinkWithArrow from '@/components/LinkWithArrow';

import { Bars2Icon } from '@heroicons/react/24/solid';

import { siteConfig } from '@/config/site';

interface NavMobileProps {
  data: {
    label: string;
    href: string;
    key: string;
    target: string | undefined;
  }[];
}

const NavMobile: FC<NavMobileProps> = ({ data }) => {
  return (
    <AnimateItems content={
      <Popover placement='bottom' backdrop='opaque' offset={24}>
        <PopoverTrigger>
          <Bars2Icon className='3xl:hidden cursor-pointer size-6' />
        </PopoverTrigger>
        <PopoverContent className='block w-[220px] bg-background border border-muted rounded-md p-0'>
          <div className='flex flex-col uppercase'>
            <div className='flex flex-col'>
              <strong className='bg-accent p-2 rounded-t-sm text-xs font-bold'>
                Navigation
              </strong>
              {data.map((item, index) =>
                <LinkWithArrow
                  key={index}
                  href={item.href}
                  content={item.label}
                  target={item.target}
                  className='w-full p-2 text-xs'
                />
              )}
            </div>
            <div className='flex flex-col'>
              <strong className='bg-accent p-2 font-bold'>
                Other
              </strong>
              <span className='p-2'>
                <LinkWithArrow
                  href={siteConfig.socials[0].href}
                  content={siteConfig.socials[0].label}
                  target={siteConfig.socials[0].target}
                  className='uppercase group-hover/link:bg-transparent'
                />
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    } />
  );
}

export default NavMobile;