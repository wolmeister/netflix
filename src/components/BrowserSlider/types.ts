import Media from '~/models/Media';

export type BrowserSliderProps = {
  title: string;
  items: Media[];
  /**
   * This is needed to the title be visible when it's
   * over the billboard, but can cause issues with others slides
   * if applied to all.
   */
  relativeTitle?: boolean;
  onPlay(item: Media): void;
};
