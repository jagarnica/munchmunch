import React from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { SignUpCustomerForm } from '../components/auth';
import styled from 'styled-components';
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
