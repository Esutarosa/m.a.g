export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: 'M.A.G',
  description: 'The official website of a musician who creates cool music.',
  navItems: [
    {
      label: 'BIOGRAPHY',
      href: '/biography',
      key: 'biography',
      target: undefined
    },
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