import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

// Default Styles for the card
const defaultStyles: BoxProps = {
  width: '100%',
  d: 'flex',
  flexDir: 'column',
  alignSelf: 'strech',
  justifyContent: 'center',
  boxShadow: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
  alignItems: 'stretch',
  borderColor: 'gray.200',
  borderRadius: '40px',
  background: 'white',
  padding: '2.45rem 1.45rem',
};
/**
 * @name card
 * @description This is a generic card. Useful for creating on the spot or quick cards. Also
 * good for basing the other cards on the site on.
 * @returns JSX.Element
 */
export const Card: React.FC<BoxProps> = ({ children, ...rest }): JSX.Element => (
  <Box {...defaultStyles} {...rest}>
    {children}
  </Box>
);
