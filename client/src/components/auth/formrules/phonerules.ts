import { FormRulesType } from 'types/';

const phoneNumberRules = {
  required: 'Please enter a phone number',
  minLength: {
    value: 6,
    message: 'Please enter a valid phone number',
  },
  maxLength: {
    value: 12,
    message: 'Please enter a valid phone number',
  },
};
// There will be extra validation done by other components
export const phoneNumber: FormRulesType = {
  id: `phoneNumber`,
  placeholder: 'Phone Number',
  label: 'Phone Number',
  type: 'tel',
  rules: phoneNumberRules,
};
