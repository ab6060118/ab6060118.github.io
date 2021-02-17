import React, { FC } from 'react';
import {
  NavLink, Redirect, Route, Switch, useParams, useRouteMatch,
} from 'react-router-dom';
import Work from '../components/Work';
import { Belong, works } from '../data/works';

const { QNAP, INWIN_STACK, SIDE_PROJECT } = Belong;

const tabStringMap:{[key in Belong]: string} = {
  [INWIN_STACK]: 'inwinSTACK',
  [QNAP]: 'QNAP',
  [SIDE_PROJECT]: '業餘',
};

const Works: FC = () => {
  const { url } = useRouteMatch();
  const { belong } = useParams<{belong: string}>();

  if (!belong || Belong[belong.toUpperCase() as keyof typeof Belong] === undefined) return <Redirect to="/works/qnap" />;

  return (
    <div className="flex flex-col flex-grow overflow-hidden">
      <div className="flex flex-col p-4 pb-0 sm:p-6 sm:pb-0 sm:items-start">
        <span className="flex-shrink-0 page-title">作品</span>
        <nav className="flex-shrink-0">
          {[QNAP, INWIN_STACK, SIDE_PROJECT]
            .map((key) => (
              <NavLink
                key={`nav-${key}`}
                className="m-3"
                activeClassName="text-green-300"
                to={`/works/${Belong[key].toLowerCase()}`}
              >
                {tabStringMap[key]}
              </NavLink>
            ))}
        </nav>
      </div>
      <div className="flex-grow flex-shrink p-4 overflow-y-auto sm:p-6">
        <Switch>
          <Route exact path={url}>
            {works
              .filter((work) => work.belong === Belong[belong.toUpperCase() as keyof typeof Belong])
              .map(({ name, coverImg }) => (
                <div key={name} className="flex flex-col items-center justify-center">
                  <img src={coverImg} alt="" />
                  <span>{name}</span>
                </div>
              ))}
          </Route>
          <Route path={`${url}/:id`}>12123</Route>
        </Switch>
      </div>
    </div>
  );
};

export default Works;
