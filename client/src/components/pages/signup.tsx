import React from 'react';
import SEO from '../seo';
import { SignUpCustomerForm } from '../auth/';
import styled from 'styled-components';
const IndexPage = (): React.ReactElement => (
  <>
    <SEO title="Login To Munch Munch" />
    <FormContainer>
      <SignUpCustomerForm />
    </FormContainer>
  </>
);

export default IndexPage;
const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
