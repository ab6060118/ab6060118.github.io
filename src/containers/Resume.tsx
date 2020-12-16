import React, { FC, SVGAttributes } from 'react';
import { education, expereience } from '../data/resume';
import EducationIcon from '../images/mortarboard.svg';
import SuitcaseIcon from '../images/suitcase.svg';
import SkillsIcon from '../images/skills.svg';

const blocks:Array<{
  title: string;
  icon: React.FC<SVGAttributes<SVGElement>>;
  data: any[]
}> = [
  {
    title: '學歷',
    icon: EducationIcon,
    data: education,
  },
  {
    title: '經歷',
    icon: SuitcaseIcon,
    data: expereience,
  },
];

const Resume:FC = () => (
  <div className="flex flex-col flex-grow p-4 overflow-y-auto sm:p-6 divide-y-4 divide-black divide-opacity-25">
    <div className="p-2 sm:p-4">
      <span className="text-xl font-medium text-green-300">
        7 年網頁程式設計 / 4 年 JavaScript 經驗 / 3 年 PHP 經驗
      </span>
    </div>
    <div className="flex flex-col items-center p-2 sm:flex-row sm:p-4">
      <div className="flex items-center space-x-4">
        <SkillsIcon className="w-8 text-green-300 fill-current" />
        <span className="text-3xl ">技能</span>
      </div>
    </div>
    <div className="flex flex-col items-center flex-grow p-2 sm:flex-row sm:p-4 sm:items-start sm:space-y-0 space-y-7">
      {blocks.map(({ title, icon: Icon, data }) => (
        <div className="flex flex-col items-center w-full sm:w-auto sm:items-start sm:flex-1 sm:w-1/2 space-y-3 sm:space-y-7">
          <div className="flex space-x-3">
            <Icon className="w-8 text-green-300 fill-current" />
            <span className="text-2xl font-medium">{title}</span>
          </div>
          {data.map(({
            startYear, endYear, school, degree, department, company, title: companyTitle,
          }) => (
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-sm text-green-300">{`${startYear} - ${endYear}`}</span>
              <div className="flex flex-wrap sm:flex-nowrap space-x-1 sm:space-x-4">
                <span>{school || company}</span>
                <span>{department}</span>
              </div>
              <span className="text-sm text-gray-400">{degree || companyTitle}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Resume;
