import React from 'react';
import { Router } from '@reach/router';
import { OrderApp } from 'components/order/app';
// import { MerchantApp } from 'components/merchantapp/';
import { NotFoundPage } from './index';

export function App(): React.ReactElement {
  return (
    <Router basepath="/">
      <OrderApp path="/*" />
      {
        // <MerchantApp path="merchant/*" />
      }
      <NotFoundPage path="/404/" />
    </Router>
  );
}
