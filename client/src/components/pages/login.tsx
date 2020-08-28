import React from 'react';
import styled from 'styled-components';
import { Layout, SEO } from 'components/layout';
import { LoginCustomerForm } from 'components/auth/';
import { DefaultPageProps } from 'types';

export const LoginPage: React.FC<DefaultPageProps> = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Login To Munch Munch" />
      <FormContainer>
        <LoginCustomerForm />
      </FormContainer>
    </Layout>
  );
};

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
