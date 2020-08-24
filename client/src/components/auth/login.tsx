import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
export type LoginCustomerFormData = {
  email: string;
  password: string;
};
export function LoginCustomerForm(): React.ReactElement {
  const { register, handleSubmit, errors } = useForm<LoginCustomerFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: LoginCustomerFormData) => {
    setIsLoading(true);
    console.log('here is the data', data);
  };

  return (
    <Chakra.Box width="100%" maxW="md" borderWidth="1px" rounded="lg" overflow="hidden">
      <Chakra.Flex padding="1.45rem" flexDirection="column">
        <Chakra.Heading alignSelf="center">Login</Chakra.Heading>
        <Chakra.FormControl>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Chakra.FormLabel htmlFor="email">Email</Chakra.FormLabel>
            <Chakra.Input
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
              <Chakra.Text color={Chakra.theme.colors.red[600]} marginTop="0.5rem">
                {errors.email.message}
              </Chakra.Text>
            )}
            <Chakra.FormLabel marginTop="1.45rem" htmlFor="password">
              Password
            </Chakra.FormLabel>
            <Chakra.Input
              isInvalid={errors.password ? true : false}
              name="password"
              ref={register({ required: 'Please enter a password.', maxLength: 40 })}
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <Chakra.Text color={Chakra.theme.colors.red[600]} marginTop="0.5rem">
                {errors.password.message}
              </Chakra.Text>
            )}
            <Chakra.Button isLoading={isLoading} marginTop="1.45rem" width="100%" type="submit">
              Log In
            </Chakra.Button>
          </form>
        </Chakra.FormControl>
        <Chakra.Text marginTop="1.45rem">
          Don't have an account? <Chakra.Link as="a">Sign Up</Chakra.Link>
        </Chakra.Text>
      </Chakra.Flex>
    </Chakra.Box>
  );
}
