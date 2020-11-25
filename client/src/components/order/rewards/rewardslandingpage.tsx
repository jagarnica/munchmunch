import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types/types';
import { Text } from '@chakra-ui/react';

export const MunchMunchRewards: React.FC<MainRouteComponent> = () => (
  <Layout>
    <SEO title="Munch Munch Rewards" />
    <Text color="red.700" fontSize="2xl">
      Munch Munch Rewards
    </Text>
    <h2>heard you like stickers...</h2>
  </Layout>
);
