import { FormRulesType } from 'types/';

export const passwordMinLength = {
  value: 8,
};
const customerPasswordRules = {
  required: {
    value: true,
    message: 'Please enter a password',
  },
  minLength: {
    value: passwordMinLength.value,
    message: `Password must be at least ${passwordMinLength.value} characters`, // <p>error message</p>
  },
  pattern: {
    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/,
    message: 'Password must contain a lowercase letter, an uppercase letter, and a number',
  },
  maxLength: 40,
};

export const customerPassword: FormRulesType = {
  id: `password`,
  placeholder: 'Password',
  label: 'Password',
  type: 'password',
  maxLength: '100',
  rules: customerPasswordRules,
};

export const confirmPassword: FormRulesType = {
  id: `confirmPassword`,
  placeholder: 'Confirm Password',
  label: 'Confirm Password',
  type: 'Password',
  maxLength: '100',
  rules: customerPasswordRules,
};
