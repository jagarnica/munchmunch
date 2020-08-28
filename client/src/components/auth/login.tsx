import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FormControl, FormLabel, Text, Button, theme, Input } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormContainer } from './formcontainer';
import { customerEmail, customerPassword } from './formrules';

export type LoginCustomerFormType = {
  email: string;
  password: string;
};
export function LoginCustomerForm(): React.ReactElement {
  const { register, handleSubmit, errors } = useForm<LoginCustomerFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: LoginCustomerFormType) => {
    setIsLoading(true);
    console.log('here is the data', data);
  };

  return (
    <FormContainer formTitle="Login" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor={customerEmail.id}>Email</FormLabel>
        <Input
          isInvalid={!!errors.email}
          name={customerEmail.id}
          ref={register({
            ...customerEmail.rules,
          })}
          placeholder={customerEmail.placeholder}
        />
        {errors.email && (
          <Text color={theme.colors.red[600]} marginTop="0.5rem">
            {errors.email.message}
          </Text>
        )}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor={customerPassword.id}>Password</FormLabel>
        <Input
          isInvalid={!!errors.password}
          name={customerPassword.id}
          ref={register({ ...customerPassword.rules })}
          placeholder={customerPassword.placeholder}
          type="password"
        />
        {errors.password && (
          <Text color={theme.colors.red[600]} marginTop="0.5rem">
            {errors.password.message}
          </Text>
        )}
      </FormControl>
      <Button isLoading={isLoading} marginTop="1.45rem" width="100%" type="submit">
        Log In
      </Button>

      <Text marginTop="1.45rem">
        {`Don't have an account? `}
        <Link to="/signup">Sign Up</Link>
      </Text>
    </FormContainer>
  );
}
