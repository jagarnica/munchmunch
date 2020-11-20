import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types/types';
import { Text } from '@chakra-ui/core';

export const DoNotSellMyData: React.FC<MainRouteComponent> = () => (
  <Layout>
    <SEO title="Do Not Sell My Data" />
    <Text color="red.700" fontSize="2xl">
      Data Privacy at Munch Munch
    </Text>
    <p>what we can and cant do with data...honestly a bit confused writting all this so it a place holder 100%</p>
  </Layout>
);
