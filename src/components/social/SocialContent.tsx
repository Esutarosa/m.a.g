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
    title?: string;
    subtitle?: string;
    platform: string;
    url: string;
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
      className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4 overflow-hidden'
      content={socialLinks.map(({ platform, url, title, subtitle }) =>
        <Link href={url} target='_blank' className='group/link relative w-full'>
          <Panel
            outerClassName='relative'
            innerClassName='group p-0 md:p-0 !p-2 !px-4'
          >
            <div className='absolute top-2 right-2'>
              <div className={cn(
                'relative w-2 h-2 overflow-hidden flex items-center justify-center text-primary transition-colors',
              )}>
                <ArrowUpRightIcon className='absolute w-2 h-2 inset-0 sm:transition-transform sm:translate-x-0 sm:translate-y-0 sm:group-hover/link:translate-x-6 group-hover/link:-translate-y-6' />
                <ArrowUpRightIcon className='absolute w-2 h-2 inset-0 sm:transition-transform sm:-translate-x-6 sm:translate-y-6 sm:group-hover/link:translate-x-0 group-hover/link:-translate-y-0' />
              </div>
            </div>
            <div className='flex items-center gap-2'>
              {getIcon(platform)}
              <div className='flex flex-col flex-1 min-w-0'>
                <span className='text-sm text-ellipsis'>
                  {title}
                </span>
                <small className='leading-3 text-[11px] text-muted-foreground line-clamp-1 overflow-hidden text-ellipsis'>
                  @{subtitle}
                </small>
              </div>
            </div>
          </Panel>
        </Link>
      )}
    />
  );
};

export default SocialContent;