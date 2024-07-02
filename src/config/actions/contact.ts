'use server';

import { createClient } from "@/config/supabase/server";

export async function createContact(data: any) {
  const supabase = await createClient();
  return supabase
    .from('contact')
    .insert(data)
    .select();
}