'use client';

import { supabase } from '@/config/supabase/client';
import { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { useEffect, useState, type FC } from 'react';

const AdminPage: FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!user) redirect('/auth');

  return (
    <div>
      <p>Signed in as {user.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default AdminPage;