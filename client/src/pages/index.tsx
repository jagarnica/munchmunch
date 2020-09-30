import React, { useState, useEffect } from 'react';
import { App } from 'components/pages/app';
import { Amplify, Auth } from 'aws-amplify';
import { AppContext } from 'libs/contextLib';
import { ThemeProvider, Spinner, CSSReset, Box } from '@chakra-ui/core';
import { User, AWSCurrentUserInfo } from 'types/';
import config from '../config';

const IndexPage = (): React.ReactNode => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState<User>();
  const [loadingUser, setLoadingUser] = useState(true);
  // Configure AWS authentification
  useEffect(() => {
    const authenticateSession = async () => {
      try {
        // Load the current user session
        await Auth.currentSession();
        const { attributes }: AWSCurrentUserInfo = await Auth.currentUserInfo();
        const loadedUser: User = {
          name: attributes.name,
          familyName: attributes.family_name,
          email: attributes.email,
        };
        setUser(loadedUser);
        userHasAuthenticated(true);
      } catch (e) {
        if (e !== 'No current user') {
          if (isAuthenticated) {
            userHasAuthenticated(false);
          }
        }
      }

      setLoadingUser(false);
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
  if (loadingUser) {
    return <FullPageSpinner />;
  }
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, user, setUser }}>
      <App />
    </AppContext.Provider>
  );
};
export default IndexPage;

const FullPageSpinner = (): JSX.Element => (
  <ThemeProvider>
    <CSSReset></CSSReset>
    <Box height="3rem" width="3rem" position="fixed" top="50%" left="50%" marginLeft="-1.5rem" marginTop="-1.5rem">
      <Spinner thickness="4px" textAlign="center" size="xl" color="orange.500" />
    </Box>
  </ThemeProvider>
);
