import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SEO } from 'components/shared/layout';
import { ForgotPasswordForm } from 'components/auth/';
import { MainRouteComponent } from 'types';

export const ForgotPasswordPage: React.FC<MainRouteComponent> = (): React.ReactElement => {
  return (
    <>
      <SEO title="Recover your password" />
      <Flex justifyContent="center" alignItems="center" alignContent="center" width="100%">
        <ForgotPasswordForm />
      </Flex>
    </>
  );
};
