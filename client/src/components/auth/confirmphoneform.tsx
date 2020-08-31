import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Box, Heading, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormContainer, FormInput } from 'components/formelements/';
import { ConfirmationCode } from 'components/auth/formrules';
interface CofirmPhoneProps {
  userEmailAddress: string;
  callback: (success: boolean) => void;
}
export const ConfirmPhoneForm = ({ userEmailAddress, callback }: CofirmPhoneProps) => {
  const { register, errors, handleSubmit } = useForm();
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
        <Heading>Last step!</Heading>
        <FormInput
          elementDetails={ConfirmationCode}
          ref={register({
            ...ConfirmationCode.rules,
          })}
          errorText={errors?.confirmationCode}
        />
        <Button type="submit">Confirm</Button>
      </FormContainer>
    </Box>
  );
};
