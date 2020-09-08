import React from 'react';
import styled from 'styled-components';
import { SEO } from 'components/layout';
import { SignUpCustomerForm } from 'components/auth';
import { DefaultPageProps } from 'types/types';

export const SignUpPage: React.FC<DefaultPageProps> = (): React.ReactElement => (
  <>
    <SEO title="Sign Up for Munch Munch" />
    <FormContainer>
      <SignUpCustomerForm />
    </FormContainer>
  </>
);

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
