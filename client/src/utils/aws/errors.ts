import { AWSErrorResponse } from 'types';

export type SignUpErrorsType = {
  USER_NAME_EXISTS: AWSErrorResponse;
  LIMIT_EXCEEDED: AWSErrorResponse;
  CODE_MISMATCH: AWSErrorResponse;
  USER_NOT_FOUND: AWSErrorResponse;
  INVALID_PARAMETER_EXCEPTION: AWSErrorResponse;
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
  USER_NOT_FOUND: {
    code: 'UserNotFoundException',
    message: 'There is no account with that email address. Please check your email address for any mistakes.',
  },
  INVALID_PARAMETER_EXCEPTION: {
    code: 'InvalidParameterException',
    message: 'Cannot reset password for the user as there is no registered/verified email or phone_number.',
  },
};
