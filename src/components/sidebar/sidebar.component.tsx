import { forwardRef, useEffect, useState } from 'react';

import Arrow from '../arrow/arrow.component';

import './sidebar.component.css';
import { sideBarLinksData } from '../../data/sidebar-links.data';
import SearchInput from '../search-input/search-input.component';
import SidebarLink from '../sidebar-link/sidebar-link.component';

interface SideBarProps {
  showNav: any;
  setShowNav: any;
}

const Sidebar: React.FC<SideBarProps> = forwardRef(({ setShowNav }, ref) => {
  const [navLinks, setNavLinks] = useState(sideBarLinksData);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setNavLinks(() => {
      return sideBarLinksData.filter((link) => {
        const clonedLink = { ...link };
        if (clonedLink.name.toLowerCase().includes(searchText.toLowerCase())) {
          return clonedLink;
        }

        if (clonedLink.children) {
          clonedLink.children = clonedLink.children.filter((child) => {
            if (child.name.toLowerCase().includes(searchText.toLowerCase())) {
              return clonedLink;
            }
          });

          if (clonedLink.children.length > 0) {
            return clonedLink;
          }
        }
      });
    });
  }, [searchText]);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="fixed w-70  h-full bg-white shadow-sm"
    >
      <div className="flex justify-end  mt-6 pt-2 pb-7 mb-4 shadow-bottom  pr-6">
        <Arrow active={false} direction="left" onClick={setShowNav} />
      </div>
      <SearchInput onInputChange={setSearchText} value={searchText} />
      <div className="flex flex-col mt-1">
        {navLinks.map((link, index) => (
          <SidebarLink link={link} key={index} />
        ))}
      </div>
    </div>
  );
});

export default Sidebar;
