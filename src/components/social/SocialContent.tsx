'use client';

import type { FC, ReactNode } from 'react';

import AnimateItems from '@/components/AnimateItems';

import SVG from '@/components/SVG';

import {
  BANDCAMP,
  DISCORD,
  FACEBOOK,
  INSTAGRAM,
  SOUNDCLOUD,
  SPOTIFY,
  STEAM,
  TWITTER,
  YOUTUBE
} from '@/config/icons';

import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import Panel from '@/components/Panel';

import Link from 'next/link';

import { cn } from '@/utils/cn';


type Platform =
  'discord' |
  'twitter' |
  'instagram' |
  'facebook' |
  'youtube' |
  'bandcamp' |
  'steam' |
  'spotify' |
  'soundcloud';

interface SocialContentProps {
  socialLinks: Array<{
    platform: string;
    url: any;
    description?: string;
  }>;
}

const SocialContent: FC<SocialContentProps> = ({ socialLinks }) => {
  const iconMap: Record<Platform, ReactNode> = {
    discord: DISCORD,
    twitter: TWITTER,
    instagram: INSTAGRAM,
    facebook: FACEBOOK,
    youtube: YOUTUBE,
    bandcamp: BANDCAMP,
    steam: STEAM,
    spotify: SPOTIFY,
    soundcloud: SOUNDCLOUD,
  };

  const getIcon = (platform: string) => {
    const normalizedPlatform = platform.toLowerCase() as Platform;

    const iconProps = normalizedPlatform === 'bandcamp' && {
      pathFill: 'none',
      stroke: 'currentColor',
    };

    return <SVG
      className='size-6'
      icon={iconMap[normalizedPlatform]}
      {...iconProps}
    />;
  };

  return (
    <AnimateItems
      className='grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden'
      content={socialLinks.map(({ platform, url, description }) => (
        <Link href={url} target='_blank' className='group/link relative w-full text-sm'>
          <Panel outerClassName='bg-primary text-card' innerClassName='group'>
            <div className='flex gap-2'>
              {getIcon(platform)}
              <div className='flex'>
                <span className={cn(
                  'group group-hover/link:text-card/75 group-hover/link:decoration-card',
                  'underline decoration-dotted dotted-underline decoration-foreground/30 underline-offset-4',
                  'transition-colors',
                )}>
                  {description}
                </span>
                <span className={cn(
                  'relative w-2 h-2 ml-[.025rem] overflow-hidden flex items-center justify-center text-primary transition-colors',
                )}>
                  <ArrowUpRightIcon className='absolute text-card w-2 h-2 inset-0 sm:transition-transform sm:translate-x-0 sm:translate-y-0 sm:group-hover/link:translate-x-6 group-hover/link:-translate-y-6' />
                  <ArrowUpRightIcon className='absolute text-card w-2 h-2 inset-0 sm:transition-transform sm:-translate-x-6 sm:translate-y-6 sm:group-hover/link:translate-x-0 group-hover/link:-translate-y-0' />
                </span>
              </div>
            </div>
          </Panel>
        </Link>
      ))} />
  );
};

export default SocialContent;