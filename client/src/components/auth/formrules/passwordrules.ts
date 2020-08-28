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
    value: /^(?=.*[a-z])(?=.*[0-9]).*/i,
    message: 'Password must contain one lowercase letter and one number',
  },
  maxLength: 40,
};

export const customerPassword = {
  id: `password`,
  placeholder: 'Password',
  rules: customerPasswordRules,
};
