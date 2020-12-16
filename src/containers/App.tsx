import './App.scss';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import PhoneIcon from '../images/phone-call.svg';

const App:FC = () => (
  <div className="flex flex-grow overflow-hidden text-white bg-gray-800 rounded-xl max-w-screen-lg h-3/4">
    <div className="flex flex-col w-16 bg-gray-900">
      <div />
      <div className="flex flex-col items-stretch justify-center flex-grow">
        <NavLink to="/" className="menu-item" exact>
          <PhoneIcon className="menu-icon" />
        </NavLink>
        <NavLink to="/contact" className="menu-item" exact>
          <PhoneIcon className="menu-icon" />
        </NavLink>
        <NavLink to="/works" className="menu-item" exact>
          <PhoneIcon className="menu-icon" />
        </NavLink>
        <NavLink to="/skills" className="menu-item" exact>
          <PhoneIcon className="menu-icon" />
        </NavLink>
      </div>
      <div />
    </div>
    <div className="flex-grow">
      content
    </div>
  </div>
);

export default App;
