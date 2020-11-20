import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types/types';
import { Text } from '@chakra-ui/core';

export const CAPrivacyNotice: React.FC<MainRouteComponent> = () => (
  <Layout>
    <SEO title="California Privacy Notice" />
    <Text color="red.700" fontSize="2xl">
      California Privacy Notice
    </Text>
    <h2>Munch Munch</h2>
    <p>The califonia initiuative regardling what the consumer can do with their data that we collect.</p>
  </Layout>
);
