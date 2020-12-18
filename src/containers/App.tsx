import './App.scss';
import React, { FC } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PhoneIcon from '../images/phone-call.svg';
import AvatarIcon from '../images/avatar.svg';
import LinkedInIcon from '../images/linkedin.svg';
import FacebookIcon from '../images/facebook.svg';
import SuitcaseIcon from '../images/suitcase.svg';
import Profile from './Profile';
import Resume from './Resume';

const socialMedias = [
  {
    icon: FacebookIcon,
    url: 'https://www.facebook.com/Dauba1992/',
  },
  {
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/%E5%98%89%E5%AE%8F-%E9%AB%98-a609b3132/',
  },
];

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
    <div className="relative flex-grow flex-shrink-0 hidden max-w-xs overflow-hidden bg-center bg-no-repeat bg-cover w-80 sm:flex group">
      <div className="flex-grow img-me opacity-90" />
      <div className="absolute flex items-center justify-center w-full opacity-0 space-x-4 from-black bg-gradient-to-b group-hover:opacity-100 h-1/3 transition-opacity">
        {
          socialMedias.map(({ icon: Icon, url }) => (
            <a href={url} target="_blank" rel="noreferrer" className="flex w-12 h-12 p-3 text-white rounded-full hover:bg-gray-700" key={url}>
              <Icon className="w-full h-full fill-current stroke-current" />
            </a>
          ))
        }
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
