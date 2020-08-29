import { FormRulesType } from 'types/';

export const firstNameMinLength = {
  value: 2,
};
export const lastNameMinLength = {
  value: 2,
};

const firstNameRules = {
  required: 'Please enter a first name',
  minLength: {
    value: firstNameMinLength.value,
    message: `First name must be at least ${firstNameMinLength.value} characters`,
  },
  max: 40,
};
const lastNameRules = {
  required: `Please enter a last name`,
  minLength: {
    value: lastNameMinLength.value,
    message: `Last name must be at least ${lastNameMinLength.value} characters`,
  },
  max: 40,
};
export const firstName: FormRulesType = {
  id: 'firstName',
  label: 'First Name',
  placeholder: 'First Name',
  rules: firstNameRules,
};

export const lastName: FormRulesType = {
  label: 'Last Name',
  id: 'lastName',
  placeholder: `Last name`,
  rules: lastNameRules,
};
