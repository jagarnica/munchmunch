import { RouteComponentProps } from '@reach/router';
import { ValidationRules } from 'react-hook-form';

export type DefaultPageProps = RouteComponentProps;
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
