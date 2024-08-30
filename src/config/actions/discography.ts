'use server';

import { createClient } from '@/config/supabase/server';

export async function readDiscography() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('discography')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error('Error fetching discography:', error);
    return { data: null, error };
  }

  const albumsWithImages = await Promise.all(
    data.map(async (album) => {
      if (album.image_src) {
        const { data: image } = await supabase
          .storage
          .from('discography_images')
          .getPublicUrl(album.image_src);

        if (!image.publicUrl) {
          console.error(`Error fetching image URL for ${album.title}`);
          return { ...album, image_src: null };
        }

        return { ...album, image_src: image.publicUrl };
      }
      return album;
    })
  );

  return { data: albumsWithImages, error: null };
};
