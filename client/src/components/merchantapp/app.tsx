import React from 'react';
import { Layout } from 'components/shared/layout';
import { Redirect, Router } from '@reach/router';
import { MainRouteComponent } from 'types';
import { MerchantHome } from './home';
/**
 * @name MerchantApp
 * @description Holds the app used by restuarant to manage their menu, food orders,
 * and manage their account.
 */
export const MerchantApp: React.FC<MainRouteComponent> = () => {
  return (
    <Layout>
      <Router basepath="/merchant">
        <MerchantHome path="/" />
        <Redirect from="*" to="/404" default noThrow />
      </Router>
    </Layout>
  );
};
