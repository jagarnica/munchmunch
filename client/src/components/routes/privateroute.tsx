import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import { Layout } from 'components/general/layout/layout';
export interface PrivateRouteProps extends RouteComponentProps {
  component: React.ComponentType;
}
export class PrivateRoute extends React.Component<PrivateRouteProps> {
  render() {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      // return <Redirect to="/signin" noThrow />;
    }
    const { component: Component, ...rest } = this.props;
    return (
      <Layout isUserLoggedIn={false}>
        <span>Current rendering a private route</span>
        <Component {...rest} />
      </Layout>
    );
  }
}
