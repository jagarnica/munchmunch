import React, { ComponentType } from 'react';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { useAppContext } from 'libs/contextLib';
import { omit } from 'lodash';

export interface PrivateRouteTypes {
  component: ComponentType;
  path: string;
}
export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteTypes): React.ReactElement | null => {
  const { isAuthenticated } = useAppContext();
  const { pathname } = useLocation();
  if (!isAuthenticated && pathname !== `/auth/login`) {
    // If we’re not logged in, redirect to the login page.
    navigate(`/`);
    return null;
  }
  // Filter out the path prop.
  const componentProps = omit(rest, 'path');
  return <Component {...componentProps} />;
};
