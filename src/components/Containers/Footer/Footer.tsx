import Link from 'next/link';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='flex items-center w-full h-16 border-t border-border/90'>
      <div className='text-sm container'>
        <Link href="/">&copy; Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;