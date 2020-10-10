import React from 'react';
import { Layout } from 'components/shared/layout';
import { Router } from '@reach/router';
import { DefaultPageProps } from 'types';
import { PrivateRoute } from 'components/shared/privateroute';
import { OrderHome } from './home';
import { Account } from './account';
import { OrderHistory } from './orderhistory';
/**
 * @name OrderApp
 * @description Holds the app used by customers to order food,
 * place orders, and manage their account
 */
export const OrderApp: React.FC<DefaultPageProps> = () => {
  return (
    <Layout>
      <Router basepath="/">
        <OrderHome path="/" />
        <PrivateRoute path="account" component={Account} />
        <PrivateRoute path="history" component={OrderHistory} />
      </Router>
    </Layout>
  );
};
