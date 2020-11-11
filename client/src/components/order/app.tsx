import React from 'react';
import { Redirect, Router } from '@reach/router';
import { MainRouteComponent } from 'types';
import { PrivateRoute } from 'components/shared/privateroute';
import { AuthPage, SignUpPage, LoginPage, ForgotPasswordPage } from './auth';
import { OrderHome } from './home';
import { Account } from './account';
import { OrderHistory } from './orders';
import { UserPayments } from './payment';
import { UserSearch, RestuarantSearchPage } from './search';
/**
 * @name OrderApp
 * @description Holds the app used by customers to order food,
 * place orders, and manage their account
 */
export const OrderApp: React.FC<MainRouteComponent> = () => {
  return (
    <Router basepath="/">
      <AuthPage path="auth/">
        <SignUpPage path="signup" />
        <LoginPage path="login" />
        <ForgotPasswordPage path="forgotpassword" />
        <Redirect noThrow from="*" to="/404" default />
      </AuthPage>
      <OrderHome path="/" />
      <UserSearch path="/search">
        <RestuarantSearchPage path="resturants/:query" />
        <RestuarantSearchPage path="resturants/" />
        <Redirect noThrow from="*" to="/404" default />
      </UserSearch>
      <PrivateRoute path="account" component={Account} />
      <PrivateRoute path="orders" component={OrderHistory} />
      <PrivateRoute path="payment" component={UserPayments} />
      <Redirect noThrow from="*" to="/404" default />
      <Redirect noThrow from="login" path="login" to="/auth/login" />
      <Redirect noThrow from="signup" path="signup" to="/auth/signup" />
    </Router>
  );
};
