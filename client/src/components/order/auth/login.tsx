import React from 'react';
import styled from 'styled-components';
import { SEO } from 'components/shared/layout';
import { LoginCustomerForm } from 'components/auth/';
import { MainRouteComponent } from 'types';

export const LoginPage: React.FC<MainRouteComponent> = (): React.ReactElement => {
  return (
    <>
      <SEO title="Login To Munch Munch" />
      <FormContainer>
        <LoginCustomerForm />
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
