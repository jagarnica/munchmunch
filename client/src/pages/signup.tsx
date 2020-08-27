import React from 'react';
import styled from 'styled-components';
import { Layout, SEO } from 'components/layout';
import { SignUpCustomerForm } from 'components/auth';
const IndexPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Login To Munch Munch" />
    <FormContainer>
      <SignUpCustomerForm />
    </FormContainer>
  </Layout>
);

export default IndexPage;
const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
