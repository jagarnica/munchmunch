import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Text, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from 'components/formelements/';
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
        <Link to="/signup">Sign Up</Link>
      </Text>
    </FormContainer>
  );
}
