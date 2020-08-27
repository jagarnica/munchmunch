import React from 'react';
import { Router } from '@reach/router';
import IndexPage from '../components/pages/index';
import SignUp from '../components/pages/signup';
import Login from '../components/pages/login';
import NotFoundPage from './404';
import { PrivateRoute, PublicRoute } from '../components/routes';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import config from '../aws-exports.js';
const App = () => {
  Amplify.configure(config);
  return (
    <>
      <Router basepath="/app">
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/" component={IndexPage} />
        <PublicRoute path="/signup" component={SignUp} />

        <NotFoundPage default />
      </Router>
    </>
  );
};

export default withAuthenticator(App);
