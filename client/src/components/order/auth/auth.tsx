import React from 'react';
import { useAppContext } from 'libs/contextLib';
import { DefaultPageProps } from 'types';
import { Redirect } from '@reach/router';

export const AuthPage: React.FC<DefaultPageProps> = props => {
  const { state } = useAppContext();
  const user = state?.user;
  if (user) {
    // User is already logged in
    return <Redirect to="/" noThrow />;
  }
  return (
    <>
      <>{props.children}</>
    </>
  );
};
