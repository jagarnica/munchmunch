/* eslint-disable camelcase */

export default {
  aws_project_region: string,

  aws_cognito_identity_pool_id: string,

  aws_cognito_region: string,

  aws_user_pools_id: string,

  aws_user_pools_web_client_id: string,

  oauth: {
    domain: string,
    scope: [string],
    redirectSignIn: string,
    redirectSignOut: string,
    responseType: string,
  },

  federationTarget: string,

  aws_appsync_graphqlEndpoint: string,

  aws_appsync_region: string,

  aws_appsync_authenticationType: string,
};
