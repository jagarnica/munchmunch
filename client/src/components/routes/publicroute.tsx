import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { Layout } from 'components/general/layout/layout';

export interface PublicRouteProps extends RouteComponentProps {
  component: React.ComponentType<any>;
}

export class PublicRoute extends React.Component<PublicRouteProps> {
  componentDidMount() {}

  render() {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      //   return <Redirect to="/" noThrow />;
    }
    const { component: Component, ...rest } = this.props;
    console.log('public route props', this.props);
    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    );
  }
}
