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
      label: 'BandCamp',
      href: 'https://modernizedandroidgyaru.bandcamp.com/',
      key: 'bandcamp',
      target: '_blank'
    },
  ]
}