import React from 'react';
import { SEO } from 'components/general/seo';

const IndexPage = (): React.ReactElement => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
);

export default IndexPage;
