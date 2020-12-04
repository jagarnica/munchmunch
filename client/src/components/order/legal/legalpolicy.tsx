import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types/types';
import { Text } from '@chakra-ui/react';

export const LegalPolicy: React.FC<MainRouteComponent> = () => (
  <Layout>
    <SEO title="Legal Policy" />
    <Text color="red.700" fontSize="2xl">
      Legal Policy
    </Text>
    <h2>Munch Munch</h2>
    <p>GDPR stuff and other legal stuff</p>
  </Layout>
);
