import React, { FC } from 'react';
import { works } from '../data/works';

const Works: FC = () => (
  <div className="flex flex-col items-center flex-grow p-4 sm:p-6 sm:items-start">
    <span className="flex-shrink-0 page-title">作品</span>
    <div className="flex-shrink-0">
      filter
    </div>
    <div className="flex flex-wrap">
      {
        works.map(({ name, imgs }) => (
          <div>{name}</div>
        ))
      }
    </div>
  </div>
);

export default Works;
