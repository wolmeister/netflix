import BillboardMedia from '~/models/BillboardMedia';

export type BillboardProps = {
  item: BillboardMedia;
  onPlay(item: BillboardMedia): void;
};
