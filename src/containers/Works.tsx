import React, { FC, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Belone, works } from '../data/works';

const { QNAP, INWIN_STACK, SIDE_PROJECT } = Belone;

const tabStringMap:{[key in Belone]: string} = {
  [INWIN_STACK]: 'inwinSTACK',
  [QNAP]: 'QNAP',
  [SIDE_PROJECT]: '業餘',
};

const Works: FC = () => {
  const { params } = useRouteMatch();
  // const { tab } = params;

  console.log(params);

  return (
    <div className="flex flex-col items-center flex-grow p-4 sm:p-6 sm:items-start">
      <span className="flex-shrink-0 page-title">作品</span>
      <nav className="flex-shrink-0">
        {[QNAP, INWIN_STACK, SIDE_PROJECT]
          .map((key) => (
            <NavLink
              key={key}
              className="m-3"
              activeClassName="text-green-300"
              to={`/works/${Belone[key].toLowerCase()}`}
            >
              {tabStringMap[key]}
            </NavLink>
          ))}
      </nav>
      <div className="flex flex-wrap">
        {
          // works.filter(({ belong }) => belong === activeTab).map(({ name, coverImg }) => (
            // <div key={name}>
              // <img src={coverImg} alt="" />
              // {name}
            // </div>
          // ))
        }
      </div>
    </div>
  );
};

export default Works;
