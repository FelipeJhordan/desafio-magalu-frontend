import { ReactSVG } from 'react-svg';

import HomeIcon from '../../assets/icons/home.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

import { PagesLinksParentLinks } from './types/pages-links.types';

export const sideBarLinksData: PagesLinksParentLinks[] = [
  {
    name: 'HOME',
    icon: <ReactSVG src={HomeIcon} className="icon-fill icon-home" />,
    path: '/',
    active: true,
    children: [
      {
        name: 'PEDIDOS',
        parent: 'Home',
        path: '/pedidos',
      },
      {
        name: 'UPLOAD',
        parent: 'Home',
        path: '/upload',
      },
    ],
  },
  {
    name: 'PERFIL',
    icon: <ReactSVG src={ProfileIcon} className="icon-menu " />,
    active: false,
  },
];
