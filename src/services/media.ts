import Media from '~/models/Media';
import medias from './__data__/medias';

export function getMedia(id: number): Media | null {
  return medias.find(m => m.id === id) || null;
}

export function getMedias(): Media[] {
  return [...medias];
}
