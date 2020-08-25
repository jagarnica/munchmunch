const passwordMinLength = {
  value: 6,
};
export const customerPasswordRules = {
  required: 'Please enter a password.',
  minLength: {
    value: passwordMinLength.value,
    message: `Password must be at least ${passwordMinLength.value} characters`, // <p>error message</p>
  },
  maxLength: 40,
};
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
export const firstNameInput = {
  id: 'firstName',
  placeholder: 'First Name',
  rules: firstNameRules,
};

export const lastNameInput = {
  id: 'lastName',
  placeholder: `Last name`,
  rules: lastNameRules,
};

export const customerPasswordInput = {
  id: `password`,
  placeholder: 'Password',
  rules: customerPasswordRules,
};

const customerEmailRules = {
  required: 'Please Enter an Email Address',
  maxLength: 40,
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Invalid email address',
  },
};
export const customerEmailRulesInput = {
  id: `email`,
  placeholder: 'Email',
  rules: customerEmailRules,
};
