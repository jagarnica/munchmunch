import React from 'react';
import { Auth } from 'aws-amplify';
import { debounce } from 'lodash';
import { getSignUpErrorMessage } from 'utils/aws';
import { Button, useToast } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from 'components/formelements/';
import { customerEmail, confirmationCode as codeElement, customerPassword, confirmPassword } from 'utils/formrules';
import { navigate } from 'gatsby';

const authForgotPassword = async (
  email: string,
  callback: (success: boolean, username: string, errorCode?: string) => void
): Promise<void> => {
  try {
    await Auth.forgotPassword(email);
    callback(true, email);
  } catch (e) {
    const { code } = e;
    callback(false, email, code);
  }
};
export const ForgotPasswordForm = (): JSX.Element => {
  const [username, setUsername] = React.useState<string | null>(null);
  const [codeSent, setCodeSent] = React.useState(false);
  function handleCodeSent(email: string) {
    // We save the username for later when entering the code.
    setUsername(email);
    setCodeSent(true);
  }
  return codeSent && username ? <EnterCodeForm username={username} /> : <SendCodeForm onSentCode={handleCodeSent} />;
};

export const SendCodeForm = ({ onSentCode }: { onSentCode: (username: string) => void }): JSX.Element => {
  const toast = useToast();
  const [awaitingCode, setAwaitingCode] = React.useState(false);
  const [attemptsExcedeed, setAttemptsExceeded] = React.useState(false);
  const { handleSubmit, errors, register } = useForm<{ email: string }>();

  const handleCodeSendFail = debounce((errorCode?: string) => {
    if (errorCode === 'LimitExceededException') setAttemptsExceeded(true);
    const errorMessage = getSignUpErrorMessage(
      errorCode,
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
  }, 1000);
  const handleCodeAttempt = (success: boolean, username: string, code?: string) => {
    if (success) {
      debounce(() => {
        toast({
          title: 'Code Sent!',
          description: 'If that account exists, we sent a code to the mobile number saved.',
          duration: 2000,
          status: 'success',
        });

        setAwaitingCode(false);
        onSentCode(username);
      }, 1000)(); // The debounce is just here to make sure people don't spam it
    } else {
      handleCodeSendFail(code);
    }
  };
  const handleUsername = debounce(
    async ({ email }: { email: string }) => {
      setAwaitingCode(true);
      // the callback will set the awaiting code status to false.
      await authForgotPassword(email, handleCodeAttempt);
    },
    250,
    {
      leading: true,
      trailing: false,
    }
  );
  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleUsername)} formTitle="Reset your password">
        <FormInput
          isDisabled={attemptsExcedeed}
          errorText={attemptsExcedeed ? `` : errors.email?.message}
          elementDetails={customerEmail}
          ref={register({ ...customerEmail.rules })}
        />
        <Button isDisabled={attemptsExcedeed} isLoading={awaitingCode} type="submit">
          Send Code
        </Button>
      </FormContainer>
    </>
  );
};
interface EnterCodeFormTypes {
  confirmationCode: string;
  password: string;
  confirmPassword: string;
}
export const EnterCodeForm = ({ username }: { username: string }): JSX.Element => {
  const toast = useToast();
  // Form hook
  const { errors, register, handleSubmit, getValues } = useForm<EnterCodeFormTypes>();
  // Button State Management
  const [verifyingCode, setVerifyingCode] = React.useState(false);
  const [sendingCode, setSendingCode] = React.useState(false);

  function handeResendStatus(success: boolean, userEmail: string, errorCode?: string) {
    const errorMessage = getSignUpErrorMessage(errorCode, 'There was an issue resending your code.');
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
    await authForgotPassword(username, handeResendStatus); // The callback will handle the results for us
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
      <Button variantColor="blue" onClick={handleSendCode} isLoading={sendingCode} variant="ghost">
        Resend Code
      </Button>
    </FormContainer>
  );
};
