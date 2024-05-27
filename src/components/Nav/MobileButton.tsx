import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface MobileButtonProps {
  menuIsActive: boolean
  setMenuIsActive: (value: boolean) => void
}

const MobileButton: FC<MobileButtonProps> = ({
  setMenuIsActive,
  menuIsActive,
}) => {
  return (
    <button
      className={cn(
        'block transition-transform lg:hidden',
        menuIsActive ? 'transform -translate-x-2' : ''
      )}
      onClick={() => setMenuIsActive(!menuIsActive)}
    >
      Menu
    </button>
  );
}

export default MobileButton;