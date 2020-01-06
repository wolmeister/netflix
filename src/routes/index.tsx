import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Home from '~/pages/Home';
import Watch from '~/pages/Watch';
import Account from '~/pages/Account';
import Login from '~/pages/Login';

import Route, { RouteProps } from './Route';

const routes: RouteProps[] = [
  {
    component: Home,
    path: '/',
    exact: true,
    isPrivate: true,
  },
  {
    component: Watch,
    path: '/watch/:id',
    isPrivate: true,
  },
  {
    component: Account,
    path: '/account',
    isPrivate: true,
  },
  {
    component: Login,
    path: '/Login',
    isAuthPage: true,
  },
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
          isPrivate={route.isPrivate}
          isAuthPage={route.isAuthPage}
        />
      ))}
      <Redirect from="*" to="/" />
    </Switch>
  );
}
