import type { FC } from 'react';
import { redirect } from 'next/navigation';

import { getUser } from '@/config/store/user';

const Admin: FC = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  return (
    <div>
      Admin Page
      <p>
        {user?.email}
      </p>
    </div>
  );
}

export default Admin;