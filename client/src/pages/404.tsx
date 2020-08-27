import React from 'react';
import { Layout } from '../components/general/layout/layout';
import { SEO } from '../components/general/seo/seo';
import { RouteComponentProps } from '@reach/router';
const NotFoundPage: React.FC<RouteComponentProps> = (): React.ReactElement => (
  <>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
);

export default NotFoundPage;
