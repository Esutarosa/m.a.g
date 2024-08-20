import type { FC } from 'react';

import { getUser } from '@/config/store/user';

import { redirect } from 'next/navigation';

const AdminPage: FC = async () => {
  const { user } = await getUser();
  if (!user) return redirect('/auth');

  return (
    <div>
      <p>Hello {user.email}</p>
    </div>
  );
}

export default AdminPage;