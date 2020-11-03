import React, { useState, useEffect, useReducer } from 'react';
import { App } from 'components/pages/app';
import { Amplify, Auth } from 'aws-amplify';
import { AppContext, AppContextInterface } from 'libs/contextLib';
import { ThemeProvider, Spinner, CSSReset, Box } from '@chakra-ui/core';
import { User, AWSCurrentUserInfo } from 'types/';
import { authReducer } from 'libs/reducers';
import { Rehydrated } from 'aws-appsync-react'; // this needs to also be installed when working with React
import { ApolloProvider } from '@apollo/client';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsConfig from '../aws-exports.js';
// Import the autogenerated config file
const InitialState: AppContextInterface = {
  user: undefined,
  isAuthenticated: false,
};

const client = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint as string,
  region: awsConfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsConfig.aws_user_pools_web_client_id,
  },
});
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
  Amplify.configure(awsConfig);

  // Show a spinner while we are checking if the user is authenticated
  if (loadingUser) {
    return <FullPageSpinner />;
  }
  // Show the app when done loading
  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ state, dispatch }}>
        <Rehydrated />
        <App />
      </AppContext.Provider>
    </ApolloProvider>
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
