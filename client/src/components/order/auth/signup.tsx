import * as React from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { SEO } from 'components/shared/layout';
import { SignUpCustomerForm } from 'components/auth';
import { MainRouteComponent } from 'types/types';
import { navigate } from '@reach/router';

export const SignUpPage: React.FC<MainRouteComponent> = (): React.ReactElement => {
  const toast = useToast();
  function handleSuccess() {
    navigate('/login');
    toast({
      title: 'Account Created!',
      description: 'Welcome to Munch Munch!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <>
      <SEO title="Sign Up for Munch Munch" />
      <Box d="flex" w="100%" justifyContent="center" alignItems="center" alignContent="center">
        <SignUpCustomerForm onSuccessfulSignUp={handleSuccess} />
      </Box>
    </>
  );
};
