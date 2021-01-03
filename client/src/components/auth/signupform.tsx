import * as React from 'react';
import { Auth } from 'aws-amplify';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { Text, useToast, Link, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
import { ConfirmSignUpForm } from 'components/auth/';
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
export interface SignUpCustomerFormProps {
  onSuccessfulSignUp: () => void;
}
export function SignUpCustomerForm({ onSuccessfulSignUp }: SignUpCustomerFormProps): React.ReactElement {
  const { register, handleSubmit, errors } = useForm<SignUpCustomerFormType>();

  const [isLoading, setIsLoading] = React.useState(false);
  const [accountCreated, setAccountCreated] = React.useState(false);
  const [user, setUser] = React.useState<null | ISignUpResult>(null);

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
      // Save the user details in our component state only
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
  const handleConfirmationCodeSubmit = (result: boolean) => {
    if (result) {
      onSuccessfulSignUp?.();
    } else {
      toast({
        title: 'Oops!',
        description: 'Check your confirmation code for any typos!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return accountCreated && user ? (
    <ConfirmSignUpForm callback={handleConfirmationCodeSubmit} userEmailAddress={user?.user?.getUsername()} />
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
        id="username"
        elementDetails={customerEmail}
        errorText={errors.email?.message}
        autoComplete="username"
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
        id="password"
        elementDetails={customerPassword}
        errorText={errors.password?.message}
        autoComplete="password"
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
          fontWeight="bold"
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
