import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import SideBarToggle from '../../assets/icons/menu.svg';
import LogoIcon from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

interface HeaderProps {
  showNav: any;
  setShowNav: any;
}

const Header: React.FC<HeaderProps> = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`fixed w-full z-40 h-20  mb-2 bg-header flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? 'pl-56' : ''
      }`}
    >
      <div className="md:pl-8 inline-flex">
        <ReactSVG
          src={SideBarToggle}
          className="h-8 w-8 text-gray-700 cursor-pointer fill-primary ml-6"
          onClick={() => setShowNav(!showNav)}
        />
        <Link to="/">
          <ReactSVG src={LogoIcon} className="ml-6" />
        </Link>
      </div>
      <div className="flex items-center pr-2 md:pr-8">
        <div className="relative inline-block text-left">
          <div>
            <div className="inline-flex w-full justify-center items-center">
              <Link to="#">
                <div className="rounded-full bg-gray-800	 p-4   ">
                  <ReactSVG src={ProfileIcon} className="fill-gray-50	" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
