import React from 'react';
import { MainRouteComponent } from 'types';
import { Layout } from 'components/shared/layout';

export const UserSearch: React.FC<MainRouteComponent> = ({ children }): JSX.Element => {
  return <Layout fullWidth>{children}</Layout>;
};
