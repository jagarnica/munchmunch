import React from 'react';
import { Auth } from 'aws-amplify';
import { debounce } from 'lodash';
import { getSignUpErrorMessage } from 'utils/aws';
import { Button, useToast } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from 'components/formelements/';
import { customerEmail, confirmationCode } from 'utils/formrules';

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
  const handleUsername = debounce(
    async ({ email }: { email: string }) => {
      setAwaitingCode(true);
      try {
        await Auth.forgotPassword(email);

        debounce(() => {
          toast({
            title: 'Code Sent!',
            description: 'If that account exists, we sent a code to the mobile number saved.',
            duration: 2000,
            status: 'success',
          });

          setAwaitingCode(false);
          onSentCode(email);
        }, 1000)(); // The debounce is just here to make sure people don't spam it
      } catch (e) {
        const { code } = e;
        handleCodeSendFail(code);
      }
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
export const EnterCodeForm = ({ username }: { username: string }): JSX.Element => {
  const [verifyingCode, setVerifyingCode] = React.useState(false);
  const { errors, register, handleSubmit } = useForm<{ code: string }>();
  async function handleCodeEntered({ code }: { code: string }) {
    try {
    } catch (e) {}
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleCodeEntered)} formTitle={'Enter your code'}>
      <FormInput
        elementDetails={confirmationCode}
        ref={register({ ...confirmationCode.rules })}
        errorText={errors.code?.message}
      />
      <Button isLoading={verifyingCode} type="submit">
        Confirm
      </Button>
    </FormContainer>
  );
};
