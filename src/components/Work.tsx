import React, { FC } from 'react';
import { works } from 'src/data/works';

type WorkProps = {
  data: typeof works
};

const Work:FC<WorkProps> = ({ data }: WorkProps) => (
  <div className="flex flex-col">
    {data.map(({ name, coverImg }) => (
      <div key={name} className="flex flex-col items-center justify-center">
        <img src={coverImg} alt="" />
        <span>{name}</span>
      </div>
    ))}
  </div>
);

export default Work;
