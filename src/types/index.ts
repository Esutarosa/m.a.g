import type { Dispatch, Key, ReactNode, RefObject, SetStateAction } from 'react';

import type { Variant } from 'framer-motion';

/**
 * Type for any props.
 *
 * @example
 * import type { AnyProps } from '@/types';
 *
 * const component: React.FC<AnyProps> = (props) => {
 *   return <div {...props} />;
 * };
 */
export type AnyProps = Record<string, any>;

/**
 * Context type for Accordion component.
 *
 * @property {Key | null} expandedValue - Key of the currently expanded item.
 * @property {(value: Key) => void} toggleItem - Function to toggle the item state.
 * @property {Object} [variants] - Optional styles for different states.
 * @property {Variant} [variants.expanded] - Style for expanded state.
 * @property {Variant} [variants.collapsed] - Style for collapsed state.
 */
export type AccordionContextType = {
  expandedValue: Key | null;
  toggleItem: (value: Key) => void;
  variants?: {
    expanded: Variant;
    collapsed: Variant;
  };
};

/**
 * Context for dialog state management.
 *
 * @property {boolean} isOpen - Whether the dialog is open.
 * @property {Dispatch<SetStateAction<boolean>>} setIsOpen - Function to toggle the dialog state.
 * @property {string} uniqueId - Unique dialog identifier.
 * @property {RefObject<HTMLDivElement>} triggerRef - Ref to the dialog trigger element.
 */
export type DialogContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: RefObject<HTMLDivElement>;
};

/**
 * Type for a social link.
 *
 * @property {string} platform - The social media platform.
 * @property {string} url - The URL of the social media link.
 * @property {string} [title] - Optional title for the link.
 * @property {string} [subtitle] - Optional subtitle for the link.
 */
export interface SocialLink {
  platform: string;
  url: string;
  title?: string;
  subtitle?: string;
}

/**
 * Context type for managing social links.
 *
 * @property {SocialLink[]} socialLinks - Array of social links.
 */
export type SocialContextType = {
  socialLinks: SocialLink[];
};

/**
 * Type for album item data.
 *
 * @property {string} src - The source URL for the album's image.
 * @property {string} title - The title of the album.
 * @property {string} subtitle - The subtitle of the album.
 * @property {string} youtube - The YouTube link for the album.
 * @property {string} soundcloud - The SoundCloud link for the album.
 * @property {string} spotify - The Spotify link for the album.
 * @property {string} bandcamp - The Bandcamp link for the album.
 * @property {string} description - The description of the album.
 */
export interface AlbumItemData {
  image_src: string;
  title: string;
  subtitle: string;
  youtube: string;
  soundcloud: string;
  spotify: string;
  bandcamp: string;
  description: string;
};

/**
 * Context type for managing album data.
 *
 * @property {AlbumItemData[]} data - Array of album item data.
 */
export type AlbumContextType = {
  albums: AlbumItemData[];
};

/**
 * Type for different field set types.
 *
 * Represents the various input types available in a form.
 *
 * @type {'text' | 'email' | 'password' | 'checkbox' | 'textarea'}
 */
export type FieldSetType =
  'text' |
  'email' |
  'password' |
  'checkbox' |
  'textarea';

/**
 * Type for supported social media platforms.
 *
 * @type {'discord' | 'twitter' | 'instagram' | 'facebook' | 'youtube' | 'bandcamp' | 'steam' | 'spotify' | 'soundcloud'}
 */
export type PlatformType =
  'discord' |
  'twitter' |
  'instagram' |
  'facebook' |
  'youtube' |
  'bandcamp' |
  'steam' |
  'spotify' |
  'soundcloud';

/**
 * Type for spinner color options.
 *
 * @type {'text' | 'dim' | 'light'}
 */
export type SpinnerColor =
  'text' |
  'dim' |
  'light';

/**
 * Type for animation effects.
 *
 * @type {'none' | 'scale' | 'left' | 'right' | 'bottom'}
 */
export type AnimationType =
  'none' |
  'scale' |
  'left' |
  'right' |
  'bottom';

/**
 * Type for dock component.
 *
 * @property {Object[]} items - List of dock items.
 * @property {string} items.title - Title of the dock item.
 * @property {ReactNode} items.icon - Icon for the dock item.
 * @property {string} items.href - URL link for the dock item.
 */
export type DockType = {
  items: {
    title: string;
    icon: ReactNode;
    href: string;
  }[];
};

/**
 * Interface for hiding navigation and footer components.
 *
 * @property {boolean} [isHideNav] - Optional flag to hide the navigation.
 * @property {boolean} [isHideFooter] - Optional flag to hide the footer.
 */
export interface HideNavFooter {
  isHideNav?: boolean;
  isHideFooter?: boolean;
}