import { FormRulesType } from 'types/';
import { parsePhoneNumberFromString } from 'libphonenumber-js/min/';

const phoneNumberRules = {
  minLength: {
    value: 6,
    message: 'Please enter a valid US phone number',
  },
  maxLength: {
    value: 12,
    message: 'Please enter a valid US phone number',
  },
  validate: (value?: string): boolean | string => {
    const phoneNumberGenerated = parsePhoneNumberFromString(value || '', 'US');
    return (
      (phoneNumberGenerated && phoneNumberGenerated.isPossible() && phoneNumberGenerated.isValid()) ||
      'Please enter a valid US phone number'
    );
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
