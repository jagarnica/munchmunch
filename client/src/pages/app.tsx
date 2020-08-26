import React from 'react';
import { Router } from '@reach/router';
import IndexPage from '../components/pages/index';
import SignUp from '../components/pages/signup';
import Login from '../components/pages/login';
import { PrivateRoute, PublicRoute } from '../components/routes';
//import Amplify from 'aws-amplify';
//import config from '../aws-exports.js';
import { Layout } from '../components/layout';
const App = ({ children }) => {
  // Amplify.configure(config);
  return (
    <>
      <Layout>
        <Router>
          <Home path="/" />
          <Dash path="dashboard" />
        </Router>
      </Layout>
    </>
  );
};

export default App;
const Home = () => <div>Home</div>;
const Dash = () => <div>In the dashboard!!</div>;
