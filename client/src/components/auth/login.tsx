import React, { useState } from 'react';
import { FormControl, FormLabel, Text, Link, Button, theme, Input } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormContainer } from './formcontainer';
import { customerPasswordRules } from './formrules';
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            isInvalid={errors.email ? true : false}
            name="email"
            ref={register({
              required: 'Please Enter an Email Address',
              maxLength: 40,
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <Text color={theme.colors.red[600]} marginTop="0.5rem">
              {errors.email.message}
            </Text>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel marginTop="1.45rem" htmlFor="password">
            Password
          </FormLabel>
          <Input
            isInvalid={errors.password ? true : false}
            name="password"
            ref={register({ ...customerPasswordRules })}
            placeholder="Password"
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
      </form>

      <Text marginTop="1.45rem">
        {`Don't have an account? `}
        <Link as="a">Sign Up</Link>
      </Text>
    </FormContainer>
  );
}
