import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
];

export default function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
