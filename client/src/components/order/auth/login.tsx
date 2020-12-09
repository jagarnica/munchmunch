import React from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { SEO } from 'components/shared/layout';
import { LoginCustomerForm } from 'components/auth/';
import { MainRouteComponent } from 'types';
import { useAppContext } from 'libs/contextLib';
import { AWSignInResponse, User } from 'types/';
import { navigate } from '@reach/router';

export const LoginPage: React.FC<MainRouteComponent> = (): React.ReactElement => {
  const { dispatch } = useAppContext();
  const toast = useToast();

  const handleSuccess = (response: AWSignInResponse) => {
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
  };
  const handleFail = () => {
    toast({
      title: 'Whoops!',
      description: "We don't recognize that email and password combination. Check your spelling!",
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <>
      <SEO title="Login To Munch Munch" />
      <Box d="flex" w="100%" justifyContent="center" alignItems="center" alignContent="center">
        <LoginCustomerForm onLoginFail={handleFail} onLoginSuccess={handleSuccess} />
      </Box>
    </>
  );
};
