import React from 'react';
import { SEO } from 'components/general/seo';
import { LoginCustomerForm } from '../auth/';
import styled from 'styled-components';
const IndexPage = (): React.ReactElement => (
  <>
    <SEO title="Login To Munch Munch" />
    <FormContainer>
      <LoginCustomerForm />
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
