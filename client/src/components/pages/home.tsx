import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types';

export const HomePage: React.FC<MainRouteComponent> = (): React.ReactElement => (
  <Layout>
    <SEO title="Welcome to Munch Munch!" description="Order food for pickup from your favorite restaurants" />
    <p>Welcome to the Munch Munch home page.</p>
  </Layout>
);
