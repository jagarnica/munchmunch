import React, { useState } from 'react';
import { FormControl, FormLabel, Text, Link, Button, theme, Input } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { FormContainer } from './formcontainer';
import { customerEmailRulesInput, customerPasswordInput, lastNameInput, firstNameInput } from './formrules';
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
      <FormControl isRequired>
        {/** FIRST NAME SECTION */}
        <FormLabel htmlFor={firstNameInput.id}>First Name</FormLabel>
        <Input
          isInvalid={errors.firstName ? true : false}
          name={firstNameInput.id}
          ref={register({
            ...firstNameInput.rules,
          })}
          placeholder={firstNameInput.placeholder}
        />
        {errors.firstName && (
          <Text color={theme.colors.red[600]} marginTop="0.5rem">
            {errors.firstName.message}
          </Text>
        )}
      </FormControl>
      {/** LAST NAME SECTION */}
      <FormControl isRequired>
        <FormLabel htmlFor={lastNameInput.id}>Last Name</FormLabel>
        <Input
          isInvalid={errors.lastName ? true : false}
          name="lastName"
          ref={register({
            ...lastNameInput.rules,
          })}
          placeholder={lastNameInput.placeholder}
        />
        {errors.lastName && (
          <Text color={theme.colors.red[600]} marginTop="0.5rem">
            {errors.lastName.message}
          </Text>
        )}
      </FormControl>
      {/** Email SECTION */}
      <FormControl isRequired>
        <FormLabel htmlFor={customerEmailRulesInput.id}>Email</FormLabel>
        <Input
          isInvalid={errors.email ? true : false}
          name={customerEmailRulesInput.id}
          ref={register({
            ...customerEmailRulesInput.rules,
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
        {/** Password SECTION */}
        <FormLabel htmlFor={customerPasswordInput.id}>Password</FormLabel>
        <Input
          isInvalid={errors.password ? true : false}
          name={customerPasswordInput.id}
          ref={register({
            ...customerPasswordInput.rules,
          })}
          placeholder={customerPasswordInput.placeholder}
          type="password"
        />
        {errors.password && (
          <Text color={theme.colors.red[600]} marginTop="0.5rem">
            {errors.password.message}
          </Text>
        )}
      </FormControl>
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
