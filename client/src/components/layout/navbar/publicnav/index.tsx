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
          navigate('/login');
        }}
      >
        Log In
      </Button>
      <Button
        onClick={() => {
          navigate('/signup');
        }}
      >
        Sign Up
      </Button>
    </>
  );
};
