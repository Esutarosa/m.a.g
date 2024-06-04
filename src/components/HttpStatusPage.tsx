import type { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

interface HttpStatusPageProps extends PropsWithChildren { status: number }

const HttpStatusPage: FC<HttpStatusPageProps> = ({ status, children }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <h1 className='text-3xl sm:text-4xl leading-none'>
        {status}
      </h1>
      <div className='flex flex-col gap-6 text-center text-muted-foreground'>
        {children &&
          <p>{children}</p>}
        <Link href='/' className='text-foreground'>
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default HttpStatusPage;