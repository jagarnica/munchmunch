import { FormRulesType } from 'types/';

const CodeRules = {
  required: {
    value: true,
    message: 'Please enter a confirmation code',
  },
  pattern: {
    value: /^(?=.*[0-9]).*/,
    message: 'The confirmation code can only have numbers.',
  },
};
export const ConfirmationCode: FormRulesType = {
  label: 'Confirmation Code',
  id: 'confirmationCode',
  type: 'number',
  rules: CodeRules,
};
