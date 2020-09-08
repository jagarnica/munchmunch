import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { Text, useToast, Link, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
import { ConfirmPhoneForm } from 'components/auth/';
import { formatToAWSPhoneNumber, getSignUpErrorMessage } from 'utils/aws';
import { customerEmail, phoneNumber, customerPassword, firstName, lastName } from 'utils/formrules';
import { FormInput, FormContainer, FormPhone } from '../formelements';

export type SignUpCustomerFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export function SignUpCustomerForm(): React.ReactElement {
  const { register, handleSubmit, errors } = useForm<SignUpCustomerFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<null | ISignUpResult>(null);
  const [accountCreated, setAccountCreated] = useState(false);
  const toast = useToast();
  const onSubmit = async (data: SignUpCustomerFormType) => {
    try {
      setIsLoading(true);
      const userPhoneNumber = formatToAWSPhoneNumber(data.phoneNumber);
      const newUser = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          family_name: data.lastName,
          name: data.firstName,
          phone_number: userPhoneNumber,
        },
      });

      setUser(newUser);
      setIsLoading(true);
      setAccountCreated(true);
    } catch (e) {
      const errorMessage = getSignUpErrorMessage(e?.code);
      toast({
        title: 'Oops!',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  function handleConfirmationCodeSubmit(result: boolean) {
    if (!result) {
      toast({
        title: 'Oops!',
        description: 'Check your cofirmation code for any typos!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      navigate('/');
      toast({
        title: 'Account Created!',
        description: 'Welcome to Munch Munch!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return accountCreated && user ? (
    <ConfirmPhoneForm callback={handleConfirmationCodeSubmit} userEmailAddress={user?.user?.getUsername()} />
  ) : (
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
      <FormPhone
        errorText={errors.phoneNumber?.message}
        ref={register({
          required: {
            value: true,
            message: 'Please enter a valid US phone number',
          },
          ...phoneNumber.rules,
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
        <Link
          onClick={() => {
            navigate('login');
          }}
        >
          Log in
        </Link>
      </Text>
    </FormContainer>
  );
}
