import Media from '~/models/Media';
import User from '~/models/User';
import medias from './__data__/medias';
import { getMediaProgresses } from './mediaProgress';

export function getMedia(id: number): Media | null {
  return medias.find(m => m.id === id) || null;
}

export function getMedias(): Media[] {
  return [...medias];
}

export function getUnfinishedMedias(user: User): Media[] {
  const progresses = getMediaProgresses(user).filter(mp => !mp.finished);
  return progresses.map(mp => getMedia(mp.mediaId));
}
