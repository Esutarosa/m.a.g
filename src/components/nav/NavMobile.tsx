import type { FC } from 'react';

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
    <div>
      NavMobile
    </div>
  );
}

export default NavMobile;