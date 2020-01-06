/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '~/store/modules/rootReducer';
import { RouteProps } from './types';

export { RouteProps } from './types';

export default function Routes({
  component: Component,
  path,
  exact,
  isPrivate,
  isAuthPage,
}: RouteProps) {
  const user = useSelector((state: RootState) => state.auth.user);

  if (isPrivate && !user) {
    return <Redirect to="/login" />;
  }

  if (isAuthPage && user) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  );
}
