import React from 'react';
import { Router } from '@reach/router';
import { SignUpPage, LoginPage, HomePage, NotFoundPage } from './index';

export function App(): React.ReactElement {
  return (
    <Router basepath="/">
      <SignUpPage path="/signup" />
      <LoginPage path="/login" />
      <HomePage path="/" />
      <NotFoundPage path="/404" default />
    </Router>
  );
}
