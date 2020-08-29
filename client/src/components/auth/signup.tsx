import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Text, useToast, Link, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer, FormPhone } from '../formelements';
import { customerEmail, customerPassword, firstName, lastName } from './formrules';

export type SignUpCustomerFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export function SignUpCustomerForm(): React.ReactElement {
  const { register, handleSubmit, errors } = useForm<SignUpCustomerFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const onSubmit = async (data: SignUpCustomerFormType) => {
    try {
      setIsLoading(true);
      await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          family_name: data.lastName,
          name: data.firstName,
          phone_number: '+16502834364',
        },
      });

      toast({
        title: 'Confirm your email!',
        description: 'One step closer to deliciousness',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.error(e);
      toast({
        title: 'Error',
        description: 'There was an issue creating your account.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  return (
    <FormContainer formTitle="Sign Up" onSubmit={handleSubmit(onSubmit)}>
      {/** FIRST NAME SECTION */}
      <FormInput
        elementDetails={firstName}
        errorText={errors.firstName?.message}
        ref={register({
          ...firstName.rules,
        })}
      />
      {/** LAST NAME SECTION */}
      <FormInput
        elementDetails={lastName}
        errorText={errors.lastName?.message}
        ref={register({
          ...lastName.rules,
        })}
      />
      {/** Email SECTION */}
      <FormInput
        elementDetails={customerEmail}
        errorText={errors.email?.message}
        ref={register({
          ...customerEmail.rules,
        })}
      />
      {/** Phone number section */}
      <FormPhone />
      {/** Password SECTION */}
      <FormInput
        elementDetails={customerPassword}
        errorText={errors.password?.message}
        ref={register({
          ...customerPassword.rules,
        })}
      />
      <Button isLoading={isLoading} width="100%" type="submit">
        Sign Up
      </Button>
      <Text>
        {`Already have an account? `}
        <Link as="a">Log in</Link>
      </Text>
    </FormContainer>
  );
}
