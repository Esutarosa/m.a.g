import BandCamp from "@/components/Icons/Social/BandCamp";
import SoundCloud from "@/components/Icons/Social/SoundCloud";
import Spotify from "@/components/Icons/Social/Spotify";
import Twitter from "@/components/Icons/Social/Twitter";

const className = 'w-10 h-10';

export const MOBILE_SOCIAL = [
  {
    key: 'twitter',
    href: 'https://twitter.com/AndroidGyaru',
    label: 'Twitter',
    icon: <Twitter className='w-8 h-8' />,
  },
  {
    key: 'bandcamp',
    href: 'https://modernizedandroidgyaru.bandcamp.com/',
    label: 'BandCamp',
    icon: <BandCamp className={className} />,
  },
  {
    key: 'spotify',
    href: 'https://open.spotify.com/artist/1pJKmGIoY0sntC4usnPE6V',
    label: 'Spotify',
    icon: <Spotify className={className} />,
  },
  {
    key: 'soundcloud',
    href: 'https://soundcloud.com/modernizedandroidgyaru',
    label: 'SoundCloud',
    icon: <SoundCloud className={className} />,
  },
]