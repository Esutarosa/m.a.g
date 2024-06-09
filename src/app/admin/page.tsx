import type { FC } from 'react';
import { createClient } from '@/config/supabase/server';
import { redirect } from 'next/navigation';

const Admin: FC = async ({ }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect('/login');

  return (
    <div>
      Admin Page
    </div>
  );
}

export default Admin;