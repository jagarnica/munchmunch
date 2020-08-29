import { RouteComponentProps } from '@reach/router';
import { ValidationRules } from 'react-hook-form';

export interface sampleType {
  name: string;
}

export type DefaultPageProps = RouteComponentProps;
/**
 * @name FormRulesType
 * @description This type is used to set the details and props for form elements
 */
export type FormRulesType = {
  label: string;
  id: string;
  placeholder?: string;
  rules: ValidationRules;
};
