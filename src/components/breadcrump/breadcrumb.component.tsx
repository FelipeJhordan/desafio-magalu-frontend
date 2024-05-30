import React from 'react';
import { Link } from 'react-router-dom';

import './breadcrumb.component.css';

export type BreadCrumbProps = {
  parent: string;
  parentPath: string;
  current: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  parent,
  parentPath,
  current,
}: BreadCrumbProps) => {
  return (
    <div className=" mx-auto flex items-center py-8  px-5  breadcrumb-container ">
      <div className="breadcrumb-line w-full absolute top-1/2 transform -translate-y-1/2"></div>

      <div className="breadcrumb-item px-0 mx-0 box-content	 pr-2">
        <Link
          to={parentPath}
          className=" breadcrumb-item text-white hover:underline text-2xl z-10					"
        >
          {parent}
        </Link>
        <span className=" breadcrumb-item mx-2 text-white text-2xl z-10 mx-0	">
          /
        </span>
        <span className=" breadcrumb-item  text-primary ml-0 px-0 mx-0 z-10	 text-2xl">
          {current}
        </span>
      </div>
    </div>
  );
};

export default BreadCrumb;
