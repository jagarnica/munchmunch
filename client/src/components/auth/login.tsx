import * as React from 'react';
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import { Text, Button, Link, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FormInput, FormContainer } from 'components/formelements/';
import { useAppContext } from 'libs/contextLib';
import { customerEmail, customerPassword } from 'utils/formrules';
import { AWSignInResponse, User } from 'types/';
import { ConfirmPhoneForm } from 'components/auth/';

export type LoginCustomerFormType = {
  email: string;
  password: string;
};
export function LoginCustomerForm(): React.ReactElement {
  const { dispatch } = useAppContext();
  const { register, handleSubmit, errors } = useForm<LoginCustomerFormType>();
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState<undefined | string>(undefined);
  const [userPassword, setUserPassword] = React.useState<undefined | string>(undefined);
  const onSubmit = async ({ email, password }: LoginCustomerFormType) => {
    try {
      setIsLoading(true);
      const response: AWSignInResponse = await Auth.signIn(email, password);
      const { attributes } = response;
      const user: User = {
        familyName: attributes.family_name,
        name: attributes.name,
        email: attributes.email,
      };
      dispatch?.({
        type: 'LOGIN_SUCCESS',
        payload: {
          user,
        },
      });
      toast({
        title: 'Logged in!',
        description: 'Welcome back to Munch Munch!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/', { replace: true }); // Navigate to the home page
    } catch (e) {
      if (e.code === 'UserNotConfirmedException') {
        // Save the user details to state
        setUserEmail(email);
        setUserPassword(password);
        // Resend the code
        Auth.resendSignUp(email);
        // We are now in the reverifying phase
        setIsVerifying(true);
      } else {
        toast({
          title: 'Whoops!',
          description: "We don't recognize that email and password combination. Check your spelling!",
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }

      setIsLoading(false);
    }
  };
  async function handleUserVerification(success: boolean) {
    if (!success) {
      toast({
        title: 'Oops!',
        description: 'Check your confirmation code for any typos!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      try {
        if (!userEmail || !userPassword) throw new Error('Email or password undefined');
        const response: AWSignInResponse = await Auth.signIn(userEmail, userPassword);
        const { attributes } = response;
        const user: User = {
          familyName: attributes.family_name,
          name: attributes.name,
          email: attributes.email,
        };
        dispatch?.({
          type: 'LOGIN_SUCCESS',
          payload: {
            user,
          },
        });
        toast({
          title: 'Logged In',
          status: 'success',
          description: 'Thanks for verifying!',
          duration: 5000,
          isClosable: true,
        });
        await navigate('/', { replace: true });
      } catch (e) {
        // logging in the user failed...
        navigate('/login', { replace: true });
        toast({
          title: 'Account Verified!',
          description: 'Please try logging in again!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }
  if (isVerifying && userEmail) {
    return <ConfirmPhoneForm callback={handleUserVerification} userEmailAddress={userEmail} />;
  }
  return (
    <FormContainer formTitle="Login" onSubmit={handleSubmit(onSubmit)}>
      {/* Email Section */}
      <FormInput
        elementDetails={customerEmail}
        errorText={errors.email?.message}
        autoComplete="username"
        ref={register({
          ...customerEmail.rules,
        })}
      />
      {/* Password section */}
      <FormInput
        elementDetails={customerPassword}
        errorText={errors.password?.message}
        autoComplete="password"
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
