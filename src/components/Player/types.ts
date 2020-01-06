export type PlayerProps = {
  url: string;
  initialTime?: number;
  onControlsShow?: () => void;
  onControlsHide?: () => void;
  onProgress?: (progress: number) => void;
  onEnded?: () => void;
};
