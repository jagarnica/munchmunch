import React, { useState, useEffect } from 'react';
import { App } from 'components/pages/app';
import { Amplify, Auth } from 'aws-amplify';
import { AppContext } from 'libs/contextLib';
import config from '../config';

const IndexPage = (): React.ReactNode => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  // Configure AWS authentification
  useEffect(() => {
    const authenticateSession = async () => {
      try {
        // Load the current user session
        await Auth.currentSession();
        userHasAuthenticated(true);
      } catch (e) {
        if (e !== 'No current user') {
          if (isAuthenticated) {
            userHasAuthenticated(false);
          }
        }
      }

      setIsAuthenticating(false);
    };
    authenticateSession();
  }, []);

  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
  });
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      {isAuthenticating ? <span>Loading deliciousness...</span> : <App />}
    </AppContext.Provider>
  );
};
export default IndexPage;
