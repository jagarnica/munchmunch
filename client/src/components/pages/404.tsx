import React from 'react';
import { Layout, SEO } from 'components/layout/';
import { DefaultPageProps } from 'types/types';

export const NotFoundPage: React.FC<DefaultPageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);
