import React from 'react';
import { Layout } from 'components/shared/layout';
import { Redirect, Router } from '@reach/router';
import { DefaultPageProps } from 'types';
import { PrivateRoute } from 'components/shared/privateroute';
import { AuthPage, SignUpPage, LoginPage, ForgotPasswordPage } from './auth';
import { OrderHome } from './home';
import { Account } from './account';
import { OrderHistory } from './orders';
import { UserPayments } from './payment';
/**
 * @name OrderApp
 * @description Holds the app used by customers to order food,
 * place orders, and manage their account
 */
export const OrderApp: React.FC<DefaultPageProps> = () => {
  return (
    <Layout>
      <Router basepath="/">
        <AuthPage path="auth/">
          <SignUpPage path="signup" />
          <LoginPage path="login" />
          <ForgotPasswordPage path="forgotpassword" />
          <Redirect noThrow from="*" to="/404" default />
        </AuthPage>
        <OrderHome path="/" />
        <PrivateRoute path="account" component={Account} />
        <PrivateRoute path="orders" component={OrderHistory} />
        <PrivateRoute path="payment" component={UserPayments} />
        <Redirect noThrow from="*" to="/404" default />
        <Redirect noThrow from="login" to="/auth/login" />
        <Redirect noThrow from="signup" to="/auth/signup" />
      </Router>
    </Layout>
  );
};
