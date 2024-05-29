import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../arrow/arrow.component';
import { PagesLinksParentLinks } from '../../data/types/pages-links.types';

export type SidebarLinkProps = {
  link: PagesLinksParentLinks;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ link }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);

  return (
    <div>
      <Link to={link.path || '#'}>
        <div className="pl-6 flex justify-between py-3 mx-0 pr-3 rounded text-center cursor-pointer   flex items-center transition-colors  hover:bg-blue-100">
          <div
            className={link.active ? 'text-primary inline-flex' : 'inline-flex'}
          >
            <div className="mr-4">{link.icon}</div>
            <p className="text-sm self-end	">{link.name}</p>
          </div>
          <Arrow
            active={link.active}
            direction="right"
            onClick={() => setAccordionOpen(!accordionOpen)}
          />
        </div>
      </Link>

      <div className="py-2">
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen && link.children
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            {link.children?.map((child, index) => (
              <Link to={child.path || '#'} key={index}>
                <div className="pl-16 py-2 mx-0 pr-3 rounded text-center cursor-pointer   flex items-center transition-colors  hover:bg-blue-100">
                  <div className="mr-4">{child.icon}</div>
                  <p className="text-sm self-end	">{child.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLink;
