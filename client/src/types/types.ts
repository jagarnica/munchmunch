import { RouteComponentProps } from '@reach/router';
import { ValidationRules } from 'react-hook-form';

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
  rules: ValidationRules;
  type: string;
};

export type CustomChakraIcon = {
  path: JSX.Element;
  viewBox: string;
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
