import { FormRulesType } from 'types/';

const GENERAL_ERROR_MESSAGE = `Please enter a valid confirmation code`;
const CodeRules = {
  required: {
    value: true,
    message: GENERAL_ERROR_MESSAGE,
  },
  minLength: {
    value: 6,
    message: GENERAL_ERROR_MESSAGE,
  },
  maxLength: {
    value: 6,
    message: `The code should be only 6 digits long. Please check your code.`,
  },
  pattern: {
    value: /^[0-9]+$/i,
    message: GENERAL_ERROR_MESSAGE,
  },
};
export const confirmationCode: FormRulesType = {
  label: 'Confirmation Code',
  id: 'confirmationCode',
  type: 'number',
  rules: CodeRules,
};
