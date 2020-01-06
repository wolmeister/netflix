import MediaProgress from '~/models/MediaProgress';
import User from '~/models/User';
import Media from '~/models/Media';

const key = '@@netflix/progresses';

export function getMediaProgresses(user?: User): MediaProgress[] {
  const currentsString = localStorage.getItem(key);
  let currents: MediaProgress[] = [];
  if (currentsString) {
    currents = JSON.parse(currentsString);
  }
  if (user) {
    currents = currents.filter(mp => mp.userId === user.id);
  }
  return currents;
}

export function getMediaProgress(user: User, media: Media): MediaProgress {
  const items = getMediaProgresses(user);
  return items.find(mp => mp.mediaId === media.id) || null;
}

export function saveMediaProgress(mediaProgress: MediaProgress) {
  let currents = getMediaProgresses();
  currents = currents.filter(
    mp =>
      !(
        mediaProgress.userId === mp.userId &&
        mp.mediaId === mediaProgress.mediaId
      )
  );
  currents.push(mediaProgress);
  localStorage.setItem(key, JSON.stringify(currents));
}
