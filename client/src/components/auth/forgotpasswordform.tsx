import React from 'react';
import { Auth } from 'aws-amplify';
import { debounce } from 'lodash';
import { getSignUpErrorMessage } from 'utils/aws';
import { Button, useToast, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AWSErrorResponse, AuthForgotPasswordResult } from 'types';
import { FormInput, FormContainer } from 'components/formelements/';
import { customerEmail, confirmationCode as codeElement, customerPassword, confirmPassword } from 'utils/formrules';
import { navigate } from 'gatsby';
import { SignUpErrors } from 'utils/aws/';
import { getMediumText, authForgotPassword } from './utils';
import { ConfirmSignUpForm } from '.';

export interface SendCodeFormProps {
  onSentCode: (username: string) => void;
  onReverifyAccount?: (username: string) => void;
}
interface EnterCodeFormTypes {
  confirmationCode: string;
  password: string;
  confirmPassword: string;
}
export interface EnterCodeProps {
  username: string;
}
/**
 * @name ForgotPasswordForm
 * @description This is the main form. First it shows the form where the user has to
 * enter their username. Afterwards, it shows the form to enter that code and reset
 * their password.
 * @returns JSX.Element
 */
export const ForgotPasswordForm = (): JSX.Element => {
  const [username, setUsername] = React.useState<string | null>(null);
  const [codeSent, setCodeSent] = React.useState(false);
  const [isUnverified, setIsUnverified] = React.useState(false);
  const toast = useToast();
  function handleCodeSent(email: string) {
    // We save the username for later when entering the code.
    setUsername(email);
    setCodeSent(true);
  }

  function handleVerifyAccount(emailAddress: string) {
    // We have to verify the account
    setUsername(emailAddress);
    setIsUnverified(true);
  }
  function resetFormState() {
    setUsername(null);
    setCodeSent(false);
    setIsUnverified(false);
  }

  function handleSentVerifyCode(success?: boolean) {
    if (success) {
      // User has verified their account
      // Navigate back to the login page
      toast({
        title: 'Account Verified!',
        description: 'Please try resetting your password again.',
        status: 'success',
        duration: 12000,
        isClosable: true,
      });
      resetFormState();
    } else {
      toast({
        title: 'Oops!',
        description: 'Check your confirmation code for any typos!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }
  if (isUnverified && username)
    return <ConfirmSignUpForm userEmailAddress={username} sendCodeImmediately callback={handleSentVerifyCode} />;
  return codeSent && username ? (
    <EnterCodeForm username={username} />
  ) : (
    <SendCodeForm onReverifyAccount={handleVerifyAccount} onSentCode={handleCodeSent} />
  );
};

/**
 * @name SendCodeForm
 * @description This form is for the user to enter their email. Then it will send a code
 * to reset their password.
 * @prop {void} onSentCode This is called when the code is successfully sent. The username/email it
 * was sent to also gets passed in.
 * @returns JSX.Element
 */
export const SendCodeForm = ({ onSentCode, onReverifyAccount }: SendCodeFormProps): JSX.Element => {
  const { handleSubmit, errors, register } = useForm<{ email: string }>();

  /**
   * Toast for sending feedback to the user.
   */
  const toast = useToast();
  /**
   * State for awaitingCode(are we in the sending process) and attemptsExceeded
   * (disables the send button).
   */
  const [awaitingCode, setAwaitingCode] = React.useState(false);
  const [attemptsExceeded, setAttemptsExceeded] = React.useState(false);

  const handleCodeSendFail = debounce((username: string, errorCode?: AWSErrorResponse) => {
    if (errorCode?.code === SignUpErrors.LIMIT_EXCEEDED.code) setAttemptsExceeded(true);
    if (errorCode?.code === SignUpErrors.INVALID_PARAMETER_EXCEPTION.code) {
      // The user has not verified their account :(
      toast({
        title: 'Account Not Verified',
        description: `Your account has not been verified yet. We just sent you a code to verify it.`,
        duration: 8000,
        status: 'error',
        isClosable: true,
      });
      onReverifyAccount?.(username);
    } else {
      const errorMessage = getSignUpErrorMessage(
        errorCode?.code,
        'There was an issue sending your code. Please try again later.'
      );
      toast({
        title: 'Oops!',
        description: errorMessage,
        duration: 4000,
        status: 'error',
        isClosable: true,
      });
      setAwaitingCode(false);
    }
  }, 1000);
  const onSendCodeAttempt = (
    success: boolean,
    username: string,
    code?: AWSErrorResponse | AuthForgotPasswordResult
  ) => {
    if (success) {
      // that means the code was sent
      let message = 'If that account exists, we sent a code to either your email or phone number.';
      if (code && 'CodeDeliveryDetails' in code) {
        const medium = code.CodeDeliveryDetails.AttributeName;
        const location = code.CodeDeliveryDetails.Destination;
        message = getMediumText(medium, location);
      }
      debounce(() => {
        toast({
          title: 'Code Sent!',
          description: message,
          duration: 4000,
          status: 'success',
        });
        if (awaitingCode) setAwaitingCode(false);

        onSentCode(username);
      }, 1000)(); // The debounce is just here to make sure people don't spam it
    } else if (code && 'code' in code) {
      handleCodeSendFail(username, code);
    } else {
      handleCodeSendFail(username);
    }
  };

  /**
   * @function handleUsernameSubmit *SIDE EFFECT* This is called when the submit button is pressed
   * and the username passes sanity checks. It is debounced to prevent spamming by the
   * user. It calls another function to send the code.
   * @returns Promise<void>
   */
  const handleUsernameSubmit = debounce(
    async ({ email }: { email: string }) => {
      setAwaitingCode(true);

      // *SIDE EFFECT*
      // the callback will set the awaiting code status to false.
      await authForgotPassword(email, onSendCodeAttempt);
    },
    250,
    {
      leading: true,
      trailing: false,
    }
  );

  return (
    <FormContainer onSubmit={handleSubmit(handleUsernameSubmit)} formTitle="Reset your password">
      <Text>Please enter your email below and we will send you a code to reset your password.</Text>
      <FormInput
        isDisabled={attemptsExceeded}
        errorText={attemptsExceeded ? `` : errors.email?.message}
        elementDetails={customerEmail}
        ref={register({ ...customerEmail.rules })}
      />
      <Button isDisabled={attemptsExceeded} isLoading={awaitingCode} type="submit">
        Send Code
      </Button>
    </FormContainer>
  );
};
/** ***************************************************************************************** */

/**
 * @name EnterCodeForm
 * @description Takes in the reset code sent to the user, along with the new password
 * the user intends to use.
 * @prop {string} username This is the username by the user. It is needed to reset
 * their password.
 * @returns JSX.Element
 */
export const EnterCodeForm = ({ username }: EnterCodeProps): JSX.Element => {
  const toast = useToast();
  // Form hook
  const { errors, register, handleSubmit, getValues } = useForm<EnterCodeFormTypes>();
  // Button State Management
  const [verifyingCode, setVerifyingCode] = React.useState(false);
  const [sendingCode, setSendingCode] = React.useState(false);

  function handleResendStatus(
    success: boolean,
    userEmail: string,
    errorCode?: AWSErrorResponse | AuthForgotPasswordResult
  ) {
    const defaultErrorMessage = `There was an issue resending your code.`;
    const errorMessage =
      typeof errorCode === 'object' && 'code' in errorCode
        ? getSignUpErrorMessage(errorCode.code, defaultErrorMessage)
        : defaultErrorMessage;
    // debounce the following actions.
    debounce(() => {
      setSendingCode(false);
      toast({
        title: success ? 'Success!' : 'Error',
        description: success ? 'Code has been resent.' : errorMessage,
        duration: 2000,
        isClosable: true,
        status: success ? 'success' : 'error',
      });
    }, 1000)(); // This is done to prevent spamming the resend button
  }

  /**
   * @function handleSendCode
   * @description If the user didn't receive their code, this can resend it.
   */
  const handleSendCode = async (): Promise<void> => {
    setSendingCode(true);
    await authForgotPassword(username, handleResendStatus); // The callback will handle the results for us
  };

  async function handleCodeEntered({ confirmationCode, password }: EnterCodeFormTypes) {
    setVerifyingCode(true);
    let errorMessage = '';
    try {
      await Auth.forgotPasswordSubmit(username, confirmationCode, password);
      toast({
        title: errorMessage ? 'Error' : 'Hooray!',
        description: errorMessage || 'Your password has been successfully reset.',
        status: errorMessage ? 'error' : 'success',
        isClosable: true,
        duration: 2000,
      });
      navigate('/auth/login/');
    } catch (error) {
      // set error message
      errorMessage = getSignUpErrorMessage(error?.code, 'There was an issue resetting your password.');
      debounce(() => {
        toast({
          title: errorMessage ? 'Error' : 'Hooray!',
          description: errorMessage || 'Your password has been successfully reset.',
          status: errorMessage ? 'error' : 'success',
          isClosable: true,
          duration: 2000,
        });
        setVerifyingCode(false);
      }, 1000)();
    }
  }

  function validateConfirmPassword(input?: string) {
    const dirtyPassword = getValues('password');
    return input !== dirtyPassword ? `Passwords must match.` : true;
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCodeEntered)} formTitle={'Reset your password'}>
      <FormInput
        elementDetails={codeElement}
        ref={register({ ...codeElement.rules })}
        errorText={errors.confirmationCode?.message}
      />
      <FormInput
        elementDetails={customerPassword}
        errorText={errors.password?.message}
        ref={register({ ...customerPassword.rules })}
      />
      <FormInput
        elementDetails={confirmPassword}
        errorText={errors.confirmPassword?.message}
        ref={register({ ...confirmPassword.rules, validate: validateConfirmPassword })}
      />
      <Button isLoading={verifyingCode} type="submit">
        Reset Password
      </Button>
      <Button colorScheme="blue" onClick={handleSendCode} isLoading={sendingCode} variant="ghost">
        Resend Code
      </Button>
    </FormContainer>
  );
};
