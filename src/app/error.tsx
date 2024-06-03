'use client';

import type { FC } from 'react';

import HttpStatusPage from '@/components/HttpStatusPage';
import DefaultLayout from '@/components/Layouts/Default';

const Error: FC = () => {
  return (
    <DefaultLayout isHideFooter isHideHeader className='justify-center'>
      <HttpStatusPage status={500}>
        Something went wrong
      </HttpStatusPage>
    </DefaultLayout>
  );
}

export default Error;