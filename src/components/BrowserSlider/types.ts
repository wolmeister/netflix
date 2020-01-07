import Media from '~/models/Media';

export type BrowserSliderProps = {
  title: string;
  items: Media[];
  onPlay(item: Media): void;
};
