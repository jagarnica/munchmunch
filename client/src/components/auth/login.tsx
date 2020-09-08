import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import { Text, Button, Link, useToast } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from 'components/formelements/';
import { useAppContext } from 'libs/contextLib';
import { customerEmail, customerPassword } from 'utils/formrules';

export type LoginCustomerFormType = {
  email: string;
  password: string;
};
export function LoginCustomerForm(): React.ReactElement {
  const { userHasAuthenticated } = useAppContext();
  const { register, handleSubmit, errors } = useForm<LoginCustomerFormType>();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password }: LoginCustomerFormType) => {
    try {
      setIsLoading(true);
      await Auth.signIn(email, password);

      userHasAuthenticated?.(true); // Login user in our context
      toast({
        title: 'Logged in!',
        description: 'Welcome back to Munch Munch!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/'); // Navigate to the home page
    } catch (e) {
      toast({
        title: 'Whoops!',
        description: "We don't recognize that email and password combination. Check your spelling!",
        status: 'error',
        duration: 2000,
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
      <Link
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          event.preventDefault();
          navigate('forgotpassword');
        }}
      >
        Forgot your password?
      </Link>
      <Text marginTop="1.45rem">
        {`Don't have an account? `}
        <Link
          style={{
            fontWeight: 'bold',
          }}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            navigate('signup');
          }}
        >
          Sign Up
        </Link>
      </Text>
    </FormContainer>
  );
}
