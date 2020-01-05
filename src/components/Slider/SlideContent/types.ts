import Media from '~/models/Media';

export type SlideContentProps = {
  item: Media;
  hover: boolean;
  onPlay(item: Media): void;
  onInfo(item: Media): void;
};
