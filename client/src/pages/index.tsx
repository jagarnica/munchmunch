import React from 'react';
import { Layout, SEO } from 'components/layout';

const IndexPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
