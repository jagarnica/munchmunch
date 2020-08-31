import React from 'react';
import { App } from 'components/pages/app';
import { Amplify } from 'aws-amplify';
import config from '../config';

const IndexPage = (): React.ReactNode => {
  // Configure AWS authentification
  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
  });
  return <App />;
};
export default IndexPage;
