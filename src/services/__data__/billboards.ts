/* eslint-disable global-require */
import BillboardMedia from '~/models/BillboardMedia';

const billboard: BillboardMedia = {
  id: 1,
  background: require('~/assets/billboards/dracula/background.jpg').default,
  title: require('~/assets/billboards/dracula/title.png').default,
  supplemental: 'Watch Season 1 Now',
  synopsis: `He's been a bloody scoundrel for centuries. What happens when a worthy adversary bites back?`,
  mediaId: 7,
};

export default billboard;
