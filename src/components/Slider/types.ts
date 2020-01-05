import Media from '~/models/Media';

export type SliderProps = {
  items: Media[];
  onPlay(item: Media): void;
  onInfo(item: Media): void;
};
