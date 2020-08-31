import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Box, Text, Button, useToast } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { getSignUpErrorMessage } from 'utils/';
import { FormContainer, FormInput } from 'components/formelements/';
import { ConfirmationCode } from 'components/auth/formrules';
import { debounce } from 'lodash';

interface CofirmPhoneProps {
  userEmailAddress: string;
  callback: (success: boolean) => void;
}
export function ConfirmPhoneForm({ userEmailAddress, callback }: CofirmPhoneProps): JSX.Element {
  const { register, errors, handleSubmit } = useForm<{ confirmationCode: string }>();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [resentTextLoading, setResentTextLoading] = useState(false);
  const handleConfirmation = async (data: { confirmationCode: string }) => {
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(userEmailAddress, data.confirmationCode);
      setIsLoading(false);
      callback(true);
    } catch (e) {
      callback(false);
      setIsLoading(false);
    }
  };
  const handleResendText = debounce(async () => {
    try {
      setResentTextLoading(true);
      await Auth.resendSignUp(userEmailAddress);
      toast({
        title: 'Resent!',
        description: 'You should get a text with your code very soon!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setResentTextLoading(false);
    } catch (e) {
      const errorMessage = getSignUpErrorMessage(e.code, 'There was an issue resending your code');
      setResentTextLoading(false);
      toast({
        title: 'Oops!',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, 500);
  return (
    <Box>
      <FormContainer onSubmit={handleSubmit(handleConfirmation)} formTitle="One last step!">
        <Text>We sent you a text to the number you entered.</Text>

        <FormInput
          elementDetails={ConfirmationCode}
          ref={register({
            ...ConfirmationCode.rules,
          })}
          errorText={errors?.confirmationCode?.message}
        />
        <Button isLoading={isLoading} type="submit">
          Confirm
        </Button>

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
          variantColor="blue"
        >
          Resend confirmation text
        </Button>
      </FormContainer>
    </Box>
  );
}
