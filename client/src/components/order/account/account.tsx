import React from 'react';
import { Layout } from 'components/shared/layout';
import { UserProfile } from './userprofile';

export const Account = (): JSX.Element => {
  return (
    <Layout>
      <UserProfile />
    </Layout>
  );
};
