import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Text, Flex, Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { getSignUpErrorMessage } from 'utils/aws';
import { FormContainer, FormInput } from 'components/formelements/';
import { confirmationCode } from 'utils/formrules';
import { debounce } from 'lodash';

interface ConfirmPhoneProps {
  userEmailAddress: string;
  callback: (success: boolean) => void | Promise<void>;
}
export function ConfirmPhoneForm({ userEmailAddress, callback }: ConfirmPhoneProps): JSX.Element {
  const { register, errors, handleSubmit, watch } = useForm<{ confirmationCode: string }>();
  const toast = useToast();
  // Logic for our buttons
  const [isLoading, setIsLoading] = useState(false);
  const [resentTextLoading, setResentTextLoading] = useState(false);
  // This handles the confirmation portion
  const handleConfirmation = async (data: { confirmationCode: string }) => {
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(userEmailAddress, data.confirmationCode);
      // setIsLoading(false);
      await callback(true);
    } catch (e) {
      setIsLoading(false);
      await callback(false);
    }
  };
  const handleResendFailure = debounce(e => {
    const errorMessage = getSignUpErrorMessage(e.code, 'There was an issue resending your code');
    setResentTextLoading(false);
    toast({
      title: 'Oops!',
      description: errorMessage,
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  }, 1000);
  const handleResendSuccess = debounce(() => {
    toast({
      title: 'Resent!',
      description: 'You should get a text with your code very soon!',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    setResentTextLoading(false);
  }, 1000);
  // Handle the user wanting to resend their text message
  const handleResendText = debounce(
    async () => {
      try {
        setResentTextLoading(true);

        await Auth.resendSignUp(userEmailAddress);
        // This means we actually got to send the text
        handleResendSuccess();
      } catch (e) {
        handleResendFailure(e);
      }
    },
    250,
    {
      leading: true,
      trailing: false,
    }
  );

  const codeLength = confirmationCode.rules.minLength.value;
  // The code should be the same amount of digits.
  const isButtonDisabled = watch().confirmationCode?.length !== codeLength;

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleConfirmation)} formTitle="One last step!">
        <Text>We sent you a text to the number you entered.</Text>
        <FormInput
          elementDetails={confirmationCode}
          ref={register({
            ...confirmationCode.rules,
          })}
          errorText={errors?.confirmationCode?.message}
        />
        <Button isDisabled={isButtonDisabled} isLoading={isLoading} type="submit">
          Confirm
        </Button>
        <Flex flexDirection="column">
          <Button
            isLoading={resentTextLoading}
            variant="ghost"
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              if (!resentTextLoading) {
                setResentTextLoading(true);
              }
              handleResendText();
            }}
            colorScheme="blue"
          >
            Resend confirmation text
          </Button>
        </Flex>
      </FormContainer>
    </>
  );
}
