import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types/types';
import { Text } from '@chakra-ui/react';

export const TermsOfUsePage: React.FC<MainRouteComponent> = () => (
  <Layout>
    <SEO title="Terms Of Service" />
    <Text color="red.700" fontSize="2xl">
      Terms of Service
    </Text>
    <h2>Munch Munch</h2>
    <p>This is were all the legal jargin goes when we make it!</p>
  </Layout>
);
