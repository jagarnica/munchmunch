import React, { useState } from 'react';
import { Text, Link, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from '../formelements';
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

  const onSubmit = (data: SignUpCustomerFormType) => {
    setIsLoading(true);
    console.log('here is the data', data);
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
