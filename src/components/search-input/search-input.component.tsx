import { ReactSVG } from 'react-svg';
import React from 'react';

import SearchIcon from '../../assets/icons/search.svg';

export type SearchInputProps = {
  onInputChange: (value: string) => void;
  value: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  onInputChange,
  value,
}: SearchInputProps) => {
  return (
    <div className="max-w-md  mt-0 px-4">
      <div className="relative flex items-center w-full h-12 rounded-lg  bg-search_bg overflow-hidden">
        <div className="grid place-items-center h-full  w-12 text-gray-300">
          <ReactSVG src={SearchIcon} className="fill-gray-400" />
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-search_bg"
          type="text"
          id="search"
          placeholder="BUSCAR"
          onChange={(e) => onInputChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchInput;
