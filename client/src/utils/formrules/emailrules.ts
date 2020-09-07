import { FormRulesType } from 'types/';
// we are not gonna export this because we just want to be used internally~!
const customerEmailRules = {
  required: 'Please enter an email address',
  maxLength: 40,
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Please enter a valid email address',
  },
};
export const customerEmail: FormRulesType = {
  id: `email`,
  label: 'Email',
  placeholder: 'Email',
  type: 'text',
  rules: customerEmailRules,
};
