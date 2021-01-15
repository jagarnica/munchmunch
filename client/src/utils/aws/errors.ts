export type AWSErrorResponse = {
  code: string;
  message: string;
};

type SignUpErrorsType = {
  USER_NAME_EXISTS: AWSErrorResponse;
  LIMIT_EXCEEDED: AWSErrorResponse;
  CODE_MISMATCH: AWSErrorResponse;
};

/**
 * @name SignUpErrors
 * @description These are used in the sign up process. The backend also sends codes
 * with their messages to describe the error. These are customized so we can
 * have our own messages.
 */
export const SignUpErrors: SignUpErrorsType = {
  USER_NAME_EXISTS: {
    code: 'UsernameExistsException',
    message: 'An account with that email already exists.',
  },
  LIMIT_EXCEEDED: {
    code: 'LimitExceededException',
    message: 'There have been too many attempts! Please try again later.',
  },
  CODE_MISMATCH: {
    code: 'CodeMismatchException',
    message: 'Invalid verification code provided, please check your code.',
  },
};
