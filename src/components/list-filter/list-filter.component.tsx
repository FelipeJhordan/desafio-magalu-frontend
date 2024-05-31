import React from 'react';
import { ReactSVG } from 'react-svg';

import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';
import SearchIcon from '../../assets/icons/search.svg';

export type ListFilterProps = {
  dates: DateValueType;
  order: string;
  setDates: (dates: DateValueType) => void;
  handleOrderChange: (order: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const ListFilter: React.FC<ListFilterProps> = (props: ListFilterProps) => {
  const { dates, handleOrderChange, handleSubmit, order, setDates } = props;

  const handleValueChange = (newValue: DateValueType) => {
    setDates(newValue);
  };

  return (
    <>
      <div className="flex mb-4">
        <form
          className="flex items-center p-4 rounded-lg bg-header query_bg"
          onSubmit={handleSubmit}
        >
          <div className="mr-4">
            <label htmlFor="periodo" className="block text-primary mb-1">
              Periodo
            </label>
            <Datepicker
              value={dates}
              onChange={handleValueChange}
              placeholder="02/05/2024 - 03/06/2024"
              inputClassName="w-56 h-10 text-white placeholder-toast_bg rounded pl-6 bg-default_strong text-toast_bg"
              toggleClassName="hidden"
              separator="-"
              displayFormat="DD/MM/YYYY"
              primaryColor={'emerald'}
              showFooter={true}
              showShortcuts={true}
            />
          </div>
          <div className="mr-4">
            <label htmlFor="pedido-id" className="block text-primary mb-1">
              ID do Pedido
            </label>
            <input
              type="text"
              id="pedido-id"
              placeholder="1234567"
              onChange={(e) => handleOrderChange(e.target.value)}
              value={order}
              className="p-2 h-10 rounded   placeholder-toast_bg text-white bg-default_strong text-toast_bg"
            />
          </div>
          <button
            className="w-36 flex justify-center items-center	 bg-primary hover:shadow-xl text-gray-800 font-bold py-3 px-4 rounded-lg"
            type="submit"
          >
            <ReactSVG src={SearchIcon} />
            <span className="font-normal font-black">BUSCAR</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default ListFilter;
