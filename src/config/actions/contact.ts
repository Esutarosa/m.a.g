'use server';

import { ContactFormSchema } from "@/components/Admin/Contact/ContactFormSchema";
import { createClient } from "@/config/supabase/server";
import { revalidatePath } from "next/cache";

export async function createContact(data: ContactFormSchema) {
  const supabase = await createClient();

  try {
    const validateData = ContactFormSchema.parse(data);

    const result = await supabase
      .from('contact')
      .insert(validateData)
      .select('id')
      .single();

    revalidatePath('/admin/contacts');

    return JSON.stringify(result);

  } catch (err) {
    return JSON.stringify({ error: err })
  }
}

export async function readContact() {
  const supabase = await createClient();
  return supabase
    .from('contact')
    .select('title, link')
    .order('created_at', { ascending: false });
}

export async function readContactAdmin() {
  const supabase = await createClient();
  return supabase
    .from('contact')
    .select('*')
    .order('created_at', { ascending: false });
}

export async function deleteContactById(id: string) {
  const supabase = await createClient();
  const result = await supabase
    .from('contact')
    .delete()
    .eq('id', id);
  revalidatePath('/admin/contacts');
  return JSON.stringify(result);
}

export async function updateContactById(id: string, data: ContactFormSchema) {
  const supabase = await createClient();

  try {
    const validatedData = ContactFormSchema.parse(data);

    const result = await supabase
      .from('contact')
      .update(validatedData)
      .eq('id', id);

    revalidatePath('/admin/contacts');
    return JSON.stringify(result);
  } catch (err) {
    return JSON.stringify({ error: err })
  }
}