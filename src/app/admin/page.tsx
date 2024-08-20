import { supabase } from '@/config/supabase/server';
import { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { useEffect, useState, type FC } from 'react';

const AdminPage: FC = async () => {
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }

  if (!data.user) redirect('/auth');

  return (
    <div>
      <p>Signed in as {data.user.email}</p>
    </div>
  );
}

export default AdminPage;