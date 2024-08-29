import type { FC, PropsWithChildren } from 'react';

import { getUser } from '@/config/store/user';

import { redirect } from 'next/navigation';

const AdminLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { user } = await getUser();
  if (!user) return redirect('/auth');

  return <>{children}</>
}

export default AdminLayout;