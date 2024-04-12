import type { HTMLAttributeAnchorTarget } from 'react';

export interface FooterConfig {
  text: string;
  link: string;
}

export interface SocialConfig {
  icon: string;
  link: string;
  alt?: string;
}

export type NavigationKeys =
  | 'biography'
  | 'discography'
  | 'blog'
  | 'contact';

export interface NavigationEntry {
  label?: string;
  link?: string;
  items?: Record<string, NavigationEntry>;
  target?: HTMLAttributeAnchorTarget | undefined;
}

export interface SiteNavigation {
  topNavigation: Record<NavigationKeys, NavigationEntry>;
  socialLinks: Array<SocialConfig>;
  sideNavigation: Record<NavigationKeys, NavigationEntry>;
}
