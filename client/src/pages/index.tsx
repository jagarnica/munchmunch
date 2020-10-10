import React, { useState, useEffect, useReducer } from 'react';
import { App } from 'components/pages/app';
import { Amplify, Auth } from 'aws-amplify';
import { AppContext, AppContextInterface } from 'libs/contextLib';
import { ThemeProvider, Spinner, CSSReset, Box } from '@chakra-ui/core';
import { User, AWSCurrentUserInfo } from 'types/';
import { authReducer } from 'libs/reducers';
import config from '../config';

const InitialState: AppContextInterface = {
  user: undefined,
  isAuthenticated: false,
};
/**
 * @name IndexPage
 * @description This is the entry point for users when they enter the site.
 */
const IndexPage = (): React.ReactNode => {
  const [state, dispatch] = useReducer(authReducer, InitialState);
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
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user: loadedUser } });
      } catch (e) {
        if (e !== 'No current user') {
          dispatch({ type: 'LOGOUT_SUCCESS' });
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
  // Show a spinner while we are checking if the user is authenticated
  if (loadingUser) {
    return <FullPageSpinner />;
  }
  // Show the app when done loading
  return (
    <AppContext.Provider value={{ state, dispatch }}>
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
