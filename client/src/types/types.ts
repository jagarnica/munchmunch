import { RouteComponentProps } from '@reach/router';
import { RegisterOptions } from 'react-hook-form';
import { ISignUpResult } from 'amazon-cognito-identity-js';

export type MainRouteComponent = RouteComponentProps;
/**
 * @name FormRulesType
 * @description This type is used to set the details and props for form elements
 */
export type FormRulesType = {
  label: string;
  id: string;
  placeholder?: string;
  maxLength?: string;
  rules: RegisterOptions;
  type: string;
};

export type RestaurantOrder = {
  name: string;
  image: string;
  id: string;
  date: string;
};

export type Restaurant = {
  id: string;
  name: string;
  location: string;
  image: string;
};

export type User = {
  familyName: string;
  name: string;
  email: string;
};

export type AWSCurrentUserInfo = {
  id: string;
  username: string;
  attributes: {
    // eslint-disable-next-line camelcase
    family_name: string;
    name: string;
    email: string;
  };
};
export type restaurantQuery = {
  [key: string]: string;
};

export type AWSignInResponse = {
  attributes: {
    // eslint-disable-next-line camelcase
    family_name: string;
    name: string;
    email: string;
    // eslint-disable-next-line camelcase
    phone_number_verified: boolean;
  };
  username: string;
};

export type AuthResendSignUpResult = {
  CodeDeliveryDetails: ISignUpResult['codeDeliveryDetails'];
};
export type AuthForgotPasswordResult = {
  CodeDeliveryDetails: ISignUpResult['codeDeliveryDetails'];
};

/* eslint-disable  camelcase */
export type AWSConfig = Readonly<{
  aws_project_region: string;
  aws_cognito_identity_pool_id: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
  oauth: {
    domain: string;
    scope: [string];
    redirectSignIn: string;
    redirectSignOut: string;
    responseType: string;
  };
  federationTarget: string;
  aws_appsync_graphqlEndpoint: string;
  aws_appsync_region: string;
  aws_appsync_authenticationType: string;
}>;
/* eslint-enable  camelcase */

export type AWSErrorResponse = {
  code: string;
  message: string;
};
