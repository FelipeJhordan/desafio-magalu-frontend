import React from 'react';

import { sideBarLinksData } from '../../data/sidebar-links/sidebar-links.data';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-14 mx-auto">
      <div className="grid mt-2 grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-12 ">
        {sideBarLinksData.map((link, index) => (
          <div key={index} className="bg-header p-4 rounded shadow  relative">
            <Link to={link?.path || '/'}>
              <h2 className="text-xl font-semibold mb-2 capitalize text-primary">
                {link.name.toString()}
              </h2>
            </Link>
            {link.children?.map((child, index) => (
              <Link to={child.path || '/'} key={index} >
                <p className="text-white pl-4 text-md font-light mb-2 hover:text-primary">{child.name}</p>
              </Link>
            ))}

            <div className="absolute top-3 fill-primary right-2">
              {link.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
