import { useContext } from 'react';

import { SocialContext } from '@/components/social';

/**
 * Custom hook to access the social links context.
 *
 * Must be used within a `SocialProvider`.
 *
 * @returns {SocialLink[]} The social links context value.
 * @throws {Error} If used outside of a `SocialProvider`.
 *
 * @example
 * const socialLinks = useSocial();
 */
export const useSocial = () => {
  const context = useContext(SocialContext);
  if (!context) {
    throw new Error('useSocial must be used within a SocialProvider');
  }
  return context.socialLinks;
};