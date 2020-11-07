import React from 'react';
import { useAppContext } from 'libs/contextLib';
import { MainRouteComponent } from 'types';
import { Redirect } from '@reach/router';
import { Layout } from 'components/shared/layout';

export const AuthPage: React.FC<MainRouteComponent> = props => {
  const { state } = useAppContext();
  const user = state?.user;
  if (user) {
    // User is already logged in
    return <Redirect to="/" noThrow />;
  }
  return (
    <Layout>
      <>{props.children}</>
    </Layout>
  );
};
