import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type RouteProps = {
  component: ComponentType<RouteComponentProps>;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  isAuthPage?: boolean;
};
