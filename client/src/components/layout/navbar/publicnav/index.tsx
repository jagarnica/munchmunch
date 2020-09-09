import React from 'react';
import { navigate } from 'gatsby';

import { Button } from '@chakra-ui/core';

export const PublicSideMenu = (): JSX.Element => {
  return (
    <>
      <Button
        className="loginButton"
        variant="outline"
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        Log In
      </Button>
      <Button
        onClick={() => {
          navigate('/auth/signup');
        }}
      >
        Sign Up
      </Button>
    </>
  );
};
