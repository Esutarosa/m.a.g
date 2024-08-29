import { ADMIN, BLOG, DISC, HOME, SOCIAL } from '@/config/icons';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: 'M.A.G',
  description: 'The official website of a musician who creates cool music.',
  bio: {
    name: 'M.A.G',
    fullName: 'Modernized Android Gyaru',
    shortName: 'Android Gyaru',
    signature: 'Gore and Beauty',
    bio: "One doesn't know where to go but has to move forward. He has to go to his goal. Always transforming himself, his heart and mind drift and run towards the goal when he finds it.",
    ganres: 'Breakcore, DnB, Jungle, House, Ambient and many more artist.'
  },
  navItems: [
    {
      label: 'DISCOGRAPHY',
      href: '/discography',
      key: 'discography',
      target: undefined,
    },
    {
      label: 'SOCIAL MEDIA',
      href: '/social',
      key: 'social',
      target: undefined,
    },
    {
      label: 'MY BLOG',
      href: '/blog',
      key: 'blog',
      target: undefined
    },
  ],
  adminSidebarItems: [
    {
      label: 'Home',
      icon: HOME,
      href: '/',
      key: 'home',
      color: 'primary'
    },
    {
      label: 'Admin',
      icon: ADMIN,
      href: '/admin',
      key: 'admin',
      color: 'secondary'
    },
    {
      label: 'Discography',
      icon: DISC,
      href: '/admin/discography',
      key: 'discography',
      color: 'secondary'
    },
    {
      label: 'Social Media',
      icon: SOCIAL,
      href: '/admin/social',
      key: 'social',
      color: 'secondary'
    },
    {
      label: 'My Blog',
      icon: BLOG,
      href: '/admin/blog',
      key: 'blog',
      color: 'secondary'
    },
  ],
  socials: [
    {
      label: 'CD & ALBUMS',
      href: 'https://modernizedandroidgyaru.bandcamp.com/',
      key: 'bandcamp',
      target: '_blank'
    },
    {
      label: 'TWITTER',
      href: 'https://x.com/AndroidGyaru',
      key: 'twitter',
      target: '_blank'
    },
    {
      label: 'YOUTUBE',
      href: 'https://www.youtube.com/channel/UC7eTzOxim5EE9zQHkfN9UDQ',
      key: 'youtube',
      target: '_blank'
    },
    {
      label: 'SOUNDCLOUD',
      href: 'https://soundcloud.com/modernizedandroidgyaru',
      key: 'soundcloud',
      target: '_blank'
    },
    {
      label: 'SPOTIFY',
      href: 'https://open.spotify.com/artist/1pJKmGIoY0sntC4usnPE6V',
      key: 'spotify',
      target: '_blank'
    },
    {
      label: 'DISCORD',
      href: 'https://discord.gg/qb3pA493b8',
      key: 'discord',
      target: '_blank'
    }
  ],
  dev: [
    {
      label: 'GitHub',
      href: 'https://github.com/Esutarosa/m.a.g',
      key: 'github',
      target: '_blank'
    },
  ]
}