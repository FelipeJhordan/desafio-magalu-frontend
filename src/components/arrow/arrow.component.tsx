import React from 'react';

import './arrow.component.css';

import ArrowIcon from '../../assets/icons/arrow.svg';
import { ReactSVG } from 'react-svg';

export interface ArrowProps {
  direction: 'left' | 'right';
  active: boolean;
  onClick?: (toggle: boolean) => void;
}

const Arrow: React.FC<ArrowProps> = ({
  direction,
  active,
  onClick: handleClick,
}: ArrowProps) => {
  return (
    <span
      className={active ? 'arrow-active arrow' : 'arrow-inactive arrow'}
      onClick={() => {
        if (handleClick) {
          handleClick(false);
        }

        return;
      }}
    >
      <ReactSVG
        src={ArrowIcon}
        className={direction == 'right' ? 'arrow-right' : ''}
      />
    </span>
  );
};

export default Arrow;
