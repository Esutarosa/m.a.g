import type { FC } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/config/store/user';
import { createClient } from '@/config/supabase/server';
import AdminLayout from '@/components/Layouts/Admin';
import AdminSectionContainer from '@/components/Layouts/AdminSectionContainer';

interface DiscographyProps { }

const Discography: FC<DiscographyProps> = async ({ }) => {
  const { user } = await getUser();
  if (!user) return redirect('/login');

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };
  return (
    <AdminLayout user={user} signOutAction={signOut}>
      <AdminSectionContainer>

      </AdminSectionContainer>
    </AdminLayout>
  );
}

export default Discography;