import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Box, Text, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormContainer, FormInput } from 'components/formelements/';
import { ConfirmationCode } from 'components/auth/formrules';
interface CofirmPhoneProps {
  userEmailAddress: string;
  callback: (success: boolean) => void;
}
export function ConfirmPhoneForm({ userEmailAddress, callback }: CofirmPhoneProps) {
  const { register, errors, handleSubmit } = useForm<{ confirmationCode: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirmation = async (data: { confirmationCode: string }) => {
    console.log('This code was received!');
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
      </FormContainer>
    </Box>
  );
}
