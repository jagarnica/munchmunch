import React from 'react';
import { Router, Redirect } from '@reach/router';
import { OrderApp } from 'components/order/app';
import { SignUpPage, ForgotPasswordPage, LoginPage, HomePage, NotFoundPage, AuthPage } from './index';

export function App(): React.ReactElement {
  return (
    <Router basepath="/">
      <AuthPage path="/auth">
        <SignUpPage path="signup" />
        <LoginPage path="login" />
        <ForgotPasswordPage path="forgotpassword" />
      </AuthPage>
      <HomePage path="/" />
      <OrderApp path="order/*" />
      <Redirect noThrow from="login" to="/auth/login" />
      <Redirect noThrow from="signup" to="/auth/signup" />
      <NotFoundPage path="/404" default />
    </Router>
  );
}
