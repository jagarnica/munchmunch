import React from 'react';
import { Layout, SEO } from 'components/shared/layout';
import { DefaultPageProps } from 'types';

export const AuthPage: React.FC<DefaultPageProps> = props => {
  return (
    <Layout>
      <SEO title="Login To Munch Munch" />
      <>{props.children}</>
    </Layout>
  );
};
