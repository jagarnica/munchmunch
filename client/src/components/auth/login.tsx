import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import { Text, Button, Link, useToast } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from 'components/formelements/';
import { customerEmail, customerPassword } from './formrules';

export type LoginCustomerFormType = {
  email: string;
  password: string;
};
export function LoginCustomerForm(): React.ReactElement {
  const { register, handleSubmit, errors } = useForm<LoginCustomerFormType>();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password }: LoginCustomerFormType) => {
    try {
      setIsLoading(true);
      await Auth.signIn(email, password);
      toast({
        title: 'Logged in!',
        description: 'Welcome back to Munch Munch!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      navigate('/');
    } catch (e) {
      toast({
        title: 'Whoops!',
        description: "We don't recognize that email and password combination. Check your spelling!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <FormContainer formTitle="Login" onSubmit={handleSubmit(onSubmit)}>
      {/* Email Section */}
      <FormInput
        elementDetails={customerEmail}
        errorText={errors.email?.message}
        ref={register({
          ...customerEmail.rules,
        })}
      />
      {/* Password section */}
      <FormInput
        elementDetails={customerPassword}
        errorText={errors.password?.message}
        ref={register({
          ...customerPassword.rules,
        })}
      />
      <Button isLoading={isLoading} marginTop="1.45rem" width="100%" type="submit">
        Log In
      </Button>
      <Text marginTop="1.45rem">
        {`Don't have an account? `}
        <Link
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            navigate('/signup');
          }}
        >
          Sign Up
        </Link>
      </Text>
    </FormContainer>
  );
}
