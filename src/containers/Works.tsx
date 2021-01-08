import React, { FC } from 'react';
import { Belone, works } from '../data/works';

const { QNAP, INWIN_STACK, SIDE_PROJECT } = Belone;

const tabStringMap:{[key in Belone]: string} = {
  [INWIN_STACK]: 'inwinSTACK',
  [QNAP]: 'QNAP',
  [SIDE_PROJECT]: '業餘',
};

const Works: FC = () => (
  <div className="flex flex-col items-center flex-grow p-4 sm:p-6 sm:items-start">
    <span className="flex-shrink-0 page-title">作品</span>
    <nav className="flex-shrink-0">
      {[QNAP, INWIN_STACK, SIDE_PROJECT]
        .map((key) => (
          <span key={key} className="m-3 text-green-300">{tabStringMap[key]}</span>
        ))}
    </nav>
    <div className="flex flex-wrap">
      {
        works.map(({ name }) => (
          <div key={name}>{name}</div>
        ))
      }
    </div>
  </div>
);

export default Works;
