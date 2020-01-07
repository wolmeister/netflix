import Media from '~/models/Media';

export type MediaInformationProps = {
  item: Media;
  onPlay(item: Media): void;
  onClose(item: Media): void;
};
