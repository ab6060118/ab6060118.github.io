import './App.scss';
import React, { FC } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PhoneIcon from '../images/phone-call.svg';
import AvatarIcon from '../images/avatar.svg';
import SuitcaseIcon from '../images/suitcase.svg';
import Profile from './Profile';
import Resume from './Resume';

const App:FC = () => (
  <div className="flex flex-grow h-full overflow-hidden text-white bg-gray-800 sm:rounded-xl max-w-screen-lg sm:h-3/4">
    <div className="flex flex-col flex-shrink-0 w-12 bg-gray-900 sm:w-16">
      <div className="flex flex-col items-stretch justify-center flex-grow">
        <NavLink to="/" className="menu-item" exact>
          <AvatarIcon className="menu-icon" />
        </NavLink>
        <NavLink to="/contact" className="menu-item" exact>
          <PhoneIcon className="menu-icon" />
        </NavLink>
        <NavLink to="/works" className="menu-item" exact>
          <SuitcaseIcon className="menu-icon" />
        </NavLink>
        <NavLink to="/resume" className="menu-item" exact>
          <PhoneIcon className="menu-icon" />
        </NavLink>
      </div>
    </div>
    <div className="flex flex-grow">
      <Switch>
        <Route path="/works" component={Profile} />
        <Route path="/contact" component={Profile} />
        <Route path="/resume" component={Resume} />
        <Route path="/" component={Profile} exact />
      </Switch>
    </div>
  </div>
);

export default App;
