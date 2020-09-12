import React from 'react';
import { Layout } from 'components/layout';
import { Router } from '@reach/router';
import { DefaultPageProps } from 'types';
import { PrivateRoute } from 'components/shared/privateroute';
import { OrderHome } from './home';
import { Account } from './account';
import { OrderHistory } from './orderhistory';

export const OrderApp: React.FC<DefaultPageProps> = () => {
  return (
    <Layout>
      <Router basepath="/order">
        <OrderHome path="/" />
        <PrivateRoute path="account" component={Account} />
        <PrivateRoute path="history" component={OrderHistory} />
      </Router>
    </Layout>
  );
};
